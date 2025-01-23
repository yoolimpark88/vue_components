<template>
  <!--페이지-->
  <div class="sc-pagination">
    <div
      class="sc-pagination-navi"
      :class="{ 'sc-pagination-icon-disable': prevPage === 0 }"
      @click="goPage(prevPage)"
      v-tooltip="$t('ISPEC_MSG_10008' /*이전 10개*/)"
    >
      <i class="sc-pagination-left-icon sc-icon">
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <polygon
            points="26.7 22.8 15 11.1 3.3 22.8 2.2 21.8 15 8.9 27.8 21.8 26.7 22.8"
          ></polygon>
        </svg>
      </i>
    </div>

    <template v-if="isShowFirstPage">
      <div
        class="sc-pagination-number"
        @click="goPage(1)"
        v-tooltip="$t('ISPEC_MSG_10005' /*첫 페이지*/)"
      >
        1
      </div>
      <div class="sc-pagination-number-dots">...</div>
    </template>
    <div
      v-for="page in paginationRange"
      :key="page"
      class="sc-pagination-number"
      :class="{ 'sc-pagination-selected': page === modelValue.currentPage }"
      @click.stop="goPage(page)"
    >
      {{ page }}
    </div>

    <template v-if="isShowLastPage">
      <div class="sc-pagination-number-dots">...</div>
      <div
        class="sc-pagination-number"
        @click.stop="goPage(totalPages)"
        v-tooltip="$t('ISPEC_MSG_10006' /*끝 페이지*/)"
      >
        {{ totalPages }}
      </div>
    </template>

    <!-- next btn : disabled 포함 -->
    <div
      class="sc-pagination-navi"
      :class="{ 'sc-pagination-icon-disable': nextPage === 0 }"
      @click="goPage(nextPage)"
      v-tooltip="$t('ISPEC_MSG_10007' /*다음 10개*/)"
    >
      <i class="sc-pagination-right-icon sc-icon">
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <polygon
            points="26.7 22.8 15 11.1 3.3 22.8 2.2 21.8 15 8.9 27.8 21.8 26.7 22.8"
          ></polygon>
        </svg>
      </i>
    </div>
    <!-- // next btn : disabled 포함 -->

    <div class="sc-pagination-goto">
      <div class="sc-counter sc-input sc-counter-medium" style="width: 34px">
        <input
          type="number"
          :min="1"
          :max="totalPages"
          step="1"
          autocomplete="off"
          class="sc-counter-input"
          v-model="movePage"
          @keyup.enter="manualGoPage(movePage)"
          @focusout="validationPage(movePage)"
        />
      </div>
      <button
        class="sc-input sc-button-border sc-button-default"
        @click.stop="manualGoPage(movePage)"
      >
        GO
      </button>
    </div>
  </div>
  <!--페이지 end-->
</template>

<script>
export default {
  name: 'ScPagination',
  emits: ['update:modelValue', 'change'],
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          rowsPerPage: 10,
          currentPage: 1,
          totalItems: 0,
        };
      },
      required: true,
    },
  },
  computed: {
    // 시작 페이지
    startPage() {
      const { currentPage } = this.modelValue;
      let start = 1;
      // 10 인경우 1~10
      if (currentPage <= 10) {
        return 1;
      }
      const mod = currentPage % 10 === 0 ? -9 : 1;
      start = Math.floor(currentPage / 10) * 10 + mod;

      return start;
    },
    // 끝 페이지
    endPage() {
      const { rowsPerPage, totalItems } = this.modelValue;
      const totalPages = Math.ceil(totalItems / rowsPerPage);
      let end = this.startPage + 9;
      // 끝 페이지가 전체페이지수를 넘지 않게
      if (end > totalPages) {
        end = totalPages;
      }
      return end;
    },
    // 마지막 페이지
    totalPages() {
      const { rowsPerPage, totalItems } = this.modelValue;
      return Math.ceil(totalItems / rowsPerPage);
    },
    // 페이지네이션을 위한 페이지 배열 생성
    paginationRange() {
      const range = [];
      // 빈내용일 경우
      if (+this.modelValue.totalItems < 1) {
        // range.push(1);
        // return;
        return [1];
      }
      for (let i = 0; i < 10; i++) {
        const nextPage = this.startPage + i;
        if (nextPage > this.totalPages) {
          break;
        }
        range.push(nextPage);
      }
      return range;
    },
    isShowFirstPage() {
      if (this.paginationRange.length > 0) {
        return !this.paginationRange.includes(1);
      }
      return false;
    },
    isShowLastPage() {
      if (this.totalPages <= 10) return false;

      if (this.paginationRange.length > 0) {
        // const currentLastPage = this.paginationRange[this.paginationRange.length - 1];

        return !this.paginationRange.includes(this.totalPages);
      }
      return false;
    },
    nextPage() {
      if (this.paginationRange.length > 0) {
        const currentLastPage = this.paginationRange[this.paginationRange.length - 1];
        if (this.totalPages > currentLastPage) {
          return currentLastPage + 1;
        }
      }
      return 0;
    },
    prevPage() {
      if (this.paginationRange.length > 0) {
        const currentFirstPage = this.paginationRange[0];
        if (currentFirstPage > 1) {
          return currentFirstPage - 1;
        }
      }
      return 0;
    },
  },
  data() {
    return {
      movePage: '',
    };
  },
  methods: {
    validationPage(page) {
      // validation
      if (page < 1) {
        this.movePage = 1;
      }
      if (page > this.totalPages) {
        this.movePage = this.totalPages;
      }
    },
    manualGoPage(page) {
      // validation
      this.validationPage(page);

      this.goPage(this.movePage);
    },
    goPage(page) {
      const param = {
        ...this.modelValue,
        currentPage: page,
      };
      // 모델 업데이트
      this.$emit('update:modelValue', param);
      // change 이벤트 발생
      this.$emit('change', page);
    },
  },
  created() {
    // console.info(this.modelValue);
  },
};
</script>

