<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box title="Basig Usage">
          <template #description>버튼이나 아이콘에 알림 개수 또는 표시를 할 수 있습니다.</template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div>
                  <sc-badge value="new">
                    <sc-button>comment</sc-button>
                  </sc-badge>
                  <sc-badge value="3">
                    <sc-button>replies</sc-button>
                  </sc-badge>
                  <sc-badge value="99+">
                    <sc-button>notices</sc-button>
                  </sc-badge>
                </div>

                <div class="mt-5">
                  <sc-badge value="3">
                    <sc-icon type="bell" color="dark-gray" size="medium" />
                  </sc-badge>
                  <sc-badge value="9+">
                    <sc-icon type="bell" color="dark-gray" size="medium" />
                  </sc-badge>
                  <sc-badge value="new">
                    <sc-icon type="bell" color="dark-gray" size="medium" />
                  </sc-badge>
                </div>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<div>
  <sc-badge value="new">
    <sc-button>comment</sc-button>
  </sc-badge>
  <sc-badge value="3">
    <sc-button>replies</sc-button>
  </sc-badge>
  <sc-badge value="99+">
    <sc-button>notices</sc-button>
  </sc-badge>
</div>

<div class="mt-5">
  <sc-badge value="3">
    <sc-icon type="bell" color="dark-gray" size="medium" />
  </sc-badge>
  <sc-badge value="9+">
    <sc-icon type="bell" color="dark-gray" size="medium" />
  </sc-badge>
  <sc-badge value="new">
    <sc-icon type="bell" color="dark-gray" size="medium" />
  </sc-badge>
</div>'
      />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Basig Usage -->
        <!-- Dot -->
        <sc-sample-box title="Dot">
          <template #description> 펼쳐지는 항목이 최대 한개로 제한할 경우 single 속성을 넣어줍니다. </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-badge dot> Sample </sc-badge>
                <sc-badge dot>
                  <sc-button>Comments</sc-button>
                </sc-badge>
                <sc-badge dot>
                  <sc-icon type="bell" color="dark-gray" size="medium" />
                </sc-badge>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<sc-badge dot> test </sc-badge>
<sc-badge dot>
  <sc-button>comments</sc-button>
</sc-badge>
<sc-badge dot>
  <sc-icon type="bell" color="dark-gray" size="medium" /> 
</sc-badge>'
      />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Dot -->
         <!-- Color / Background-color -->
        <sc-sample-box title="Color / Background-color">
          <template #description> 펼쳐지는 항목이 최대 한개로 제한할 경우 single 속성을 넣어줍니다. </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <sc-badge value="new" background-color="#00abd6" color="white">
                  <sc-button>comments</sc-button>
                </sc-badge>
                <sc-badge value="new" background-color="#00abd6" color="white">
                  <sc-button>comments</sc-button>
                </sc-badge>
                <sc-badge dot background-color="#00abd6">
                  <sc-icon type="bell" color="dark-gray" size="medium" />
                </sc-badge>
                <sc-badge dot background-color="#00abd6">
                  <sc-icon type="bell" color="dark-gray" size="medium" />
                </sc-badge>
              </template>
            </ScDetailAccordion>
            <ScDetailAccordion title="Template" >
              <sc-code-highlight
                template='<sc-badge value="new" background-color="#00abd6" color="white">
  <sc-button>comments</sc-button>
</sc-badge>
<sc-badge value="new" background-color="#ffcc00" color="white">
  <sc-button>comments</sc-button>
</sc-badge>
<sc-badge dot background-color="#00abd6">
  <sc-icon type="bell" color="dark-gray" size="medium" />
</sc-badge>
<sc-badge dot background-color="#ffcc00">
  <sc-icon type="bell" color="dark-gray" size="medium" />
</sc-badge>'
      />
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
        <!-- //Color / Background-color -->
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>
<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScIcon from '@/components/common/ScIcon.vue';
import ScBadge from '@/components/common/ScBadge.vue';

export default {
  name: 'SampleBadge',
  components: { ScSampleBox, ScCodeHighlight, ScButton, ScIcon, ScBadge, ScDetailTabBox, ScDetailTabContent, ScDetailAccordionWrapper, ScDetailAccordion },
  data() {
    return {
      selectedTabId: 1,
    }
  },
  methods: {
    onClick(idx) {
      this.selectedTabId = idx;
    },
  }
};

</script>
<style lang=""></style>
