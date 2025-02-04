<template>
  <div>
    <sc-sample-box title="isKo, isEn, isCh">
      <div :class="{ active: $util.isKo() }">{{ $util.isKo() ? '한글' : 'no Korean' }}</div>
      <div :class="{ active: $util.isEn() }">{{ $util.isEn() ? 'English' : 'no English' }}</div>
      <div :class="{ active: $util.isCh() }">{{ $util.isCh() ? '中国' : 'no Chinese' }}</div>

      <div class="mt-5">현재 i18n 설정 언어 : {{ $util.locale() }}</div>

      <sc-code-highlight
        template="<div :class='{active: $util.isKo()}'>{{ $util.isKo() ? '한글' : 'no Korean' }}</div>
      <div :class='{active: $util.isEn()}'>{{ $util.isEn() ? 'English' : 'no English' }}</div>
      <div :class='{active: $util.isCh()}'>{{ $util.isCh() ? '中国' : 'no Chinese' }}</div>
      
      <div class='mt-5'>현재 i18n 설정 언어 : {{ $util.locale() }}</div>"
        :style="`
        .active {
          width: 200px;
          color: #fff;
          background: $SC-PRIMARY-COLOR-CYAN;
        }`"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleLocale',
  components: { ScCodeHighlight, ScSampleBox },
  data() {
    return {
      isKo: false,
    };
  },
  created() {
    this.isKo = this.$util.isKo();
  },
};
</script>

<style scoped lang="scss">
.active {
  width: 200px;
  color: $SC-COLOR-WHITE;
  background: $SC-PRIMARY-COLOR-CYAN;
}
</style>