<style scoped lang="scss">
/* pagination style */
.sc-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  //margin-top: 15px;
  font-size: $SC-FONT-SIZE-BODY-1;
  z-index: 1;
  li + li {
    margin: 0 10px;
  }
  .sc-pagination-navi {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    line-height: 18px;
    cursor: pointer;
    color: $SC-COLOR-GRAY-80;
    border: 1px solid $SC-COLOR-GRAY-30;
    margin: 0 10px;
    .sc-pagination-left-icon {
      transform: rotate(270deg);
      transition: 0.1s;
    }
    .sc-pagination-left-icon:active {
      transform: rotate(260deg);
    }
    .sc-pagination-right-icon {
      transform: rotate(90deg);
      transition: 0.1s;
    }
    .sc-pagination-right-icon:active {
      transform: rotate(100deg);
    }
    .sc-icon {
      vertical-align: middle;
    }
    .sc-icon:before {
      width: 1em;
      height: 1em;
      line-height: 1;
      text-align: center;
    }
    .sc-icon svg {
      width: 1em;
      height: 1em;
      overflow: visible;
      fill: currentColor;
    }
  }
  .sc-pagination-navi:hover {
    background-color: $SC-COLOR-GRAY-10;
  }
  .sc-pagination-number {
    display: inline-block;
    width: auto;
    min-width: 21px;
    height: 20px;
    line-height: 18px;
    cursor: pointer;
    color: $SC-COLOR-GRAY-80;
    margin: 0 5px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: hsla(0, 0%, 100%, 0);
  }
  .sc-pagination-icon-disable {
    color: $SC-COLOR-GRAY-40;
    pointer-events: none;
    background-color: $SC-COLOR-GRAY-10;
    opacity: 0.5;
  }
  .sc-pagination-number:hover {
    background-color: $SC-COLOR-GRAY-10;
    background-color: hsla(0, 0%, 100%, 0);
    color: $SC-PRIMARY-COLOR-BLUE;
    border-bottom-color: $SC-PRIMARY-COLOR-BLUE;
  }
  .sc-pagination-number-dots {
    display: inline-block;
    width: 25px;
    height: 20px;
    line-height: 18px;
    color: $SC-COLOR-GRAY-80;
  }
  .sc-pagination-selected {
    background-color: hsla(0, 0%, 100%, 0);
    color: $SC-PRIMARY-COLOR-BLUE;
    font-weight: inherit;
    border-bottom-color: $SC-PRIMARY-COLOR-BLUE;
  }
  // input + GO버튼
  .sc-pagination-goto {
    display: inline-flex;
    height: 20px;
    margin-left: 5px;
    .sc-input,
    input {
      height: 20px;
      font-size: $SC-FONT-SIZE-BODY-1;
      font-weight: 400;
    }
    .sc-counter input {
      width: 100%;
      padding: 0;
      outline: none;
    }
    button {
      cursor: pointer;
      display: inline-flex;
      position: relative;
      justify-content: center;
      align-items: center;
      user-select: none;
      min-width: 40px;
      margin-left: 0;
      border-color: $SC-COLOR-GRAY-40;
      border-width: 1px;
      border-left-width: 0;
    }
    .sc-button-border.sc-button-default:hover {
      background-color: rgba(90, 90, 90, 0.2);
    }
    .sc-button-border.sc-button-default:active {
      background-color: rgba(90, 90, 90, 0.4);
    }
    .sc-button-border.sc-button-default:after {
      border-color: transparent $SC-COLOR-GRAY-80 $SC-COLOR-GRAY-80 $SC-COLOR-GRAY-80;
    }
    .sc-counter {
      display: inline-flex;
      position: relative;
      align-items: stretch;
      justify-content: center;
      flex-direction: column;
      max-width: 100%;
      height: 100%;
      overflow: hidden;
      .sc-counter-input {
        //padding: 0 8px 0 8px;
        border: 1px solid $SC-COLOR-GRAY-30;
        flex: 1 1 0;
        min-width: 0;
        text-align: center;
        border-radius: 0;
        margin: 0;
        color: $SC-COLOR-GRAY-90;
        background-color: $SC-COLOR-WHITE;
      }
      .sc-counter-input:focus {
        background-color: $SC-SUB-COLOR-CYAN-TINT-01;
      }
      .sc-counter-input::placeholder {
        color: $SC-COLOR-GRAY-60;
      }
      .sc-counter-input::-webkit-inner-spin-button,
      .sc-counter-input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  .sc-pagination-selected:hover {
    background-color: hsla(0, 0%, 100%, 0);
  }
  .sc-counter-medium,
  .sc-counter-medium .sc-counter-input {
    height: 22px;
  }
}
/* // pagination style */
</style>
