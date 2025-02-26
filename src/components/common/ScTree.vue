<template>
  <div>
    <div class="mb-2">
      <sc-button size="small" @click="add" :disabled="selectedNode === null">
        {{ $t('추가') }}
      </sc-button>
      <sc-button size="small" @click="expandAll">
        {{ $t('모두 열기') }}
      </sc-button>
      <sc-button size="small" @click="collapseAll">
        {{ $t('모두 닫기') }}
      </sc-button>
    </div>

    <div class="tree-container !h-[100%] mb-3" :style="{ height: containerHeight }">
      <sc-tree-node
        :treeInfo="model.treeInfo"
        :tree-children="model.children"
        @select-node="onSelectedNode"
      ></sc-tree-node>
    </div>
  </div>
</template>

<script>
import { computed, provide, ref, watch } from 'vue';
import { showAlert, showConfirm } from '@/plugins/util';
import ScTreeNode from '@/components/common/ScTreeNode.vue';
import ScButton from '@/components/common/ScButton.vue';

export default {
  name: 'ScTree',
  components: { ScTreeNode, ScButton },
  props: {
    modelValue: {
      type: Object,
      default: () => {},
    },
    height: {
      type: [String, Number],
      default: '500',
    },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const model = ref(props.modelValue);
    const treeNodes = ref([]);
    const expandNodes = ref([]);
    const selectedNode = ref(null);
    const isNewStatus = ref(false);
    const containerHeight = computed(() => {
      if (!isNaN(+props.height)) {
        return `${props.height}px`;
      }
      return props.height;
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        model.value = newValue;
      },
    );

    provide('addTreeItem', (treeNode, expand) => {
      treeNodes.value.push(treeNode);
      expandNodes.value.push(expand);
    });

    const removeTreeItemFn = (treeNode, expand = false) => {
      treeNodes.value = treeNodes.value.filter((t) => t !== treeNode);
      expandNodes.value = expandNodes.value.filter((ex) => ex !== expand);

      // UI에서 제거
      const parentKey = treeNode.treeInfo.parentKey;
      const parentNode = findNode(parentKey, model.value);
      // console.info('parentNode', parentNode, parentNode.children);
      parentNode.children = parentNode.children.filter((n) => n.treeInfo.key !== '');
      isNewStatus.value = false;
      selectedNode.value = null;
      emit('select', null);
    };
    provide('removeTreeItem', removeTreeItemFn);

    provide('selectedNode', () => {
      return selectedNode.value;
    });

    provide('newStatus', () => {
      return isNewStatus.value;
    });

    const add = (nodeObj = {}) => {
      // 현재 생성중인 상태라면 이벤트 무시하고 alert창
      if (isNewStatus.value) {
        showAlert('저장되지 않은 추가중인 항목이 있습니다');
        return;
      }
      const addItem = {
        treeInfo: {
          key: '',
          name: '',
          expanded: false,
          ...nodeObj,
        },
        children: [],
      };
      // parent 노드가 있는 경우
      if (selectedNode.value) {
        selectedNode.value.expanded = true;
        const parentNodeKey = selectedNode.value.key;
        const parentNode = findNode(parentNodeKey, model.value);
        console.info('root node : ', parentNode);
        addItem.treeInfo.parentKey = parentNode.treeInfo.key;
        addItem.treeInfo.depth = parentNode.treeInfo.depth + 1;
        parentNode.children.push(addItem);
        console.info('selectedNode.value : ', selectedNode.value);

        // 이름 생성
        const generateKey = `${parentNode.treeInfo.key}-${parentNode.children.length}`;
        addItem.treeInfo.name = generateKey;

        selectedNode.value = addItem.treeInfo;
        emit('select', selectedNode.value);
        isNewStatus.value = true;
      }
      // parent 노드가 없는 경우
      else {
        console.info('No Root!');
      }
    };

    const remove = (nodeObj, deleteCallbackFn = () => {}) => {
      // console.info('remove', nodeObj);
      const key = isNewStatus.value ? '' : nodeObj.key;
      const node = findNode(key, model.value);

      const hasChild = node.children.length > 0;
      // 현재 삭제할 대상의 children 하위 메뉴가 있는지 확인
      // 있으면 confirm
      const deleteTreeItem = () => {
        deleteCallbackFn();
      };
      if (hasChild) {
        showConfirm('하위 메뉴가 존재 합니다. 삭제 하시겠습니까?', deleteTreeItem);
      } else {
        showConfirm(
          '삭제하시겠습니까?',
          isNewStatus.value
            ? () => {
                removeTreeItemFn(node, false);
              }
            : deleteTreeItem,
        );
      }
    };

    const expandAll = () => {
      expandNodes.value.forEach((expand) => expand(true));
    };

    const collapseAll = () => {
      expandNodes.value.forEach((expand) => expand(false));
    };

    const findNode = (key, item) => {
      if (item.treeInfo.key === key) {
        return item;
      } else {
        let findItem = item.children.find((n) => n.treeInfo.key === key);
        if (findItem) {
          return findItem;
        } else {
          for (let i = 0; i < item.children.length; i++) {
            findItem = findNode(key, item.children[i]);
            if (findItem) {
              return findItem;
            }
          }
        }
      }
    };

    return {
      model,
      add,
      remove,
      expandAll,
      collapseAll,
      selectedNode,
      isNewStatus,
      containerHeight,
      findNode,
    };
  },
  methods: {
    onSelectedNode(node) {
      console.info('onSelectedNode : ', node);
      this.selectedNode = node;
      this.$emit('select', node);
    },
  },
};
</script>

<style scoped lang="scss">
.tree-container {
  border: 1px solid $SC-COLOR-GRAY-30;
  padding: 10px;
  overflow: auto;
}
</style>
