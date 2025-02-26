<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">
        <!-- Basig Usage -->
        <sc-sample-box>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-form-box>
                  <sc-form-item label="Hello">안녕하세요</sc-form-item>
                  <sc-form-item label="World">월드!</sc-form-item>
                  <sc-form-item required>
                    <template v-slot:label>
                      <sc-checkbox>사용자 정의 라벨</sc-checkbox>
                    </template>
                    <sc-text-field small />
                  </sc-form-item>
                  <sc-form-item required label="사용자 정의 라벨이 2줄로 줄바꿈이 되는 경우">
                    <sc-text-field small />
                  </sc-form-item>
                  <sc-form-item label="textfield=6" required>
                    <div class="info-box">
                      <sc-icon type="infomation-line" color="#00abd6" />
                      적용 SITE에 'SAS'를 추가할 경우 변경 전/후를 반드시 영문 포함하여 작성 바랍니다.
                    </div>
                    <sc-text-area class="flex-1" v-model="text" rows="4" />
                  </sc-form-item>
                  <sc-form-item required label="사용자 정의 라벨이 2줄로 줄바꿈이 되는 경우">
                    <sc-text-area class="flex-1" v-model="text" rows="6" />
                  </sc-form-item>
                  <!-- 빈 영역은 blank로 입력가능 -->
                  <sc-form-item span="2" blank />

                  <sc-form-item no-label span="2">
                    label이 없는 영역이 이렇게 표시됩니다. span=2로 2개의 컬럼을 차지합니다.
                  </sc-form-item>
                  <sc-form-item label="dropbox noScroll" span="2">
                    <sc-table>
                      <template #thead>
                        <tr>
                          <th class="w-[80px]">번호</th>
                          <th class="w-[130px]">이름</th>
                          <th>업체명</th>
                          <th class="w-[200px]">E-mail</th>
                        </tr>
                      </template>
                      <tr v-for="(item, idx) in items" :key="item.id">
                        <td class="text-center">{{ idx + 1 }}</td>
                        <td class="text-center">{{ item.name }}</td>
                        <td class="text-center">{{ item.name }}</td>
                        <td class="text-center">
                          <a href="">{{ item.enterprise }}</a>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td style="padding: 5px; overflow: unset">
                          <sc-dropdown
                            :items="simpleItems"
                            placeholder="ScTable 내 dropdown을 클릭 시 스크롤이 생긴다면 <td>에 overflow: unset; 속성을 추가하면 요렇게 스크롤이 생기지 않습니다."
                            v-model="simpleValue"
                            @change="onChange"
                          />
                        </td>
                        <td></td>
                      </tr>
                    </sc-table>
                  </sc-form-item>
                </sc-form-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-form-box>
  <sc-form-item label="Hello">안녕하세요</sc-form-item>
  <sc-form-item label="World">월드!</sc-form-item>
  <sc-form-item required>
    <template v-slot:label>
      <sc-checkbox>사용자 정의 라벨</sc-checkbox>
      <sc-text-field small />
    </template>
  </sc-form-item>
  <sc-form-item required label="사용자 정의 라벨이 2줄로 줄바꿈이 되는 경우">
    <sc-text-field small />
  </sc-form-item>
  <sc-form-item label="textfield=6" required>
    <div class="info-box">
      <sc-icon type="infomation-line" color="#00abd6" />
      적용 SITE에 "SAS"를 추가할 경우 변경 전/후를 반드시 영문 포함하여 작성 바랍니다.
    </div>
    <sc-text-area class="flex-1" v-model="text" rows="4" />
  </sc-form-item>
  <sc-form-item required label="사용자 정의 라벨이 2줄로 줄바꿈이 되는 경우">
    <sc-text-area class="flex-1" v-model="text" rows="6" />
  </sc-form-item>
  <!-- 빈 영역은 blank로 입력가능 -->
  <sc-form-item span="2" blank />
  <sc-form-item no-label span="2">
    label이 없는 영역이 이렇게 표시됩니다. span=2로 2개의 컬럼을 차지합니다.
  </sc-form-item>
  <sc-form-item label="dropbox noScroll" span="2">
    <sc-table>
      <template #thead>
        <tr>
          <th class="w-[80px]">번호</th>
          <th class="w-[130px]">이름</th>
          <th>업체명</th>
          <th class="w-[200px]">E-mail</th>
        </tr>
      </template>
      <tr v-for="(item, idx) in items" :key="item.id">
        <td class="text-center">{{ idx + 1 }}</td>
        <td class="text-center">{{ item.name }}</td>
        <td class="text-center">{{ item.name }}</td>
        <td class="text-center">
          <a href="">{{ item.enterprise }}</a>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td style="padding: 5px; overflow: unset">
          <sc-dropdown
            :items="simpleItems"
            placeholder="ScTable 내 dropdown을 클릭 시 스크롤이 생긴다면 <td>에 overflow: unset; 속성을 추가하면 요렇게 스크롤이 생기지 않습니다."
            v-model="simpleValue"
            @change="onChange"
          />
        </td>
        <td></td>
      </tr>
    </sc-table>
  </sc-form-item>
