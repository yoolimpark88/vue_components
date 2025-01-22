<template>
  <div :class="['sc-datepicker', size, customProps]" v-out-side-click="handleClickOutside">
    <sc-text-field
      v-model="selectedDateLabel"
      @focusin.stop="onFocus"
      @focusout.stop="onFocusOut"
      @keyup.enter="onEnter"
      @click-icon="onFocus"
      date-icon
      :disabled="disabled"
      :readonly="readonly"
      :size="size"
      :class="customProps"
      :placeholder="inputType"
      :esc-clear="false"
    />
    <div v-if="isOpen || renderComplete" v-show="isOpen" class="layer z-30" :class="align">
      <VDatePicker
        ref="calendar"
        class="calendar"
        v-model="selectedDate"
        @dayclick="onDayClick"
        :masks="masks"
        transition="none"
        borderless
        trim-weeks
        title-transition="none"
        weeks-transition="none"
        :min-date="toDate(minDate)"
        :max-date="toDate(maxDate)"
        :locale="locale"
      >
        <template #footer>
          <div class="w-full flex mb-5 justify-center">
            <sc-button small @click="setToday()">Today</sc-button>
            <sc-button v-show="clearable" small @click="setClear" color="primary">Clear</sc-button>
          </div>
        </template>
      </VDatePicker>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
import ScTextField from '@/components/common/ScTextField.vue';
import ScButton from '@/components/common/ScButton.vue';

export default {
  name: 'ScDatepicker',
  components: {
    ScButton,
    ScTextField,
  },
  emits: ['update:modelValue', 'change'],
  props: {
    init: {
      type: String,
      default: '',
      validator: (value) => ['', 'today', 'clear'].includes(value),
    },
    inputType: {
      type: String,
      default: 'YYYY/MM/DD',
    },
    modelType: {
      type: String,
      default: 'YYYYMMDD',
    },
    modelValue: {
      type: String,
      default: '',
      required: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small', // '', 'small', 'medium'
      validator: (value) => ['', 'small', 'medium'].includes(value),
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    minDate: {
      type: String,
      default: null,
    },
    maxDate: {
      type: String,
      default: null,
    },
    align: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    customProps() {
      const size = [];
      if (this.small) {
        size.push('small');
      }
      if (this.medium) {
        size.push('medium');
      }
      return size.join(' ');
    },
    locale() {
      return this.$util.locale().toLowerCase();
    },
    masks() {
      return {
        title: this.locale === 'ko' ? 'YYYY년 MMMM' : 'YYYY MMMM',
      };
    },
  },
  watch: {
    modelValue(val) {
      if (val === '') {
        this.selectedDateLabel = val;
      } else {
        this.selectedDateLabel = this.toString(val, this.inputType);
        this.selectedDate = this.toDate(val);
        this.$nextTick(() => {
          if (this.$refs.calendar?.move) {
            this.$refs.calendar.move(this.selectedDate, { transition: 'none' });
          }
        });
      }
    },
  },
  data() {
    return {
      isOpen: false,
      renderComplete: false,
      selectedDate: null,
      selectedDateLabel: '',
      // masks: {
      //   title: 'YYYY MMMM',
      // },
      popover: {
        visibility: 'click',
      },
    };
  },
  methods: {
    setDate(date) {
      if (date === '') {
        this.selectedDate = null;
        this.selectedDateLabel = '';
      } else {
        this.selectedDate = this.toDate(date);
        this.selectedDateLabel = moment(this.selectedDate).format(this.inputType);
      }

      const isSame = moment(this.modelValue).isSame(date);
      if (!isSame) {
        this.$emit('update:modelValue', date);
        this.$emit('change', date);
      }
    },
    toDate(date, format = this.modelType) {
      if (date === null) return null;
      return moment(date, format).toDate();
    },
    toString(date, format = this.modelType) {
      return moment(date).format(format);
    },
    // 달력
    onDayClick(event) {
      if (!event.isDisabled) {
        this.setDate(this.toString(event.date));
        this.isOpen = false;
      }
    },
    onFocus() {
      // this.$refs.calendar.showPopover();
      // this.$refs.calendar.move(this.modelValue, { transition: 'none' });
      if (!this.readonly && !this.disabled) {
        this.isOpen = true;
        this.renderComplete = true;
      }
    },
    onFocusOut() {
      // this.$refs.calendar.hidePopover();
      // this.isOpen = false;
      if (this.modelValue === '') {
        this.selectedDateLabel = '';
      } else {
        this.selectedDateLabel = moment(this.modelValue, this.modelType).format(this.inputType);
      }
    },
    onEnter() {
      // check valid
      const isValid = this.validateDate(this.selectedDateLabel, this.inputType);

      if (isValid) {
        const day = moment(this.selectedDateLabel, this.inputType);
        this.setDate(this.toString(day.toDate()));
        if (!day.isSame(this.selectedDate)) {
          this.$refs.calendar.move(this.toDate(this.modelValue), {
            transition: 'none',
          });
        }
        // this.$refs.calendar.move(this.toDate(this.modelValue), { transition: 'none' });
      }
    },
    validateDate(targetDate, format) {
      const date = moment(targetDate, format);
      let isValid = date.isValid();

      if (this.minDate) {
        const min = moment(this.minDate, format);
        isValid = isValid && date.isSameOrAfter(min);
      }

      if (this.maxDate) {
        const max = moment(this.maxDate, format);
        isValid = isValid && date.isSameOrBefore(max);
      }

      return isValid;
    },
    setToday() {
      this.setDate(this.toString(new Date()));
      this.$refs.calendar.move(new Date(), { transition: 'none' });
      // this.isOpen = false;
    },
    setClear() {
      this.setDate('');
      this.isOpen = false;
    },
    handleClickOutside() {
      this.isOpen = false;
    },
  },
  created() {
    // 초기값 today, clear, none
    if (this.init.toLowerCase() === 'today') {
      this.setDate(moment().format(this.modelType));
    } else if (this.init.toLowerCase() === 'clear') {
      this.setDate('');
    } else {
      this.setDate(this.modelValue);
      // this.setDate(moment(this.modelValue).format(this.format));
    }
  },
};
</script>

<style scoped lang="scss">
// 달력색상 재정의
$sunday-color: $SC-PRIMARY-COLOR-RED;
$saturday-color: $SC-PRIMARY-COLOR-BLUE;

.sc-datepicker {
  display: inline-block;
  position: relative;
  width: 130px;

  .layer {
    position: absolute;
    top: 100%;

    border: 1px solid $SC-COLOR-GRAY-30;
    background-color: $SC-COLOR-WHITE;

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }
  }
}

