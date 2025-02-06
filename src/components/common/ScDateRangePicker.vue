<template>
  <div :class="['sc-date-range-picker', size, customProps]" v-out-side-click="handleClickOutside">
    <sc-text-field
      v-model="startDateLabel"
      @focusin.stop="onFocus"
      @keyup.enter="onEnter('start')"
      @click-icon="onFocus"
      date-icon
      :disabled="disabled"
      :readonly="readonly"
      :size="size"
      :class="customProps"
      :placeholder="inputType"
      :esc-clear="false"
    />
    ~
    <sc-text-field
      v-model="endDateLabel"
      @focusin.stop="onFocus"
      @keyup.enter="onEnter('end')"
      @click-icon="onFocus"
      date-icon
      :disabled="disabled"
      :readonly="readonly"
      :size="size"
      :class="customProps"
      :placeholder="inputType"
      :esc-clear="false"
    />
    <div
      v-if="!noLayer && (isOpen || renderComplete)"
      v-show="isOpen"
      class="picker-layer z-30"
      :class="align"
    >
      <VDatePicker
        :key="datePickerKey"
        ref="calendar"
        class="calendar"
        v-model.range="dates"
        range
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
        :columns="2"
      >
        <template #footer>
          <div class="buttons w-full flex mb-5">
            <div class="left">
              <slot name="period" :setPeriod="setPeriod"></slot>
            </div>
            <div class="right">
              <sc-button v-show="clearable" small @click="clearDate">Clear</sc-button>
              <sc-button small @click="onClose" color="primary">Close</sc-button>
            </div>
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
import { onMounted, ref, useSlots } from 'vue';
import { computed } from 'vue';

