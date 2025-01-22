<template>
  <teleport to="body">
    <sc-modal
      ref="confirmModal"
      :title="title"
      transparent
      is-alert
      no-drag
      no-resize
      @closed="onClickCloseIcon"
    >
      <div v-html="message"></div>
      <template v-slot:action>
        <sc-button @click="onConfirm" color="indigo" size="medium"> 확인 </sc-button>
        <sc-button @click="onCancel" size="medium"> 취소 </sc-button>
      </template>
    </sc-modal>
  </teleport>
</template>

<script>
import ScButton from '@/components/common/ScButton.vue';
import ScModal from '@/components/common/ScModal.vue';

export default {
  name: 'ScConfirm',
  components: { ScModal, ScButton },
  data() {
    return {
      isShow: false,
      message: '',
      confirmFn: () => {},
      cancelFn: () => {},
      closeFn: () => {},
    };
  },
  methods: {
    show(message, confirmFn, cancelFn, closeFn) {
      this.message = message;
      this.confirmFn = confirmFn;
      this.cancelFn = cancelFn;
      this.closeFn = closeFn;
      this.isShow = true;
      this.$refs.confirmModal.open();
      window.addEventListener('popstate', this.handlePopState);
    },
    closeIcon() {
      this.cancelFn();
      this.isShow = false;
      window.removeEventListener('popstate', this.handlePopState);
    },
    close() {
      this.$refs.confirmModal.close();
      window.removeEventListener('popstate', this.handlePopState);
    },
    onConfirm() {
      this.close();
      window.removeEventListener('popstate', this.handlePopState);
      this.$nextTick(() => {
        this.confirmFn();
      });
    },
    onCancel() {
      this.close();
      window.removeEventListener('popstate', this.handlePopState);
      this.$nextTick(() => {
        this.cancelFn();
      });
    },
    onClickCloseIcon() {
      // this.cancelFn();
      this.closeFn();
      window.removeEventListener('popstate', this.handlePopState);
    },
    init() {
      // console.info('init');
      this.isShow = false;
      this.message = '';
      this.confirmFn = () => {};
      this.cancelFn = () => {};
      this.$refs.confirmModal.close();
    },
    handlePopState() {
      // 브라우저 히스토리 변경 시 실행
      // 초기화 로직 필요
      // console.info('handlePopState');
      this.init();
    },
  },
};
</script>
<style scoped lang="scss"></style>
