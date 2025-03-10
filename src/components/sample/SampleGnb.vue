<template>
  <div>
    <sc-detail-tab-box @click="onClick">
      <sc-detail-tab-content label="Preview" :idx="1">       
        <!-- Basig Usage -->
        <sc-sample-box title="Basig Usage">
          <template #description> init-show: 생성시 open 상태로 유지 </template>
          <ScDetailAccordionWrapper>
            <ScDetailAccordion title="Demo" init-show>
              <template #demo>
                <div class="h-60">
                  <sc-gnb />
                </div>
              </template>
            </ScDetailAccordion>
          </ScDetailAccordionWrapper>
        </sc-sample-box>
      </sc-detail-tab-content>
    </sc-detail-tab-box>
  </div>
</template>

<script setup>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScGnb from '@/components/layout/ScGnb.vue';
import ScDetailTabBox from '@/components/layout/ScDetailTabBox.vue';
import ScDetailTabContent from '@/components/layout/ScDetailTabContent.vue';
import ScDetailAccordionWrapper from '@/components/layout/ScDetailAccordionWrapper.vue';
import ScDetailAccordion from '@/components/layout/ScDetailAccordion.vue';
</script>