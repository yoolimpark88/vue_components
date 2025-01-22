<template>
  <teleport to="body">
    <sc-modal
      ref="alertModal"
      :title="title"
      @closed="closeIcon"
      transparent
      is-alert
      no-drag
      no-resize
    >
      <div v-html="message"></div>
      <template v-slot:action>
        <sc-button
          ref="closeButton"
          @click="close"
          @keydown.enter="close"
          color="indigo"
          size="medium"
        >
          확인
        </sc-button>
      </template>
    </sc-modal>
  </teleport>
</template>

<script>
import ScButton from '@/components/common/ScButton.vue';
import ScModal from '@/components/common/ScModal.vue';

export default {
  name: 'ScAlert',
  components: { ScModal, ScButton },
  data() {
    return {
      isShow: false,
      message: '',
      callbackFn: () => {},
      title: this.$t('알림'),
    };
  },
  methods: {
    show(message, callbackFn, title) {
      // console.info('scalert.vue show method');
      this.message = message;
      this.callbackFn = callbackFn;
      if (this.$util.isNotEmpty(title)) this.title = title;
      else this.title = this.$t('알림');
      this.isShow = true;
      this.$refs.alertModal.open();
      // console.info("window.addEventListener('popstate')");
      window.addEventListener('popstate', this.handlePopState);
      // 엔터키 이벤트 리스너 추가
      window.addEventListener('keydown', this.handleEnterKey);
      // 모달이 여린 후 닫기 버튼에 포커스
      this.$nextTick(() => {
        this.$refs.closeButton.$el.focus();
      });
    },
    handleEnterKey(event) {
      if (event.key === 'Enter' && this.isShow) {
        this.close();
      }
    },
    closeIcon() {
      this.isShow = false;
      // console.info("window.removeEventListener('popstate')");
      window.removeEventListener('popstate', this.handlePopState);
      window.removeEventListener('keydown', this.handleEnterKey); // 이벤트 리스너 제거
      this.$nextTick(() => {
        this.callbackFn();
      });
    },
    close() {
      // this.closeIcon();
      this.$refs.alertModal.close();
      // console.info("window.removeEventListener('popstate')");
      window.removeEventListener('popstate', this.handlePopState);
      window.removeEventListener('keydown', this.handleEnterKey); // 이벤트 리스너 제거
    },
    init() {
      // console.info('init');
      this.isShow = false;
      this.message = '';
      this.callbackFn = () => {};
      this.$refs.alertModal.close();
      window.removeEventListener('keydown', this.handleEnterKey); // 이벤트 리스너 제거
    },
    handlePopState() {
      // 브라우저 히스토리 변경 시 실행
      // 초기화 로직 필요
      // console.info('handlePopState');
      this.init();
    },
  },
  mounted() {
    // window.addEventListener('popstate', this.handlePopState);
    // console.info('window.addEventListener(\'popstate\')');
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
    window.removeEventListener('keydown', this.handleEnterKey); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    console.info("window.removeEventListener('popstate')");
  },
};
</script>

<style scoped lang="scss"></style>
