<template>
  <div>
    <sc-sample-box>
      <template #description>클립보드에 텍스트를 복사합니다.</template>
      <div class="w-[150px]">
        <sc-text-field v-model="text" />
        <sc-button class="mt-2" @click="copyText">복사하기</sc-button>
      </div>

      <sc-code-highlight
        template='<sc-text-field v-model="text" />
<sc-button class="mt-2" @click="copyText">복사하기</sc-button>'
        script="export default {
          methods: {
            copyText() {
              this.$util.copyToClipboard(this.text, () => {
                this.$util.alert('클립보드에 내용을 저장하였습니다');
              });
            },
          },
          data() {
            return {
              text: '안녕하세요',
            };
          },
        };"
      />
    </sc-sample-box>

    <sc-sample-box>
      <sc-button @click="copyUrl">URL 복사</sc-button>
      <sc-code-highlight
        template='<sc-button @click="copyUrl">URL 복사</sc-button>'
        script="export default {
          methods: {
            copyUrl() {
              this.$util.copyToClipboard(window.location.href, () => {
                this.$util.alert('주소가 복사되었습니다.<br>원하는 곳에 붙여넣기(Ctrl + v) 해주세요');
              });
            },
          },
        };"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleClipboard',
  components: { ScButton, ScCodeHighlight, ScSampleBox, ScTextField },
  methods: {
    copyText() {
      this.$util.copyToClipboard(this.text, () => {
        this.$util.alert('클립보드에 내용을 저장하였습니다');
      });
    },
    copyUrl() {
      this.$util.copyToClipboard(window.location.href, () => {
        this.$util.alert('주소가 복사되었습니다.<br>원하는 곳에 붙여넣기(Ctrl + V) 해주세요.');
      });
    },
  },
  data() {
    return {
      text: '안녕하세요',
    };
  },
};
</script>

<style scoped lang="scss"></style>
