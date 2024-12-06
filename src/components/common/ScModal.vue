<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      :class="[
        'sc-modal',
        'z-50',
        {
          transparent,
          'is-alert': isAlert,
          'no-resize': noResize,
          'no-drag': noDrag,
          'no-scroll': noScroll,
          'blue-tit': blueTitle,
        },
      ]"
    >
      <div
        ref="dragContainer"
        class="sc-modal-container"
        :class="[
          'sc-modal-container',
          size,
          { 'shadow-xl': transparent, transparent },
        ]"
        :style="customSize"
        @mousedown="startDrag"
        @mouseup="stopDrag"
        @mousemove="onDrag"
      >
        <!-- 헤드-->
        <div class="sc-modal-head drag-handle">
          <span class="text-xl font-bold drag-handle">{{ title }}</span>
          <div class="flex items-center">
            <button @click="toggleFullscreen" class="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>
            <button v-show="closeBtnShow" @click="clickCloseIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- 내용-->
        <div class="sc-modal-body" :class="{ 'padding-bottom': !slots.action }">
          <slot :open="open" :close="close"></slot>
        </div>
        <!-- 푸터 -->
        <div class="sc-modal-foot" v-if="slots.action">
          <slot name="action"></slot>
        </div>
        <!-- 드래그 핸들러 -->
        <div class="sc-modal-drag-handler"></div>

        <!-- 리사이즈 핸들 -->
        <div
          class="resize-handle top"
          @mousedown="(event) => startResize(event, 'top')"
        ></div>
        <div
          class="resize-handle left"
          @mousedown="(event) => startResize(event, 'left')"
        ></div>
        <div
          class="resize-handle bottom"
          @mousedown="(event) => startResize(event, 'bottom')"
        ></div>
        <div
          class="resize-handle right"
          @mousedown="(event) => startResize(event, 'right')"
        ></div>
        <div
          class="resize-handle bottom-right"
          @mousedown="(event) => startResize(event, 'bottomRight')"
        ></div>
        <div
          class="resize-handle top-left"
          @mousedown="(event) => startResize(event, 'topLeft')"
        ></div>
        <div
          class="resize-handle bottom-left"
          @mousedown="(event) => startResize(event, 'bottomLeft')"
        ></div>
        <div
          class="resize-handle top-right"
          @mousedown="(event) => startResize(event, 'topRight')"
        ></div>
      </div>
      <!--// 리사이즈 핸들 -->
    </div>
  </teleport>
</template>
<script>
import { useSlots } from "vue";