</sc-form-box>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- 커스텀 -->
        <sc-sample-box title="커스텀">
          <ScDetailAccordionWrapper>
            <template #description>custom, label, content</template>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-form-box>
                  <sc-form-item label="hello" span="2"><sc-text-field /></sc-form-item>
                  <!-- custom -->
                  <sc-form-item span="2">
                    <template #custom>
                      <div style="font-size: 24px">form-item 전체를 수정할 수 있는 영역</div>
                    </template>
                  </sc-form-item>
                  <!-- label -->
                  <sc-form-item span="2">
                    <template #label>
                      <span style="color: yellowgreen; font-weight: bold">라벨</span>
                    </template>
                    여기는 content 영역
                  </sc-form-item>

                  <!-- content -->
                  <sc-form-item span="2" label="내용">
                    <template #content>
                      <div style="float: left; color: indianred">왼쪽에 영역</div>
                      <div style="float: right; color: skyblue">오른쪽에 영역</div>
                    </template>
                  </sc-form-item>
                </sc-form-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-form-box>
  <sc-form-item label="hello" span="2"><sc-text-field /></sc-form-item>
  <!-- custom -->
  <sc-form-item span="2">
    <template #custom>
      <div style="font-size: 24px">form-item 전체를 수정할 수 있는 영역</div>
    </template>
  </sc-form-item>
  <!-- label -->
  <sc-form-item span="2">
    <template #label>
      <span style="color: yellowgreen; font-weight: bold;">라벨</span>
    </template>
    여기는 content 영역
  </sc-form-item>
  <!-- content -->
  <sc-form-item span="2" label="내용">
    <template #content>
      <div style="float: left; color: indianred">왼쪽에 영역</div>
      <div style="float: right; color: skyblue;">오른쪽에 영역</div>
    </template>
  </sc-form-item>
