<template>
  <div>
    <sc-sample-box>
      <template #description>기본</template>
      <sc-input-chip color="primary">primary chip</sc-input-chip>
      <sc-input-chip color="point">point chip</sc-input-chip>
      <sc-input-chip>default chip</sc-input-chip>
      <sc-input-chip color="red">red chip</sc-input-chip>
      <sc-input-chip color="orange">orange chip</sc-input-chip>
      <sc-input-chip color="green">green chip</sc-input-chip>

      <sc-code-highlight
        template='<sc-input-chip color="primary">primary chip</sc-input-chip>
<sc-input-chip color="point">point chip</sc-input-chip>
<sc-input-chip>default chip</sc-input-chip>
<sc-input-chip color="red">red chip</sc-input-chip>
<sc-input-chip color="orange">orange chip</sc-input-chip>
<sc-input-chip color="green">green chip</sc-input-chip>'
      />
    </sc-sample-box>

    <sc-sample-box title="Size">
      <template #description>small, medium (기본값은 small)</template>
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
    </sc-sample-box>

    <sc-sample-box title="disabled">
      <template #description>비활성화</template>
      <sc-input-chip color="primary" disabled>primary chip</sc-input-chip>
      <sc-input-chip color="point" disabled>point chip</sc-input-chip>
      <sc-input-chip disabled>default chip</sc-input-chip>
      <sc-input-chip color="red" disabled>red chip</sc-input-chip>
      <sc-input-chip color="orange" disabled>orange chip</sc-input-chip>
      <sc-input-chip color="green" disabled>green chip</sc-input-chip>

      <sc-code-highlight
        template='<sc-input-chip color="primary" disabled>primary chip</sc-input-chip>
<sc-input-chip color="point" disabled>point chip</sc-input-chip>
<sc-input-chip disabled>default chip</sc-input-chip>
<sc-input-chip color="red" disabled>red chip</sc-input-chip>
<sc-input-chip color="orange" disabled>orange chip</sc-input-chip>
<sc-input-chip color="green" disabled>green chip</sc-input-chip>'
      />
    </sc-sample-box>

    <sc-sample-box title="removable">
      <template #description>삭제버튼 @click-delete</template>
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
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScInputChip from '@/components/common/ScInputChip.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleInputChip',
  components: { ScCodeHighlight, ScInputChip, ScSampleBox },
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
};
</script>

<style scoped lang="scss"></style>
