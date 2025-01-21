<template>
  <div>
    <sc-sample-box>
      <template v-slot:description>this.$util.alert('알람메세지')</template>
      <div>
        <sc-button @click="showAlert">버튼</sc-button>
      </div>

      <sc-code-highlight
        template='<sc-button @click="showAlert">버튼</sc-button>'
        script="
export default {
  methods: {
    showAlert() {
      this.$util.alert('알람입니다.');
    },
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="callback 함수">
      <template v-slot:description
        >확인 버튼을 눌렀을때 인자로 넘긴 함수를 실행시켜 줍니다.</template
      >
      <div>
        <sc-button @click="showAlertWithCallbackFn">버튼</sc-button>
        <div class="mt-5 text-sm">결과 : {{ result }}</div>
      </div>

      <sc-code-highlight
        template=' <div>
  <sc-button @click="showAlertWithCallbackFn">버튼</sc-button>
  <div class="mt-5 text-sm">결과 :  {{ result }}</div>
</div>'
        script="export default {
  data() {
    return {
      result: '',
    };
  },
  methods: {
    showAlertWithCallbackFn() {
      this.result = 'OPEN';
      this.$util.alert('알람입니다', () => {
        console.info('닫기 버튼을 누른 뒤 실행 되는 함수');
        this.result = 'CLOSE';
      });
    },
  },
};"
      />
    </sc-sample-box>

    <sc-sample-box title="alert Title">
      <template v-slot:description>String 값을 넣어 Alert의 Title을 변경할 수 있습니다.</template>
      <div>
        <sc-button @click="showAlertWithCallbackFn">버튼</sc-button>
        <div class="mt-5 text-sm">결과 : {{ result }}</div>
      </div>

      <sc-code-highlight
        template='<div>
  <sc-button @click="showAlertWithCallbackFn">버튼</sc-button>
  <div class="mt-5 text-sm">결과 : {{ result }}</div>
</div>'
        script=" export default {
  data() {
    return {
      result: '',
    };
  },
  methods: {
    showAlertWithCallbackFn() {
      this.result = 'OPEN';
      this.$util.alert('알람입니다', 
        () => {
          console.info('닫기 버튼을 누른 뒤 실행 되는 함수');
          this.result = 'CLOSE';
        }, 
        'ALERT TITLE',
      );
    },
  },
};"
      />
      <div>
        <sc-button @click="showAlertWithTitle">버튼</sc-button>
      </div>

      <sc-code-highlight
        template='
<div>
  <sc-button @click="showAlertWithTitle">버튼</sc-button>
</div>'
        script="export default {
  methods: {
    showAlertWithTitle() {
      this.$util.alert('알닏입니다', 'ALTER TITLE');
    },
  },
};"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleAlert',
  components: { ScSampleBox, ScButton, ScCodeHighlight },
  data() {
    return {
      result: '',
    };
  },
  methods: {
    showAlert() {
      this.$util.alert('알람입니다');
    },
    showAlertWithCallbackFn() {
      this.result = 'OPEN';
      this.$util.alert(
        '알람입니다',
        () => {
          console.info('닫기 버튼을 누른 뒤 실행 되는 함수');
          this.result = 'CLOSE';
        },
        'ALERT TITLE',
      );
    },
    showAlertWithTitle() {
      this.$util.alert('알람입니다', 'ALERT TITLE');
    },
  },
};
</script>

<style scoped lang="scss"></style>