export default {
  name: "ScModal",
  emits: ["opened", "closed", "closeIcon"],
  props: {
    title: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
      validator: (value) =>
        ["", "full", "large", "medium", "small"].includes(value),
    },
    width: {
      type: [String, Number],
      default: null,
    },
    height: {
      type: [String, Number],
      default: null,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    noDrag: {
      type: Boolean,
      default: false,
    },
    noResize: {
      type: Boolean,
      default: false,
    },
    isAlert: {
      type: Boolean,
      default: false,
    },
    closeBtnShow: {
      type: Boolean,
      default: true,
    },
    noScroll: {
      type: Boolean,
      default: false,
    },
    blueTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const slots = useSlots();
    return {
      slots,
    };
  },
  data() {
    return {
      isFullscreen: false,
      originalSize: {
        width: null,
        height: null,
        top: null,
        left: null,
      },
      isOpen: false,
      isDragging: false,
      isResizing: false,
      resizeDirection: "",
      startWidth: 0,
      startHeight: 0,
      startX: 0,
      startY: 0,
      dragPosition: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    customSize() {
      const style = {};
      //const isNotEmpty = (value) =>
      //value !== null && value !== undefined && value !== "";

      if (this.$util.isNotEmpty(this.width)) {
        style.width = `${this.width}`.endsWith("px")
          ? this.width
          : `${this.width}px`;
      }
      if (this.$util.isNotEmpty(this.height)) {
        style.height = `${this.height}`.endsWith("px")
          ? this.height
          : `${this.height}px`;
      }
      return style;
    },
  },
  methods: {
    toggleFullscreen() {
      const container = this.$refs.dragContainer;

      if (!this.isFullscreen) {
        // 현재 크기와 위치 저장
        this.originalSize = {
          width: container.style.width,
          height: container.style.height,
          top: container.style.top,
          left: container.style.left,
        };

        // 전체화면으로 변경
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.top = "0";
        container.style.left = "0";

        // 리사이즈와 드래그 비활성화
        container.classList.add("no-resize");
        container.classList.add("no-drag");
      } else {
        // 원래 크기로 복원
        container.style.width = this.originalSize.width;
        container.style.height = this.originalSize.height;
        container.style.top = this.originalSize.top;
        container.style.left = this.originalSize.left;

        // 리사이즈와 드래그 활성화
        container.classList.remove("no-resize");
        container.classList.remove("no-drag");
      }

      this.isFullscreen = !this.isFullscreen;
    },
    open() {
      this.$emit("opened");
      this.isOpen = true;
    },
    clickCloseIcon() {
      this.$emit("closeIcon");
      this.$nextTick(() => {
        this.close();
      });
    },
    close() {
      this.$emit("closed");
      this.isOpen = false;
    },
    startDrag(event) {
      if (!this.$refs.dragContainer.contains(event.target)) return;
      if (this.noDrag) return;
      if (this.isResizing) return;
      if (!event.target.classList.contains("drag-handle")) {
        return;
      }
      this.isDragging = true;
      // 초기위치 저장
      this.dragPosition.x = event.clientX - this.$refs.dragContainer.offsetLeft;
      this.dragPosition.y = event.clientY - this.$refs.dragContainer.offsetTop;

      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    },
    stopDrag(event) {
      this.isDragging = false;

      // 리사이즈 핸들의 초기 위치 저장
      this.startX =
        event.clientX - this.$refs.dragContainer.getBoundingClientRect().right;
      this.startY =
        event.clientY - this.$refs.dragContainer.getBoundingClientRect().bottom;

      document.removeEventListener("mousemove", this.onDrag);
      document.removeEventListener("mouseup", this.stopDrag);
    },
    onDrag(event) {
      // if (!this.$refs.dragContainer.contains(event.target)) return;
      if (!this.isDragging) return;
      // console.info('onDrag');
      // 드래그 위치 업데이트
      const x = event.clientX - this.dragPosition.x;
      const y = event.clientY - this.dragPosition.y;
      this.$refs.dragContainer.style.left = `${x}px`;
      this.$refs.dragContainer.style.top = `${y}px`;
      this.$refs.dragContainer.style.width = `${this.$refs.dragContainer.offsetWidth}px`;
      this.$refs.dragContainer.style.height = `${this.$refs.dragContainer.offsetHeight}px`;
    },
    startResize(event, resizeDirection = "bottomRight") {
      if (!this.$refs.dragContainer.contains(event.target)) return;
      if (this.noResize) return;
      if (this.isDragging) return;
      // console.info('startResize', resizeDirection);
      this.isResizing = true;
      this.$refs.dragContainer.classList.add("user-select-none");
      this.resizeDirection = resizeDirection;
      this.startWidth = this.$refs.dragContainer.offsetWidth;
      this.startHeight = this.$refs.dragContainer.offsetHeight;
      this.startX = event.clientX;
      this.startY = event.clientY;

      document.addEventListener("mousemove", this.onResize);
      document.addEventListener("mouseup", this.stopResize);
    },
    onResize(event) {
      // if (!this.$refs.dragContainer.contains(event.target)) return;
      if (!this.isResizing) return;
      // let newWidth, newHeight, newX, newY;
      const deltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;
      const $container = this.$refs.dragContainer;

      $container.style.left = `${$container.offsetLeft}px`;
      $container.style.top = `${$container.offsetTop}px`;

      let newWidth, newHeight;
      const minWidth = 350;
      const minHeight = 210;
      // const minWidth = 200;
      // const minHeight = 180;
      // width, height 최소 200 180

      switch (this.resizeDirection) {
        case "bottomRight":
          $container.style.width = `${this.startWidth + deltaX}px`;
          $container.style.height = `${this.startHeight + deltaY}px`;
          break;
        case "topLeft":
          // 왼쪽상단 리사이즈 : 너비와 높이 감소 및 위치 조정
          newWidth = Math.max(this.startWidth - deltaX, minWidth);
          newHeight = Math.max(this.startHeight - deltaY, minHeight);
          $container.style.width = `${Math.max(
            this.startWidth - deltaX,
            minWidth
          )}px`;
          $container.style.height = `${Math.max(
            this.startHeight - deltaY,
            minHeight
          )}px`;
          if (newWidth !== minWidth) {
            $container.style.left = `${this.startX + deltaX}px`;
          }
          if (newHeight !== minHeight) {
            $container.style.top = `${this.startY + deltaY}px`;
          }
          break;
        case "bottomLeft":
          // 왼쪽 하단 : 너비 감소 및 위치 조정 , 높이 증가
          newWidth = Math.max(this.startWidth - deltaX, minWidth);
          newHeight = Math.max(this.startHeight + deltaY, minHeight);
          $container.style.width = `${newWidth}px`;
          $container.style.height = `${newHeight}px`;
          if (newWidth !== minWidth) {
            $container.style.left = `${this.startX + deltaX}px`;
          }
          break;
        case "topRight":
          // 오른쪽상단 : 높이 감소 및 위치 조정 , 너비 증가
          newWidth = Math.max(this.startWidth + deltaX, minWidth);
          newHeight = Math.max(this.startHeight - deltaY, minHeight);
          $container.style.width = `${newWidth}px`;
          $container.style.height = `${newHeight}px`;
          if (newHeight !== minHeight) {
            $container.style.top = `${this.startY + deltaY}px`;
          }
          break;
        case "top":
          newHeight = Math.max(this.startHeight - deltaY, minHeight);
          $container.style.height = `${newHeight}px`;
          if (newHeight !== minHeight) {
            $container.style.top = `${this.startY + deltaY}px`;
          }
          break;
        case "left":
          newWidth = Math.max(this.startWidth - deltaX, minWidth);
          $container.style.width = `${newWidth}px`;
          if (newWidth !== minWidth) {
            $container.style.left = `${this.startX + deltaX}px`;
          }
          break;
        case "bottom":
          newHeight = Math.max(this.startHeight + deltaY, minHeight);
          $container.style.height = `${newHeight}px`;
          break;
        case "right":
          newWidth = Math.max(this.startWidth + deltaX, minWidth);
          $container.style.width = `${newWidth}px`;
          break;
        default:
          break;
      }
    },
    stopResize() {
      // console.info('stopResize');
      this.isResizing = false;
      this.$refs.dragContainer.classList.remove("user-select-none");
      document.removeEventListener("mousemove", this.onResize);
      document.removeEventListener("mouseup", this.stopResize);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.sc-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);

  &.transparent {
    background-color: transparent;
  }

  &.is-alert {
    z-index: 999; // 로딩바 보다 아래
    .sc-modal-container {
      min-width: 430px;
      width: fit-content;
      max-width: 900px;
      max-height: calc(100% - 60px);
      .sc-modal-body {
        width: 100%;
        padding: 20px;
      }
    }
  }

  &.no-drag .drag-handle {
    cursor: default;
  }
  &.no-resize .resize-handle {
    cursor: default;
  }
  &.no-resize .sc-modal-container {
    cursor: default;
    .sc-modal-drag-handler {
      display: none;
    }
  }
  // 20240523_스크롤 X 속성.
  // 1. 드롭박스 select-layer의 길이가 길어 모달창 안에서 스크롤이 생기는 경우.
  // 2. 모달창 내 스크롤을 보이지 않도록 하기 위한 경우.
  &.no-scroll {
    .sc-modal-container {
      overflow: unset;
      .sc-modal-body {
        overflow-y: unset;
      }
    }
  }
  &.blue-tit {
    .sc-modal-container {
      //border: 1px solid #fff;
      overflow: unset;
      .sc-modal-head {
        background-color: #2584da;
        span {
          color: #fff;
          font-weight: 300;
        }
        svg {
          color: #fff;
        }
      }
    }
  }
}

.sc-modal-container {
  position: absolute;
  overflow: hidden; // 드롭박스의 select 값들이 모달창 밖에서 보여지지 않는 부분 수정.
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 210px;

  &:has(.overflow) {
    overflow: visible;
  }
  &.transparent {
    border: 1px solid #eee;
  }

  &.full {
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
  }

  &.large {
    width: 1520px;
    height: 800px;
  }

  &.medium {
    width: 950px;
    height: 600px;
  }

  &.small {
    width: 450px;
    height: 400px;
  }

  .sc-modal-head {
    min-height: 50px;
    background-color: #f1f1f1;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
  }

  .sc-modal-body {
    flex-grow: 1;
    overflow-y: auto; // 드롭박스의 select 값들이 모달창 밖에서 보여지지 않는 부분 수정.
    padding: 20px 20px 10px 30px;
    width: calc(100% - 10px); // 스크롤하고 리사이즈 영역때문에 스크롤 위치 이동
    word-break: break-all;
    text-align: justify;

    &.padding-bottom {
      padding-bottom: 10px; // footer height
      margin-bottom: 53px; // footer height + border top 1px
    }

    :deep(.footer) {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      border-top: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 10px 30px;
    }
  }

  .sc-modal-foot {
    border-top: 1px solid #f3f3f3;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
  }
  .sc-modal-drag-handler {
    position: absolute;
    right: 1px;
    bottom: 1px;
    //background: url('@/assets/img/svg/ico-drag-handler.svg');
    width: 8px;
    height: 8px;
  }
}
.drag-handle {
  cursor: move;
}
.resize-handle {
  position: absolute;
  width: 10px;
  height: 10px;
  &.top-right {
    cursor: nesw-resize;
    right: 0;
    top: 0;
  }
  &.bottom-right {
    cursor: nwse-resize;
    right: 0;
    bottom: 0;
  }
  &.top-left {
    cursor: nwse-resize;
    left: 0;
    top: 0;
  }
  &.bottom-left {
    cursor: nesw-resize;
    left: 0;
    bottom: 0;
  }
  &.top {
    cursor: ns-resize;
    left: 10px;
    right: 10px;
    top: 0;
    height: 10px;
    width: calc(100% - 20px);
  }
  &.left {
    cursor: ew-resize;
    top: 10px;
    bottom: 10px;
    left: 0;
    right: 10px;
    width: 10px;
    height: calc(100% - 20px);
  }
  &.bottom {
    cursor: ns-resize;
    left: 10px;
    right: 10px;
    bottom: 0;
    height: 10px;
    width: calc(100% - 20px);
  }
  &.right {
    cursor: ew-resize;
    top: 10px;
    bottom: 10px;
    right: 0;
    width: 10px;
    height: calc(100% - 20px);
  }
}
.user-select-none {
  user-select: none;
}
</style>
