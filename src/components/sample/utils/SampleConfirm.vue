<template>
  <div>
    <sc-sample-box>
      <template #description>this.$util.confirm('메세지', confirm, cancelFn, closeFn);</template>
      <div>
        <sc-button @click="showConfirm">저장</sc-button>
      </div>
      <div class="mt-5 text-sm">결과 : {{ result }}</div>

      <sc-code-highlight
        template='<div>
  <sc-button @click="showConfirm">저장</sc-button>
</div>
<div class="mt-5 text-sm">결과 : {{ result }}</div>'
        script="export default {
    data() {
      return: {
        result: '',
      }
    };
  },
  methods: {
    showConfirm() {
      this.$util.confirm(
        '저장하시겠습니까?',
        () => {
          // 확인을 눌렀을때 로직
          this.result = '확인을 눌렀습니다';
        },
        () => {
          // 취소를 눌렀을때 로직
          this.result = '취소를 눌렀습니다';
        },
        () => {
          // 를모달찰 닫기('X') 눌렀을때 로직
          this.result = '닫기를 눌렀습니다';
        },
      );
    },
  },
};"
      >
        <div>
          this.$util.confirm('메세지', confirmCallBack, cancelCallBack, closeCallBack)
          <div class="mt-5">
            <p>(필수) message : 전달할 내용입니다.</p>
            <p>(옵션) confirmCallBack : 확인을 클릭하였을때 실행할 function.</p>
            <p>(옵션) cancelCallBack : 취소를 클릭하였을때 실행할 function</p>
            <p>(옵션) closeCallBack : 모달 닫기('X')를 클릭하였을때 실행할 function.</p>
          </div>
        </div>
      </sc-code-highlight>
    </sc-sample-box>
  </div>
</template>

<script>
import ScButton from '@/components/common/ScButton.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleConfirm',
  components: { ScButton, ScCodeHighlight, ScSampleBox },
  data() {
    return {
      result: '',
    };
  },
  methods: {
    showConfirm() {
      this.$util.confirm(
        '저장하시겠습니까?',
        () => {
          // 확인
          this.result = '확인을 눌렀습니다';
        },
        () => {
          // 취소
          this.result = '취소를 눌렀습니다';
        },
        () => {
          this.result = '닫기를 눌렀습니다';
        },
      );
    },
  },
};
</script>

<style scoped lang="scss"></style>