</sc-form-box>'
            />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //커스텀 -->
        <!-- col과 span -->
        <sc-sample-box title="col과 span">
          <template v-slot:description>
            <p>form-box의 col의 속성은 그리드 시스템으로 1~12컬럼의 크기를 미리 지정할 수 있습니다.</p>
            <p>아래 샘플은 col을 6으로 설정하여 한줄에 6개의 컬럼이 배치되게 하였습니다.</p>
            <p>
              2 | 2 | 2 // 컬럼을 3등분<br />
              6<br />
              3 | 3<br />
              6<br />
            </p>
            <p>
              또 한줄을 컬럼을 병합하여 사용하고 싶은 경우 form-item의 span의 속성으로 몇 컬럼을
              차지할건지 입력합니다.
            </p>
          </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-form-box col="6">
                  <sc-form-item label="표준" required span="2">
                    <sc-text-field samll />
                  </sc-form-item>
                  <sc-form-item label="등록의뢰센터" required span="2">
                    <sc-text-field v-model="item.tempCenter" disabled samll />
                  </sc-form-item>
                  <sc-form-item label="임시 SPEC번호" span="2">
                    <sc-text-field v-model="item.tempNumber" small disabled />
                  </sc-form-item>
                  <sc-form-item label="기안 제목(한글)" span="6">
                    <sc-text-field v-model="item.title" small />
                  </sc-form-item>
                  <sc-form-item label="기안 사유(한글)" span="3">
                    <sc-text-field v-model="item.reason1" small />
                  </sc-form-item>
                  <sc-form-item label="기안 제목(영문)" span="3">
                    <sc-text-field v-model="item.reason2" small />
                  </sc-form-item>
                  <sc-form-item label="날짜" span="3">
                    <sc-datepicker small v-mode="item.date" />
                    ~
                    <sc-datepicker small v-mode="item.date" />
                  </sc-form-item>
                  <sc-form-item blank span="3" />
                  <sc-form-item required span="6">
                    <template v-slot:label>
                      코멘트<br />
                      (Site / Area / Line)
                    </template>
                    <sc-text-area v-model="item.comment" small maxlength="300" />
                  </sc-form-item>
                </sc-form-box>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template">
              <sc-code-highlight
              template='<sc-form-box col="6">
  <sc-form-item label="표준" required span="2">
    <sc-text-field samll />
  </sc-form-item>
  <sc-form-item label="등록의뢰센터" required span="2">
    <sc-text-field v-model="item.tempCenter" disabled samll />
  </sc-form-item>
  <sc-form-item label="임시 SPEC번호" span="2">
    <sc-text-field v-model="item.tempNumber" small disabled />
  </sc-form-item>
  <sc-form-item label="기안 제목(한글)" span="6">
    <sc-text-field v-model="item.title" small />
  </sc-form-item>
  <sc-form-item label="기안 사유(한글)" span="3">
    <sc-text-field v-model="item.reason1" small />
  </sc-form-item>
  <sc-form-item label="기안 제목(영문)" span="3">
    <sc-text-field v-model="item.reason2" small />
  </sc-form-item>
  <sc-form-item label="날짜" span="3">
    <sc-datepicker small v-mode="item.date" />
    ~
    <sc-datepicker small v-mode="item.date" />
  </sc-form-item>
  <sc-form-item blank span="3" />
  <sc-form-item required span="6">
    <template v-slot:label>
      코멘트<br />
      (Site / Area / Line)
    </template>
    <sc-text-area v-model="item.comment" small maxlength="300" />
  </sc-form-item>
</sc-form-box>'
            />
            </ScDetailAccordion>
            <ScDetailAccordion title="Script">
              
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
		    </sc-sample-box>
        <!-- //col과 span -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script>
import ScTextField from '@/components/common/ScTextField.vue';
import ScFormBox from '@/components/common/ScFormBox.vue';
import ScFormItem from '@/components/common/ScFormItem.vue';
import ScCheckbox from '@/components/common/ScCheckbox.vue';
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';

export default {
  name: 'SampleFormItem',
  components: {
    ScTextField,
    ScFormBox,
    ScCheckbox,
    ScFormItem,
    ScSampleBox,
    ScCodeHighlight,
    ScDetailTabBox,
    ScDetailTabContent,
    ScDetailAccordionWrapper,
    ScDetailAccordion
  },
  data() {
    return {
      item: {
        standard: '표준',
        tempCenter: 'MEMORY SPEC CENTER',
        tempNumber: 'PRC23183-000',
        term: false,
        comment: '코멘트입니다',
        title: '제목',
        reason1: '사유',
        reaseon2: 'reason',
        date: '',
        selectedTabId: 1,
      },
      items: [
        { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주주가나다' },
        { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주주가나다' },
        { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주주가나다' },
        { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주주가나다' },
        { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주주가나다' },
        { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주주가나다' },
      ],
      simpleItem: ['규정', '규칙'],
      simplaValue: '',
    };
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
  },
};
</script>

<style scoped lang="scss">
.sc-form-item {
  :deep(.content:has(.info-box)) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}
.info-box {
  background: transparent !important;
  width: 100% !important;
  padding: 0 !important;
  margin: 0 0 4px 0 !important;
  i.sc-icon {
    margin: 0 5px 0 0 !important;
    width: 15px !important;
    height: 15px !important;
    svg {
      fill: #ff0000;
      width: 50px;
    }
  }
}
</style>
