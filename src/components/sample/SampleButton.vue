<template>
  <div>
    <sc-sample-box>
      <div class="mt-3">size : small</div>
      <sc-button @click="onClick">일반 버튼</sc-button>
      <sc-button @click="onClick" disabled>비활성화 버튼</sc-button>
      <sc-button @click="onClick" type="round">둥글둥글 버튼</sc-button>
      <sc-button @click="onClick" color="primary">일반 버튼</sc-button>
      <sc-button @click="onClick" disabled color="primary"
        >비활성화 버튼</sc-button
      >
      <sc-button @click="onClick" type="round" color="primary"
        >둥글둥글 버튼</sc-button
      >
      <div class="mt-3">size : medium</div>
      <sc-button size="medium" @click="onClick">일반 버튼</sc-button>
      <sc-button size="medium" @click="onClick" disabled
        >비활성화 버튼</sc-button
      >
      <sc-button size="medium" @click="onClick" type="round"
        >둥글둥글 버튼</sc-button
      >
      <sc-button size="medium" @click="onClick" color="primary"
        >일반 버튼</sc-button
      >
      <sc-button size="medium" @click="onClick" disabled color="primary"
        >비활성화 버튼</sc-button
      >
      <sc-button size="medium" @click="onClick" type="round" color="primary"
        >둥글둥글 버튼</sc-button
      >
      <div class="mt-3">size : large</div>
      <sc-button size="large" @click="onClick">일반 버튼</sc-button>
      <sc-button size="large" @click="onClick" disabled
        >비활성화 버튼</sc-button
      >
      <sc-button size="large" @click="onClick" type="round"
        >둥글둥글 버튼</sc-button
      >
      <sc-button size="large" @click="onClick" color="primary"
        >일반 버튼</sc-button
      >
      <sc-button size="large" @click="onClick" disabled color="primary"
        >비활성화 버튼</sc-button
      >
      <sc-button size="large" @click="onClick" type="round" color="primary"
        >둥글둥글 버튼</sc-button
      >
      <sc-code-highlight
        template='
<sc-button @click="onClick">일반 버튼</sc-button>
  <sc-button @click="onClick" disabled>비활성화 버튼</sc-button>
  <sc-button @click="onClick" type="round">둥글둥글 버튼</sc-button>
  <sc-button @click="onClick" color="primary">일반 버튼</sc-button>
  <sc-button @click="onClick" disabled color="primary"
    >비활성화 버튼</sc-button
  >
  <sc-button @click="onClick" type="round" color="primary"
    >둥글둥글 버튼</sc-button
  >
  <div class="mt-3">size : medium</div>
  <sc-button size="medium" @click="onClick">일반 버튼</sc-button>
  <sc-button size="medium" @click="onClick" disabled
    >비활성화 버튼</sc-button
  >
  <sc-button size="medium" @click="onClick" type="round"
    >둥글둥글 버튼</sc-button
  >
  <sc-button size="medium" @click="onClick" color="primary"
    >일반 버튼</sc-button
  >
  <sc-button size="medium" @click="onClick" disabled color="primary"
    >비활성화 버튼</sc-button
  >
  <sc-button size="medium" @click="onClick" type="round" color="primary"
    >둥글둥글 버튼</sc-button
  >
  <div class="mt-3">size : large</div>
  <sc-button size="large" @click="onClick">일반 버튼</sc-button>
  <sc-button size="large" @click="onClick" disabled
    >비활성화 버튼</sc-button
  >
  <sc-button size="large" @click="onClick" type="round"
    >둥글둥글 버튼</sc-button
  >
  <sc-button size="large" @click="onClick" color="primary"
    >일반 버튼</sc-button
  >
  <sc-button size="large" @click="onClick" disabled color="primary"
    >비활성화 버튼</sc-button
  >
  <sc-button size="large" @click="onClick" type="round" color="primary"
    >둥글둥글 버튼</sc-button
  >'
        script="
export default {
  methods: {
    onClick() {};
  }
}" />
    </sc-sample-box>
  </div>
</template>

<script>
import ScButton from "@/components/common/ScButton.vue";
import ScSampleBox from "@/components/common/ScSampleBox.vue";
import ScCodeHighlight from "@/components/common/ScCodeHighlight.vue";
import { useRoleStore } from "@/store/roleStore";

export default {
  name: "sampleButton",
  components: {
    ScButton,
    ScSampleBox,
    ScCodeHighlight,
  },
  setup() {
    const roleStore = useRoleStore();
    return {
      addRole: roleStore.addRole,
    };
  },
  methods: {
    onClick() {},
  },
  mounted() {
    this.addRole("sample-component-button", [
      {
        BUTTON_COMP_ID: "copy",
      },
      {
        BUTTON_COMP_ID: "read",
      },
    ]);
  },
};
</script>

<style scoped lang="scss">
.sub-title {
  display: block;
  margin: 20px 0;
}
</style>
