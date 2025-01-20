<template>
  <div>
    <sc-sample-box>
      <template #description>v-tooltip 의 directive를 이용해 툴팁을 생성합니다.</template>
      <div class="my-5">
        <sc-button v-tooltip="`툴팁입니다.`">툴팁</sc-button>
        <sc-button
          v-tooltip="`HTML<span style='color: yellow'>태그</span>지원<br />안녕<br />하세요`"
        >
          html 툴팁
        </sc-button>

        <div class="mt-5">
          <span v-tooltip="`툴팁!`">일반적인 마크업에서도 사용 가능합니다.</span>
        </div>

        <sc-code-highlight
          template='<sc-button v-tooltip="`툴팁입니다.`">툴팁</sc-button>

<sc-button
v-tooltip="`HTML<span style=&#039;color: yellow&#039;>태그</span>지원<br />안녕<br />하세요`">
html 툴팁
</sc-button>

<div class="mt-5">
<span v-tooltip="`툴팁!`">일반적인 마크업에서도 사용 가능합니다.</span>
</div>
'
        />
      </div>
    </sc-sample-box>

    <sc-sample-box title="placement 툴팁 위치">
      <div class="my-5">
        <sc-button v-tooltip.left="`왼쪽 툴팁입니다.`">LEFT</sc-button>
        <sc-button v-tooltip="`위쪽 툴팁입니다.`">TOP</sc-button>
        <sc-button v-tooltip.bottom="`아래쪽 툴팁입니다.`">BOTTOM</sc-button>
        <sc-button v-tooltip.right="`오른쪽 툴팁입니다.`">RIGHT</sc-button>
      </div>

      <sc-code-highlight
        template='<sc-button v-tooltip.left="`왼쪽 툴팁입니다.`">LEFT</sc-button>
<sc-button v-tooltip="`위쪽 툴팁입니다.`">TOP</sc-button>
<sc-button v-tooltip.bottom="`아래쪽 툴팁입니다.`">BOTTOM</sc-button>
<sc-button v-tooltip.right="`오른쪽 툴팁입니다.`">RIGHT</sc-button>
'
      />
    </sc-sample-box>

    <sc-sample-box title="theme">
      <template #description>White 테마</template>
      <sc-button v-tooltip:white.left="`왼쪽 툴팁입니다.`">LEFT</sc-button>
      <sc-button v-tooltip:white="`위쪽 툴팁입니다.`">TOP</sc-button>
      <sc-button v-tooltip:white.bottom="`아래쪽 툴팁입니다.`">BOTTOM</sc-button>
      <sc-button v-tooltip:white.right="`오른쪽 툴팁입니다.`">RIGHT</sc-button>

      <sc-code-highlight
        template='<sc-button v-tooltip:white.left="`왼쪽 툴팁입니다.`">LEFT</sc-button>
<sc-button v-tooltip:white="`위쪽 툴팁입니다.`">TOP</sc-button>
<sc-button v-tooltip:white.bottom="`아래쪽 툴팁입니다.`">BOTTOM</sc-button>
<sc-button v-tooltip:white.right="`오른쪽 툴팁입니다.`">RIGHT</sc-button>'
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScButton from '@/components/common/ScButton.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleTooltip',
  components: { ScCodeHighlight, ScSampleBox, ScButton },
  data() {
    return {
      tooltipContent: '툴팁',
    };
  },
};
</script>

<style scoped lang="scss"></style>
