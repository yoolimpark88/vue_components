<template>
  <ul class="sub-menu" :style="isFirstDepth ? { top: '100%' } : { left: `${parentWidth + 20}px` }">
    <li
      v-for="(child, index) in menu.children"
      :key="index"
    >
      <div 
        class="sub-menu-wrapper" 
        ref="subMenuItems"
        @mouseenter="showDeps(index, child)" 
        @mouseleave="hideDeps(index)"
      >
        <a :href="child.link">
          {{ child.label }}
          <span v-if="child.children && child.children.length" class="sub-menu-arrow-icon">
            ▶
          </span>
        </a>
        <ScMenuItem 
          v-if="child.children && child.children.length && isDepsVisible[index]" 
          :menu="child"
          :parentWidth="subMenuWidths[index]" />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import ScMenuItem from "@/components/layout/ScMenuItem.vue";

defineProps({
	menu: {
		type: Object,
		required: true
	},
  isFirstDepth: {
    type: Boolean,
    default: false
  },
  parentWidth: {
    type: Number,
    required: true
  }
})

// 2depth이상의 자식 메뉴별 hover 상태 관리
const isDepsVisible = ref([])
const subMenuItems = ref([]);      // 각 sub-menu 항목의 li 요소 담을 ref 배열
const subMenuWidths = ref([]);     // 각 sub-menu 항목의 width 저장할 ref 배열

//서브메뉴로 이동시 setTimeout으로 조절
let timer = null;

const showDeps = (index) => {
  // 다른 메뉴들은 모두 닫아주기
  isDepsVisible.value = isDepsVisible.value.map(() => false)
	clearTimeout(timer)
  isDepsVisible.value[index] = true

  nextTick(() => {
    const item = subMenuItems.value[index]
    if (item) {
      subMenuWidths.value[index] = item.offsetWidth || 0
    }
  })
}
const hideDeps = (index) => {
  timer = setTimeout(() => {
    isDepsVisible.value[index] = false
  }, 200)
}
</script>

<style scoped lang="scss">
.sc-sub-menu-wrapper {
  .sub-menu {
    position: absolute;
    top:calc(100% - 40px);
    left: 0;
    width:200px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    z-index: 100;
    padding: 8px;
    margin: 0;
    list-style: none;
    li {
      background-color: #fff;
      border-radius: 8px;
      color:#374151;
      font-size: 14px;
      position:relative;
      padding: 10px 12px;
      margin:10px;
      width:180px;
      white-space: nowrap;
      &:hover {
        background-color: rgba(165, 166, 246, 0.7);
        color:#fff;
      }
      a {
        &:hover,
        &:active {
          color:#fff !important;
          font-weight: 400;
        }
        .sub-menu-arrow-icon {
          position:absolute;
          top:calc(50% - 8px);
          right:0;
          color:$SC-SECONDARY-COLOR-TYPE2-80;
          font-size:10px;
        }
      }
      .sub-menu-wrapper {
        position:relative;
        .sub-menu {
          li {
            margin:0;
          }
        }
      }
    }
  }
}
</style>