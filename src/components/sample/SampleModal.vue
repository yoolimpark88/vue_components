<template>
<div>
<sc-button @click="onOpen('fullModal')">full</sc-button>
      <sc-button @click="onOpen('largeModal')">large</sc-button>
      <sc-button @click="onOpen('mediumModal')">medium</sc-button>
      <sc-button @click="onOpen('smallModal')">small</sc-button>
      <sc-button @click="onOpen('customSize')">800x600</sc-button>

      <sc-modal ref="fullModal" title="전체화면 타이틀" size="full">
        모달 내 상세내용
        <template v-slot:action>
          <sc-button color="indigo" medium @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('fullModal')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-modal ref="largeModal" title="상세화면" size="large">
        상세내용
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('largeModal')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-modal ref="mediumModal" title="상세화면" size="medium">
        상세내용
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('mediumModal')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-modal ref="smallModal" title="상세화면" size="small">
        상세내용
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('smallModal')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-modal ref="customSize" title="상세화면" width="800" height="600">
        상세내용
        <div class="w-[150px]">
          <sc-datepicker v-model="date" init="today" />
        </div>
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('customSize')">닫기</sc-button>
        </template>
      </sc-modal>
</div>
</template>

<script>
import ScModal from '@/components/common/ScModal.vue';

export default {
  name: 'sampleModal',
  components: {
    ScModal,
  },
  methods: {
    onOpen(refName) {
      this.$refs[refName].open();
    },
    onConfirm() {
      console.log('확인');
    },
    onClose(refName) {
      this.$refs[refName].close();
    },
  },
};
</script>

<style scoped lang="scss"></style>