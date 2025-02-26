<template>
  <div>
    <sc-sample-box>
      <div class="flex gap-5">
        <div class="w-[350px]">
          <sc-tree ref="tree" v-model="tree" @select="onSelect" />
        </div>
        <div class="flex-1">
          <div class="mb-2 text-right">
            <sc-button size="small" @click="onSave" :disabled="!['new', 'modify'].includes(status)"
              >저장</sc-button
            >
            <sc-button size="small" @click="onDelete" :disabled="['none'].includes(status)"
              >삭제</sc-button
            >
          </div>
          <sc-validator ref="validator">
            <sc-form-box col="1">
              <sc-form-item label="메뉴 ID" required>
                <sc-text-field v-if="selectNode === null" disabled />
                <sc-text-field v-else v-model="selectNode.replaceKey" :rules="[ruleRequired]" />
              </sc-form-item>
              <sc-form-item label="부모 메뉴 ID" required>
                <sc-text-field v-if="selectNode === null" disabled />
                <sc-text-field v-else v-model="selectNode.parentKey" disabled />
              </sc-form-item>
              <sc-form-item label="메뉴명" required>
                <sc-text-field v-if="selectNode === null" disabled />
                <sc-text-field
                  v-else
                  v-model="selectNode.name"
                  :rules="[ruleRequired, ruleMinLength(selectNode.name, 1)]"
                />
              </sc-form-item>
            </sc-form-box>
          </sc-validator>
        </div>
      </div>

      <sc-code-highlight
        template='<div class="w-[350px]">
          <sc-tree ref="tree" v-model="tree" @select="onSelect" />
        </div>
        <div class="flex-1">
        <!-- 우측 폼 -->
          <div class="mb-2 text-right">
            <sc-button size="small" @click="onSave" :disabled="![&#039;new&#039;, &#039;modify&#039;].includes(status)">저장</sc-button>
            <sc-button size="small" @click="onDelete" :disabled="![&#039;none&#039;].includes(status)">삭제</sc-button>
          </div>
          <sc-validator ref="validator">
            <sc-form-box col="1">
              <sc-form-item label="메뉴 ID" required>
                <sc-text-field v-if="selectNode === null" disabled />
                <sc-text-field v-else v-model="selectNode.replaceKey" :rules="[ruleRequired]" />
              </sc-form-item>
              <sc-form-item label="부모 메뉴 ID" required>
                <sc-text-field v-if="selectNode === null" disabled />
                <sc-text-field v-else v-model="selectNode.parentKey" disabled />
              </sc-form-item>
              <sc-form-item label="메뉴명" required>
                <sc-text-field v-if="selectNode === null" disabled />
                <sc-text-field v-else v-model="selectNode.name" :rules="[ruleRequired, ruleMinLength(SelectionMode.name, 1)]" />
              </sc-form-item>
            </sc-form-box>
          </sc-validator>
        </div>'
        script="
        export default {
          data() {
            return {
              selectNode: null,
              status: 'none', // none, new, modify
              tree: {
                treeInfo: {
                  key: 'MENU',
                  name: 'MENU',
                  expanded: false,
                },
                children: [
                  {
                    treeInfo: {
                      key: 'G0',
                      parentKey: 'MENU',
                      name: '업무함',
                      depth: 2,
                      seq: 10,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: true,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [
                      {
                        treeInfo: {
                          key: 'G0A012',
                          parentKey: 'G0',
                          name: '작성중',
                          depth: 3,
                          seq: 10,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A016',
                          parentKey: 'G0',
                          name: '미결함',
                          depth: 3,
                          seq: 20,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A018',
                          parentKey: 'G0',
                          name: '상신함',
                          depth: 3,
                          seq: 30,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A015',
                          parentKey: 'G0',
                          name: '기결함',
                          depth: 3,
                          seq: 40,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A017',
                          parentKey: 'G0',
                          name: '보류함',
                          depth: 3,
                          seq: 50,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A022',
                          parentKey: 'G0',
                          name: '후결함',
                          depth: 3,
                          seq: 60,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A021',
                          parentKey: 'G0',
                          name: '나의 결재경로 관리',
                          depth: 3,
                          seq: 70,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A014',
                          parentKey: 'G0',
                          name: '관심표준',
                          depth: 3,
                          seq: 80,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: false,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [],
                      },
                      {
                        treeInfo: {
                          key: 'G0A090',
                          parentKey: 'G0',
                          name: 'SPEC_CENTER',
                          depth: 3,
                          seq: 90,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: true,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [
                          {
                            treeInfo: {
                              key: 'G0A090_11',
                              parentKey: 'G0A090',
                              name: '요청처리',
                              depth: 4,
                              seq: 10,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                          {
                            treeInfo: {
                              key: 'G0A090_12',
                              parentKey: 'G0A090',
                              name: '장기미개정',
                              depth: 4,
                              seq: 20,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                          {
                            treeInfo: {
                              key: 'G0A090_13',
                              parentKey: 'G0A090',
                              name: '표준등록',
                              depth: 4,
                              seq: 30,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                          {
                            treeInfo: {
                              key: 'G0A090_14',
                              parentKey: 'G0A090',
                              name: '팝업 공지 관리',
                              depth: 4,
                              seq: 40,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                        ],
                      },
                      {
                        treeInfo: {
                          key: 'G0A020',
                          parentKey: 'G0',
                          name: '이력관리',
                          depth: 3,
                          seq: 100,
                          searched: false,
                          selected: false,
                          checked: false,
                          hasChild: true,
                          expanded: false,
                          inlineEdit: false,
                        },
                        children: [
                          {
                            treeInfo: {
                              key: 'G0A020_11',
                              parentKey: 'G0A020',
                              name: '요청서 이력조회',
                              depth: 4,
                              seq: 10,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                          {
                            treeInfo: {
                              key: 'G0A020_12',
                              parentKey: 'G0A020',
                              name: '표준별 이력관리',
                              depth: 4,
                              seq: 20,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                          {
                            treeInfo: {
                              key: 'G0A020_13',
                              parentKey: 'G0A020',
                              name: 'STEP별 이력관리',
                              depth: 4,
                              seq: 30,
                              searched: false,
                              selected: false,
                              checked: false,
                              hasChild: false,
                              expanded: false,
                              inlineEdit: false,
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            };
          },
          methods: {
            onSelect(node) {
              console.info('onSelect -sample', node);
              // 선택한게 없음
              if (node === null) {
                this.status = 'none';
                this.selectNode = null;
                return;
              }
              this.selectNode = {
                ...node,
                replaceKey: node.key,
              }; // 직접 할댕이 아닌 복사를 해야 key 변경시 tree 확인이 필요
              if (node.key === '') {
                // 신규
                this.status = 'new';
              } else if (node.key) {
                // 수정
                this.status = 'modify';
              }
            },
            onSave() {
              const isValid = this.$refs.validator.validateAll();
              if (isValid) {
                // 모두 validation이 통과 되었을 경우 로직
                console.info('save : ', this.selectNode);
              }
            },
            onDelete() {
              // delete validation check 후 삭제로직 (하위 children 존재여부 체크)
              this.$refs.tree.remove(this.selectNode, () => {
                // 삭제로직
                console.info('API로 실제 삭제 로직 실행 axios');
              });
            },
          },
        }"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTree from '@/components/common/ScTree.vue';
import ScFormBox from '@/components/common/ScFormBox.vue';
import ScFormItem from '@/components/common/ScFormItem.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScValidator from '@/components/common/ScValidator.vue';
import { useRules } from '@/hooks/common/useRules';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleTree',
  components: {
    ScCodeHighlight,
    ScValidator,
    ScButton,
    ScTextField,
    ScFormItem,
    ScFormBox,
    ScTree,
    ScSampleBox,
  },
  setup() {
    const { ruleRequired, ruleMinLength } = useRules();
    return { ruleRequired, ruleMinLength };
  },
  watch: {
    selectNode() {
      this.$refs.validator.clearAll();
    },
  },
  data() {
    return {
      selectNode: null,
      status: 'none', // none, new, modify
      tree: {
        treeInfo: {
          key: 'MENU',
          name: 'MENU',
          expanded: false,
        },
        children: [
          {
            treeInfo: {
              key: 'G0',
              parentKey: 'MENU',
              name: '업무함',
              depth: 2,
              seq: 10,
              searched: false,
              selected: false,
              checked: false,
              hasChild: true,
              expanded: false,
              inlineEdit: false,
            },
            children: [
              {
                treeInfo: {
                  key: 'G0A012',
                  parentKey: 'G0',
                  name: '작성중',
                  depth: 3,
                  seq: 10,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A016',
                  parentKey: 'G0',
                  name: '미결함',
                  depth: 3,
                  seq: 20,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A018',
                  parentKey: 'G0',
                  name: '상신함',
                  depth: 3,
                  seq: 30,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A015',
                  parentKey: 'G0',
                  name: '기결함',
                  depth: 3,
                  seq: 40,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A017',
                  parentKey: 'G0',
                  name: '보류함',
                  depth: 3,
                  seq: 50,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A022',
                  parentKey: 'G0',
                  name: '후결함',
                  depth: 3,
                  seq: 60,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A021',
                  parentKey: 'G0',
                  name: '나의 결재경로 관리',
                  depth: 3,
                  seq: 70,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A014',
                  parentKey: 'G0',
                  name: '관심표준',
                  depth: 3,
                  seq: 80,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: false,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [],
              },
              {
                treeInfo: {
                  key: 'G0A090',
                  parentKey: 'G0',
                  name: 'SPEC_CENTER',
                  depth: 3,
                  seq: 90,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: true,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [
                  {
                    treeInfo: {
                      key: 'G0A090_11',
                      parentKey: 'G0A090',
                      name: '요청처리',
                      depth: 4,
                      seq: 10,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                  {
                    treeInfo: {
                      key: 'G0A090_12',
                      parentKey: 'G0A090',
                      name: '장기미개정',
                      depth: 4,
                      seq: 20,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                  {
                    treeInfo: {
                      key: 'G0A090_13',
                      parentKey: 'G0A090',
                      name: '표준등록',
                      depth: 4,
                      seq: 30,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                  {
                    treeInfo: {
                      key: 'G0A090_14',
                      parentKey: 'G0A090',
                      name: '팝업 공지 관리',
                      depth: 4,
                      seq: 40,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                ],
              },
              {
                treeInfo: {
                  key: 'G0A020',
                  parentKey: 'G0',
                  name: '이력관리',
                  depth: 3,
                  seq: 100,
                  searched: false,
                  selected: false,
                  checked: false,
                  hasChild: true,
                  expanded: false,
                  inlineEdit: false,
                },
                children: [
                  {
                    treeInfo: {
                      key: 'G0A020_11',
                      parentKey: 'G0A020',
                      name: '요청서 이력조회',
                      depth: 4,
                      seq: 10,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                  {
                    treeInfo: {
                      key: 'G0A020_12',
                      parentKey: 'G0A020',
                      name: '표준별 이력관리',
                      depth: 4,
                      seq: 20,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                  {
                    treeInfo: {
                      key: 'G0A020_13',
                      parentKey: 'G0A020',
                      name: 'STEP별 이력관리',
                      depth: 4,
                      seq: 30,
                      searched: false,
                      selected: false,
                      checked: false,
                      hasChild: false,
                      expanded: false,
                      inlineEdit: false,
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    onSelect(node) {
      console.info('onSelect -sample', node);
      // 선택한게 없음
      if (node === null) {
        this.status = 'none';
        this.selectNode = null;
        return;
      }
      this.selectNode = {
        ...node,
        replaceKey: node.key,
      }; // 직접 할댕이 아닌 복사를 해야 key 변경시 tree 확인이 필요
      if (node.key === '') {
        // 신규
        this.status = 'new';
      } else if (node.key) {
        // 수정
        this.status = 'modify';
      }
    },
    onSave() {
      const isValid = this.$refs.validator.validateAll();
      if (isValid) {
        // 모두 validation이 통과 되었을 경우 로직
        console.info('save : ', this.selectNode);
      }
    },
    onDelete() {
      // delete validation check 후 삭제로직 (하위 children 존재여부 체크)
      this.$refs.tree.remove(this.selectNode, () => {
        // 삭제로직
        console.info('API로 실제 삭제 로직 실행 axios');
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
