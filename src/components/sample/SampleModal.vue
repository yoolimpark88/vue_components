<template>
  <div>
    <sc-sample-box>
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

      <sc-code-highlight
        :template="codeTemplate"
        script="export default {
          methods: {
            onOnpen(refName) {
              this.$refs[refName].open();
            },
            onConfirm() {
              console.log('확인');
            },
            onClose(refName) {
              this.$refs[refName].close();
            },
          },
        };"
      />
    </sc-sample-box>

    <sc-sample-box title="no-resize, no-drag">
      <template #description>
        기본 리사이즈와 드래그를 지원합니다. 해당 속성이 필요없다면 no-resize와 no-drag 속성을
        추가합니다.
      </template>

      <sc-modal ref="noDrag" title="상세화면 : no-drag" size="medium" no-drag>
        드래그 NO, 리사이즈 YES
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('noDrag')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noDrag.open()" size="medium">no-drag</sc-button>

      <sc-modal ref="noResize" title="상세화면 : no-resize" size="medium" no-resize>
        드래그 YES, 리사이즈 NO
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('noResize')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noResize.open()" size="medium">no-resize</sc-button>

      <sc-modal ref="noDragResize" title="상세화면 : no-drag no-resize" size="medium" no-resize>
        드래그 NO, 리사이즈 NO
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('noDragResize')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noDragResize.open()" size="medium">no-drag, no-resize</sc-button>

      <sc-code-highlight
        template='<sc-modal ref="noDrag" title="상세화면 : no-drag" size="medium" no-drag>
        드래그 NO, 리사이즈 YES
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose(&#039;noDrag&#039;)">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noDrag.open()" size="medium">no-drag</sc-button>
      
      <sc-modal ref="noResize" title="상세화면 : no-resize" size="medium" no-resize>
        드래그 YES, 리사이즈 NO
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose(&#039;noResize&#039;)">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noResize.open()" size="medium">no-resize</sc-button>
      
      <sc-modal ref="noDragResize" title="상세화면 : no-drag no-resize" size="medium" no-resize>
        드래그 NO, 리사이즈 NO
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose(&#039;noDragResize&#039;)">닫기</sc-button>
        </template>
      </sc-modal>
      
      <sc-button @click="$refs.noDragResize.open()" size="medium">no-drag, no-resize</sc-button>'
      />
    </sc-sample-box>

    <sc-sample-box title="컴포넌트 내 footer 버튼 사용">
      <sc-modal ref="custom" size="large" title="custom title">
        <template #default="{ close }">
          <sample-modal-part :close="close" />
        </template>
      </sc-modal>

      <sc-button @click="$refs.custom.open()" size="medium">버튼</sc-button>

      <sc-code-highlight
        template='<sc-modal ref="custom" size="large" title="custom title">
  <template #default="{ close }">
    <sample-modal-part :close="close" />
  </template>
</sc-modal>

<sc-button @click="$refs.custom.open()" size="medium">버튼</sc-button>
'
        script='// sample-modal-part.vue - 개별 컴포넌트
// props로 close를 전달 받아 닫기 버튼을 제어해야 합니다.
<script>
export default {
  props: {
    close: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<template>
  <div>
    <div>custom 모달</div>
    <!-- class에 footer를 입력하고 버튼 영역을 만들어줍니다. -->
    <div class="footer">
      <sc-button @click="close()" medium color="indigo">닫기</sc-button>
    </div>
  </div>
</template>
        '
      />
    </sc-sample-box>

    <sc-sample-box title="no-scroll">
      <template #description>
        모달창 내 스크롤이 생기지 않도록 합니다.
        <div class="bg-[#f1f1f1] p-3 mt-2 w-fit">
          <p class="mb-1">
            #issue 1 : 작은 모달의 경우 드롭다운 컴포넌트 클릭 시 selectLayer가 모달창 외부로
            벗어나서 보여져야 하는데 모달창 내부에서 스크롤이 생기는 경우.
          </p>
          <p>#issue 2 : 모달창 내부 스크롤이 생기지 않도록 강제하는 경우.</p>
        </div>
      </template>

      <sc-modal ref="noScroll" title="상세화면 : no-scroll" width="500" height="210" no-scroll>
        <div>
          <div class="write">
            <sc-form-box col="1" class="form-box-b1-c4">
              <sc-form-item label="스크롤 NO">
                <div class="flex w-full gap-1">
                  <sc-dropdown
                    :items="siteList"
                    v-model="site"
                    @change="onChange"
                    :placeholder="$t('선택')"
                    class="w-full"
                  />
                  <sc-dropdown
                    :items="areaList"
                    v-model="site"
                    :placeholder="$t('선택')"
                    class="w-full"
                  />
                </div>
              </sc-form-item>
            </sc-form-box>
          </div>
        </div>
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('noScroll')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noScroll.open()" size="medium">no-scroll</sc-button>

      <sc-modal ref="scroll" title="상세화면 : scroll" width="500" height="210">
        <div>
          <div class="write">
            <sc-form-box col="1" class="form-box-b1-c4">
              <sc-form-item label="스크롤 YES">
                <div class="flex w-full gap-1">
                  <sc-dropdown
                    :items="siteList"
                    v-model="site"
                    @change="onChange"
                    :placeholder="$t('선택')"
                    class="w-full"
                  />
                  <sc-dropdown
                    :items="areaList"
                    v-model="site"
                    :placeholder="$t('선택')"
                    class="w-full"
                  />
                </div>
              </sc-form-item>
            </sc-form-box>
          </div>
        </div>
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose('Scroll')">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.scroll.open()" size="medium">scroll</sc-button>

      <sc-code-highlight
        template='<sc-modal ref="noScroll" title="상세화면 : no-scroll" width="500" height="210" no-scroll>
        <div>
          <div class="write">
            <sc-form-box col="1" class="form-box-b1-c4">
              <sc-form-item label="스크롤 NO">
                <div class="flex w-full gap-1">
                  스크롤 NO
                </div>
              </sc-form-item>
            </sc-form-box>
          </div>
        </div>
        <template v-slot:action>
          <sc-button medium color="indigo" @click="onConfirm()">확인</sc-button>
          <sc-button medium @click="onClose(&#039;noScroll&#039;)">닫기</sc-button>
        </template>
      </sc-modal>

      <sc-button @click="$refs.noScroll.open()" size="medium">no-scroll</sc-button>'
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScModal from '@/components/common/ScModal.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScDropdown from '@/components/common/ScDropdown.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'sampleModal',
  components: {
    ScModal,
    ScDropdown,
    ScSampleBox,
    ScCodeHighlight,
    ScButton,
  },
  data() {
    return {
      siteList: ['test1', 'test2', 'test3', 'test4', 'test5'],
      areaList: ['test1', 'test2', 'test3', 'test4', 'test5'],
      site: '',
      area: '',
      date: '',
      codeTemplate: `<sc-button @click="onOpen('fullModal')">full</sc-button>
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
</sc-modal>`,
    };
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