export default {
  name: 'ScDateRangePicker',
  components: {
    ScButton,
    ScTextField,
  },
  emits: ['update:modelValue', 'change', 'open'],
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
      type: Array,
      default: () => ['', ''],
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
    dateOrder: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    noLayer: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const slots = useSlots();
    // const { modelValue, modelType, inputType } = props;
    const { modelValue, modelType, inputType } = computed(() => props);
    const [start, end] = modelValue;

    const toDate = (date, format = modelType) => {
      if (date === null || date === '') return null;
      return moment(date, format).toDate();
    };

    const dates = ref({
      start: toDate(start),
      end: toDate(end),
    });

    const startDateLabel = ref('');
    const endDateLabel = ref('');

    const setLabel = () => {
      let startLabel = '';
      let endLabel = '';
      if (dates.value.start) {
        startLabel = toString(dates.value.start, inputType);
      }
      if (dates.value.end) {
        endLabel = toString(dates.value.end, inputType);
      }
      startDateLabel.value = startLabel;
      endDateLabel.value = endLabel;
    };

    const clearDate = () => {
      dates.value.start = null;
      dates.value.end = null;

      setLabel();
    };

    const toString = (date, format = modelType) => {
      if (date) {
        return moment(date).format(format);
      }
      return '';
    };

    // 초기화
    onMounted(() => {
      setLabel();
    });

    return {
      slots,
      dates,
      startDateLabel,
      endDateLabel,
      toDate,
      toString,
      clearDate,
      setLabel,
    };
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
    isValid() {
      return this.dates.start && this.dates.end;
    },
  },
  data() {
    return {
      datePickerKey: 0,
      isOpen: false,
      renderComplete: false,
      selectedDate: null,
      selectedDateLabel: '',
      popover: {
        visibility: 'click',
      },
    };
  },
  methods: {
    setPeriod(amount, unit) {
      if (['m', 'month', 'months', 'M', 'MONTH', 'MONTHS'].includes(unit)) {
        unit = 'months'; // months
      } else if (['d', 'day', 'days', 'D', 'DAY', 'DAYS'].includes(unit)) {
        unit = 'days'; // days
      } else if (['y', 'year', 'years', 'Y', 'YEAR', 'YEARS'].includes(unit)) {
        unit = 'years'; // years
      } else if (['w', 'week', 'weeks', 'W', 'WEEK', 'WEEKS'].includes(unit)) {
        unit = 'weeks';
      }

      // noinspection JSDeprecatedSymbols
      this.dates.start = moment().add(amount, unit).toDate();
      this.dates.end = moment().toDate();

      this.setLabel();
    },
    // setDate(date) {
    //   if (date === '') {
    //     this.selectedDate = null;
    //     this.selectedDateLabel = '';
    //   } else {
    //     this.selectedDate = this.toDate(date);
    //     this.selectedDateLabel = moment(this.selectedDate).format(this.inputType);
    //   }
    //   this.$emit('update:modelValue', date);
    //   this.$emit('change', date);
    // },
    // toDate(date, format = this.modelType) {
    //   if (date === null) return null;
    //   return moment(date, format).toDate();
    // },
    // toString(date, format = this.modelType) {
    //   return moment(date).format(format);
    // },
    // 달력
    onDayClick(event) {
      if (!event.isDisabled) {
        // this.setDate(this.toString(event.date));
        // this.isOpen = false;
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
    onEnter(type) {
      let dateLabel;
      if (type === 'start') {
        dateLabel = this.startDateLabel;
      } else {
        dateLabel = this.endDateLabel;
      }

      // check valid
      const isValid = this.validateDate(dateLabel, this.inputType);

      if (isValid) {
        const day = moment(dateLabel, this.inputType).toDate();
        if (type === 'start') {
          this.dates.start = day;
        } else {
          this.dates.end = day;
        }
        this.$refs.calendar.move(day, { transition: 'none' });
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
    handleClickOutside() {
      this.isOpen = false;
    },
    onClose() {
      this.isOpen = false;
    },
  },
  watch: {
    modelValue(val, oldVal) {
      // console.info('changed modelValue');
      const [start, end] = val;
      const [oldStart, oldEnd] = oldVal;

      if (start === oldStart && end === oldEnd) {
        return;
      }

      if (start && this.toString(this.dates.start) !== start) {
        this.dates.start = this.toDate(start);
      }
      if (end && this.toString(this.dates.end) !== end) {
        this.dates.end = this.toDate(end);
      }
    },
    dates: {
      handler(val) {
        const { start, end } = val;
        let startDate = start;
        let endDate = end;

        this.setLabel();
        // 초기화
        this.datePickerKey++;

        if (this.dateOrder) {
          if (!moment(start).isBefore(end)) {
            startDate = end;
            endDate = start;
          }
        }
        // 값이 다른 경우에만 업데이트 처리
        if (
          this.modelValue[0] !== this.toString(startDate) ||
          this.modelValue[1] !== this.toString(endDate)
        ) {
          this.$emit('update:modelValue', [this.toString(startDate), this.toString(endDate)]);
          this.$emit('change', [this.toString(startDate), this.toString(endDate)]);
        }
      },
      deep: true,
    },
    isOpen(val) {
      this.$emit('open', val);
    },
  },
};
</script>

<style scoped lang="scss">
// 달력색상 재정의
$sunday-color: $SC-PRIMARY-COLOR-RED;
$saturday-color: $SC-PRIMARY-HOVER-COLOR-BLUE;

.sc-date-range-picker {
  position: relative;
  display: inline-flex;
  gap: 10px;
  max-width: 280px;
  .picker-layer {
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
.sc-date-range-picker :deep(.vc-blue) {
  --vc-text-sm: 14px;
  --vc-focus-ring: 0;

  // 달력 년도 선택했을때 나오는 레이어
  --vc-nav-item-active-bg: $SC-PRIMARY-COLOR-LIGHT-BLUE;
  --vc-nav-item-current-color: $SC-PRIMARY-COLOR-LIGHT-BLUE;

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

    // period
    --vc-highlight-light-bg: $SC-SUB-COLOR-LIGHT-BLUE-TINT-01; // 기간내 배경
    --vc-highlight-light-content-color: $SC-SUB-COLOR-LIGHT-BLUE-SHADE-02; // 기간내 폰트
  }

  .vc-title {
    font-size: 14px;
  }
}

// 일요일
.sc-date-range-picker :deep(.vc-weekday-1) {
  color: $sunday-color;
}
.sc-date-range-picker :deep(.weekday-1) {
  color: $sunday-color;
}
// 토요일
.sc-date-range-picker :deep(.vc-weekday-7) {
  color: $saturday-color;
  //--vc-color: #2e86c1;
}
.sc-date-range-picker :deep(.weekday-7) {
  color: $saturday-color;
}
.buttons {
  //border: 1px dashed red;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 10px;
}
</style>