// 달력
.sc-datepicker :deep(.vc-blue) {
  --vc-text-sm: 14px;
  --vc-focus-ring: 0;

  // 달력 년도 선택했을때 나오는 레이어
  --vc-nav-item-active-bg: #00abd6; // 선택한 month의 배경 컬러
  --vc-nav-item-current-color: #ff5e00; // 현재 month의 텍스트 컬러

  // 애니메이션 효과 제거
  --vc-slide-translate: none;
  --vc-slide-duration: 0;
  --vc-slide-timing: none;

  .vc-blue {
    --vc-accent-50: #eff6ff;
    --vc-accent-100: #dbeafe;
    --vc-accent-200: #bfdbfe;
    --vc-accent-300: #93c5fd;
    --vc-accent-400: #60a5fa;
    --vc-accent-500: #00abd6;
    --vc-accent-600: #00abd6; // select day
    --vc-accent-700: #1d4ed8;
    --vc-accent-800: #1e40af;
    --vc-accent-900: #1e3a8a;
    --vc-day-content-transition: all 0s ease-in;
  }

  .vc-title {
    font-size: 14px;
  }
}

// 일요일
.sc-datepicker :deep(.vc-weekday-1) {
  color: $sunday-color;
}
.sc-datepicker :deep(.weekday-1) {
  color: $sunday-color;
}
// 토요일
.sc-datepicker :deep(.vc-weekday-7) {
  color: $saturday-color;
  //--vc-color: #2e86c1;
}
.sc-datepicker :deep(.weekday-7) {
  color: $saturday-color;
}
.sc-datepicker + :deep(span) {
  margin: 0 10px;
}
</style>
