<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <template #description>기본</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip color="primary">primary chip</sc-input-chip>
                <sc-input-chip color="point">point chip</sc-input-chip>
                <sc-input-chip>default chip</sc-input-chip>
                <sc-input-chip color="red">red chip</sc-input-chip>
                <sc-input-chip color="orange">orange chip</sc-input-chip>
                <sc-input-chip color="green">green chip</sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-input-chip color="primary">primary chip</sc-input-chip>
<sc-input-chip color="point">point chip</sc-input-chip>
<sc-input-chip>default chip</sc-input-chip>
<sc-input-chip color="red">red chip</sc-input-chip>
<sc-input-chip color="orange">orange chip</sc-input-chip>
<sc-input-chip color="green">green chip</sc-input-chip>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Size -->
        <sc-sample-box title="Size">
          <template #description>small, medium (기본값은 small)</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip color="primary">primary chip</sc-input-chip>
                <sc-input-chip color="point">point chip</sc-input-chip>
                <sc-input-chip>default chip</sc-input-chip>
                <sc-input-chip color="red">red chip</sc-input-chip>
                <sc-input-chip color="orange">orange chip</sc-input-chip>
                <sc-input-chip color="green">green chip</sc-input-chip>
                <sc-input-chip color="primary" size="medium">primary chip</sc-input-chip>
                <sc-input-chip color="point" size="medium">point chip</sc-input-chip>
                <sc-input-chip size="medium">default chip</sc-input-chip>
                <sc-input-chip color="red" size="medium">red chip</sc-input-chip>
                <sc-input-chip color="orange" size="medium">orange chip</sc-input-chip>
                <sc-input-chip color="green" size="medium">green chip</sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='
[ small ]
<sc-input-chip color="primary">primary chip</sc-input-chip>
<sc-input-chip color="point">point chip</sc-input-chip>
<sc-input-chip>default chip</sc-input-chip>
<sc-input-chip color="red">red chip</sc-input-chip>
<sc-input-chip color="orange">orange chip</sc-input-chip>
<sc-input-chip color="green">green chip</sc-input-chip>
[ medium ]
<sc-input-chip color="primary" size="medium">primary chip</sc-input-chip>
<sc-input-chip color="point" size="medium">point chip</sc-input-chip>
<sc-input-chip size="medium">default chip</sc-input-chip>
<sc-input-chip color="red" size="medium">red chip</sc-input-chip>
<sc-input-chip color="orange" size="medium">orange chip</sc-input-chip>
<sc-input-chip color="green" size="medium">green chip</sc-input-chip>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Size -->
        <!-- disabled -->
        <sc-sample-box title="Disabled">
          <template #description>비활성화</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip color="primary" disabled>primary chip</sc-input-chip>
                <sc-input-chip color="point" disabled>point chip</sc-input-chip>
                <sc-input-chip disabled>default chip</sc-input-chip>
                <sc-input-chip color="red" disabled>red chip</sc-input-chip>
                <sc-input-chip color="orange" disabled>orange chip</sc-input-chip>
                <sc-input-chip color="green" disabled>green chip</sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-input-chip color="primary" disabled>primary chip</sc-input-chip>
