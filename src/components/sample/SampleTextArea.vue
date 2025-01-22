<template>
  <div>
    <sc-sample-box>
      <sc-text-area v-model="text" />

      <sc-code-highlight
        template='
  <sc-text-area v-model="text" />'
        script="export default {
  data() {
    return {
      text: '안\n녕\n하\n세\n요\n',
    };
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="disabled">
      <sc-text-area v-model="text" disabled />
      <sc-code-highlight template='<sc-text-area v-model="text" disabled />' />
    </sc-sample-box>

    <sc-sample-box title="rows">
      <sc-text-area v-model="text" row="5" />
      <sc-code-highlight template='<sc-text-area v-model="text" row="5" />' />
    </sc-sample-box>

    <sc-sample-box title="maxlength">
      <sc-text-area v-model="text2" maxlength="300" rows="12" />
      <sc-code-highlight template='<sc-text-area v-model="text2" maxlength="300" rows="12" />' />
    </sc-sample-box>
  </div>
</template>

<script>
import ScTextArea from '@/components/common/ScTextArea.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
//import ScFormBox from '@/components/common/ScFormBox.vue';
//import ScFormItem from '@/components/common/ScFormItem.vue';

export default {
  name: 'SampleTextArea',
  components: { ScTextArea, ScSampleBox, ScCodeHighlight },
  data() {
    return {
      text: '안\n녕\n하\n세\n요',
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    };
  },
};
</script>

<style scoped lang="scss"></style>
