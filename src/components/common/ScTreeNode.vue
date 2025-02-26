<template>
  <div>
    <div class="flex items-center cursor-pointer mb-[4px] sc-tree-node-item" @click="onClick">
      <div :class="['icon', treeChildren.length > 0 ? '' : 'hidden']" @click.stop="onIconClick">
        <sc-icon :type="expanded ? 'minus' : 'plus'" color="#a5a5a5" custom-size="13" />
      </div>
      <span :class="['title', { selected: selected, disabled: !used }]">{{ name }}</span>
      <div v-if="treeInfo.key === ''" class="new-item" @click.stop="removeSelf">
        <sc-icon type="trash" color="cool-gray" custom-size="15" />
      </div>
    </div>
    <div class="ml-5" v-show="expanded">
      <sc-tree-node
        v-for="item in treeChildren"
        :tree-info="item.treeInfo"
        :tree-children="item.children"
        :key="item.treeInfo.key"
        @select-node="onSelectNode"
      />
    </div>
  </div>
</template>

<script>
import ScIcon from '@/components/common/ScIcon.vue';

export default {
  name: 'ScTreeNode',
  components: { ScIcon },
  emits: ['selectNode'],
  inject: {
    addTreeItem: {
      default: () => () => {},
    },
    removeTreeItem: {
      default: () => () => {},
    },
    selectedNode: {
      default: () => '',
    },
    newStatus: {
      default: () => false,
    },
  },
  props: {
    treeInfo: {
      type: Object,
      default: () => {
        return {
          expanded: false,
          key: 'MENU',
          name: 'MENU',
          useYn: 'Y',
        };
      },
    },
    treeChildren: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    visible() {
      return {
        visibility: this.treeChildren.length > 0 ? 'visible' : 'hidden',
      };
    },
    selected() {
      return this.selectedNode()?.key === this.treeInfo.key;
    },
    used() {
      return this.useYn == 'Y';
    },
  },
  data() {
    return {
      expanded: false,
      name: '',
      useYn: '',
      originalKey: null,
    };
  },
  methods: {
    onClick() {
      // 현재 생성중인 상태라면 이벤트 무시하고 alert 창
      if (this.newStatus() && this.treeInfo.key !== '') {
        this.$util.alert('저장되지 않은 추가중인 항목이 있습니다');
        return;
      }
      // 현재 선택한 노드를 재선택할경우 폴딩 액션
      if (this.selected) {
        this.expanded = !this.expanded;
      }
      this.$emit('selectNode', this.treeInfo);
    },
    onIconClick() {
      this.expanded = !this.expanded;
    },
    expand(shouldExpand) {
      this.expanded = shouldExpand;
    },
    removeSelf() {
      this.removeTreeItem(this, this.expand);
    },
    onSelectNode(node) {
      this.$emit('selectNode', node);
    },
  },
  created() {
    this.expanded = this.treeInfo.expanded;
    this.name = this.treeInfo.name;
    this.useYn = this.treeInfo.useYn;
    this.addTreeItem(this, this.expand);
  },
  watch: {
    'treeInfo.expanded'(val) {
      this.expanded = val;
    },
    'treeInfo.name'(val) {
      this.name = val;
    },
    'treeInfo.useYn'(val) {
      this.useYn = val;
    },
  },
};
</script>

<style scoped lang="scss">
.sc-tree-node-item {
  &:hover {
    background: $SC-COLOR-GRAY-10;
    .new-item {
      display: block;
    }
  }
  .new-item {
    flex-grow: 1;
    text-align: right;
    margin-left: 5px;
    padding-right: 5px;
    display: none;
  }
  .icon {
    border: 1px solid $SC-COLOR-GRAY-50;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13px;
    height: 13px;
    &.hidden {
      visibility: hidden;
    }
  }
  .title {
    font-size: 13px;
    font-weight: 500;
    height: 24px;
    line-height: 24px;
    padding-left: 5px;
    user-select: none;
    &.selected {
      color: $SC-PRIMARY-COLOR-LIGHT-BLUE;
    }
  }
}
.ml-5 {
  .sc-tree-node-item {
    .title {
      font-size: 13px;
      font-weight: 300;
      height: 24px;
      line-height: 24px;
      padding-left: 5px;
      user-select: none;
      color: $SC-COLOR-GRAY-90;
      &.selected {
        color: $SC-PRIMARY-COLOR-LIGHT-BLUE;
      }
      &.disabled {
        color: $SC-COLOR-GRAY-40;
      }
    }
  }
}
</style>