<sc-input-chip color="point" disabled>point chip</sc-input-chip>
<sc-input-chip disabled>default chip</sc-input-chip>
<sc-input-chip color="red" disabled>red chip</sc-input-chip>
<sc-input-chip color="orange" disabled>orange chip</sc-input-chip>
<sc-input-chip color="green" disabled>green chip</sc-input-chip>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //disabled -->
        <!-- removable -->
        <sc-sample-box title="Removable">
          <template #description>삭제버튼 @click-delete</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-input-chip
                  removable
                  v-for="(item, idx) in chips"
                  :key="idx"
                  :color="item.color"
                  :item="item"
                  @click-delete="onDeleteClick"
                >
                  {{ item.value }}
                </sc-input-chip>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-input-chip
    removable
    v-for="(item, idx) in chips"
    :key="idx"
    :color="item.color"
    :item="item"
    @click-delete="onDeleteClick"
    >
    {{ item.value }}
    </sc-input-chip>'
            />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              <sc-code-highlight
              script="export default {
    data() {
      return {
        chips: [
          { color: 'primary', value: 'primary chip' },
          { color: 'point', value: 'point chip' },
          { color: '', value: 'default chip' },
          { color: 'red', value: 'red chip' },
          { color: 'orange', value: 'orange chip' },
          { color: 'green', value: 'green chip' },
        ],
      };
    },
    methods: {
      onDeleteClick(item) {
        this.chips = this.chips.filter((chip) => item !== chip);
      },
    },
    };"
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //removable -->
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Prop" :idx="2">
        <sc-table>
          <template #thead>
            <tr>
              <th style="width: 130px">Name</th>
              <th style="width: 200px">Type</th>
              <th style="width: 150px">Default</th>
              <th style="width: 250px">Value</th>
              <th>Description</th>
            </tr>
          </template>
          <tr v-for="item in propItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.default }}</td>            
            <td>{{ item.value }}</td>
            <td>{{ item.description }}</td>
          </tr>
        </sc-table>
      </sc-detail-tab-content>
      <sc-detail-tab-content label="Method" :idx="3">
        <sc-table>
          <template #thead>
            <tr>
              <th style="width: 130px">Name</th>
              <th>Description</th>
              <th style="width: 250px">Return</th>
              <th style="width: 250px">Arguments</th>
            </tr>
          </template>
          <tr v-for="item in methodItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.return }}</td>
            <td>{{ item.arguments }}</td>
          </tr>
        </sc-table>
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScInputChip from '@/components/common/ScInputChip.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
import ScTable from '@/components/common/ScTable.vue';

export default {
  name: 'SampleInputChip',
  components: { ScCodeHighlight, ScInputChip, ScSampleBox, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion, ScTable },
  data() {
    return {
      chips: [
        { color: 'primary', value: 'primary chip' },
        { color: 'point', value: 'point chip' },
        { color: '', value: 'default chip' },
        { color: 'red', value: 'red chip' },
        { color: 'orange', value: 'orange chip' },
        { color: 'green', value: 'green chip' },
      ],
      propItems: [
        {
          name: 'color',
          type: 'string',
          default: 'default',
          value: 'primary(blue),point(green),red, grange,green',
          description: 'default(gray),primary(blue),point(green)과 status를 나타내는 컬러로는 red(error), orange(waring),green(success)을 적용할 수 있다.',
        },
        {
          name: 'size',
          type: 'string',
          default: 'small',
          value: 'small, medium',
          description: 'chip의 사이즈로 스몰과 미디움 2가지 사이즈를 제공한다.',
        },
        {
          name: 'removable',
          type: 'boolean',
          default: 'false',
          value: '',
          description: '칩의 삭제 기능',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          value: '',
          description: '비활성화 기능',
        },
        {
          name: 'item',
          type: 'object',
          default: '()=>[]',
          value: '',
          description: '객체 형태로, 기본값은 빈 객체이다. 이 값은 삭제 이벤트가 발생할 때, 해당 아이템을 외부로 전달하는 데 사용된다.',
        },
      ],
      methodItems: [
        {
          name: 'onClickDelete',
          description: '아이템의 삭제 버튼이 클릭되었을 때 호출된다. onClickDelete 메소드가 실행되면, "click-delete" 이벤트가 발생하고, 부모 컴포넌트로 item 객체를 전달한다.',
          return: '',
          arguments: '',
        },
      ],
    };
  },
  methods: {
    onDeleteClick(item) {
      this.chips = this.chips.filter((chip) => item !== chip);
    },
  },
};
</script>

<style scoped lang="scss"></style>
