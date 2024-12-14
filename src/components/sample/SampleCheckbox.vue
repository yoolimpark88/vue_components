<template>
  <div class="">
    <sc-sample-box>
      <template v-slot:description>
        size는 small(기본값), medium, large가 있습니다.<br />
        disabled 속성은 이벤트 전달을 하지 않습니다.
      </template>
      <div class="">
        <div class="py-2">
          <sc-checkbox v-model="value">체크박스</sc-checkbox>
          <sc-checkbox v-model="value" disabled>비활성화 체크박스</sc-checkbox>
        </div>
        <div class="py-2">
          <sc-checkbox v-model="value" medium>체크박스</sc-checkbox>
          <sc-checkbox v-model="value" medium disabled
            >비활성화 체크박스</sc-checkbox
          >
        </div>
        <div class="py-2">
          <sc-checkbox v-model="value" large>체크박스</sc-checkbox>
          <sc-checkbox v-model="value" large disabled
            >비활성화 체크박스</sc-checkbox
          >
        </div>
        <div class="mt-5 text-sm">결과 : {{ value }}</div>

        <sc-code-highlight
          template='<div class="py-2">
  <sc-checkbox v-model="value">체크박스</sc-checkbox>
  <sc-checkbox v-model="value" disabled>비활성화 체크박스</sc-checkbox>
</div>
<div class="py-2">
  <sc-checkbox v-model="value" medium>체크박스</sc-checkbox>
  <sc-checkbox v-model="value" medium disabled
    >비활성화 체크박스</sc-checkbox
  >
</div>
<div class="py-2">
  <sc-checkbox v-model="value" large>체크박스</sc-checkbox>
  <sc-checkbox v-model="value" large disabled
    >비활성화 체크박스</sc-checkbox
  >
</div>
<div class="mt-5 text-sm">결과 : {{ value }}</div>'
          script="export default {
  data() {
    return {
      value: false,
    };
  }
}" />
      </div>
    </sc-sample-box>

    <sc-sample-box title="Single and Y/N Checkbox">
      <template v-slot:description>
        size는 small(기본값), medium, large가 있습니다.<br />
        disabled 속성은 이벤트 전달을 하지 않습니다.
      </template>
      <div>
        <sc-checkbox v-model="value2">체크박스</sc-checkbox>
        <div class="mt-5 text-sm">결과 : {{ value2 }}</div>
      </div>
      <sc-code-highlight
        template='<sc-checkbox v-model="value2">체크박스</sc-checkbox>
<div class="mt-5 text-sm">결과 : {{ value2 }}</div>'
        script="export default {
  data() {
    return {
      value2: N,
    };
  }
}" />
    </sc-sample-box>

    <sc-sample-box title="Multiple Checkbox">
      <sc-checkbox value="A" v-model="value3">A</sc-checkbox>
      <sc-checkbox value="B" v-model="value3">B</sc-checkbox>
      <sc-checkbox value="C" v-model="value3">C</sc-checkbox>
      <sc-checkbox value="D" v-model="value3">D</sc-checkbox>

      <div class="my-5 text-sm">선택 : {{ value3 }}</div>

      <sc-checkbox v-for="key in keys" :key="key" :value="key" v-model="value4">
        {{ key }}
      </sc-checkbox>

      <div class="mt-5 text-sm">선택 : {{ value4 }}</div>

      <sc-code-highlight
        template='<sc-checkbox value="A" v-model="value3">A</sc-checkbox>
<sc-checkbox value="B" v-model="value3">B</sc-checkbox>
<sc-checkbox value="C" v-model="value3">C</sc-checkbox>
<sc-checkbox value="D" v-model="value3">D</sc-checkbox>

<div class="my-5 text-sm">선택 : {{ value3 }}</div>

<sc-checkbox v-for="key in keys" :key="key" :value="key" v-model="value4">
  {{ key }}
</sc-checkbox>

<div class="mt-5 text-sm">선택 : {{ value4 }}</div>'
        script="export default {
  data() {
    return {
      keys: ['Ace', 'Boss', 'Carrot', 'Dice'],
      value3: ['A', 'C'],
      value4: ['Ace', 'Dice'],
    };
  },
};" />
    </sc-sample-box>

    <sc-sample-box title="Object Uniq Key">
      <template #description>
        value가 Object인 경우 그리고 v-model이 Array인 경우, object-uniq-key
        값을 이용하여 checkbox를 사용할 수 있습니다.
      </template>
      <sc-checkbox
        v-for="item in value5List"
        :key="item.name"
        :value="item"
        v-model="value5"
        object-uniq-key="id">
        {{ item.name }}
      </sc-checkbox>

      <div class="mt-5 text-sm">선택 : {{ value5 }}</div>

      <sc-code-highlight
        template='<sc-checkbox
  v-for="item in value5List"
  :key="item.name"
  :value="item"
  v-model="value5"
  :object-uniq-key="id"
>
  {{ item.name }}
</sc-checkbox>
<div class="mt-5 text-sm">선택 : {{ value5 }}</div>'
        script="export default {
  data() {
    return {
      value5List: [
        { id: 1, name: 'A' }
        { id: 2, name: 'B' }
        { id: 3, name: 'C' }
      ],
      value5: [{ id: 1, name: 'A' }],
    };
  },
};" />
    </sc-sample-box>
  </div>
</template>

<script>
import ScCheckbox from "@/components/common/ScCheckbox.vue";
import ScSampleBox from "@/components/common/ScSampleBox.vue";
import ScCodeHighlight from "@/components/common/ScCodeHighlight.vue";
export default {
  name: "SampleCheckbox",
  components: { ScCheckbox, ScCodeHighlight, ScSampleBox },
  data() {
    return {
      keys: ["Ace", "Boss", "Carrot", "Dice"],
      value: false,
      value2: "N",
      value3: ["A", "C"],
      value4: ["Ace", "Dice"],
      value5List: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
      ],
      value5: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
