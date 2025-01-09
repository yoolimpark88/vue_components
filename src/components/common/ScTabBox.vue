<template>
  <div
    class="sc-tab-box"
    @resize="
      () => {
        console.info('resize');
      }
    "
  >
    <div class="tabs" ref="tabs" @scroll="onScroll">
      <div
        v-for="tab in tabs"
        :key="tab.idx"
        class="tab"
        :class="[{ active: activeTab === tab.idx }, `label-${tab.idx}`]"
        @click="selectTab(tab.idx)"
      >
        <span
          class="label"
          v-tooltip:white="tab.label.length > 20 ? tab.label : ''"
          v-if="!ignoreLabels.includes(tab.idx)"
        >
          {{ tab.label }}
        </span>
      </div>

      <!-- navigation -->
      <div v-if="navigation" :class="['navigation', { invisible: scrollInvisible }]">
        <div :class="['button', { disabled: scrollLeft === 0 }]" @click="move('Left')">
          <sc-icon
            type="chevron-left"
            :color="scrollLeft === 0 ? '#dddddd' : 'dark-gray'"
            size="large"
          />
        </div>
        <div :class="['button', { disabled: scrollLeft === scrollRight }]" @click="move('Right')">
          <sc-icon
            type="chevron-right"
            :color="scrollLeft === scrollRight ? '#dddddd' : 'dark-gary'"
            size="large"
          />
        </div>
      </div>
      <!-- // navigation -->
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>
