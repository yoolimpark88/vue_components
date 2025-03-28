<template>
  <div :class="['sc-help-text-wrap', size, type, { icon: icon }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ScHelpText',
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    type: {
      type: String,
      default: "",
      validator: (value) => ["", "info", "caution"].includes(value),
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped lang="scss">
.sc-help-text-wrap {
  position:relative;
  color: $SC-COLOR-TYPE2-GRAY-80;
  margin: 3px 0 0 3px;
  &.small {
    font-size: 11px;
    &.icon {
      &::after {
        padding: 0.2em 0 0 0.4em;
      }
    }
  }
  &.medium {
    font-size: 12px;
    &.icon {
      &::after {        
        width:12px;
        height:12px;
        font-size:10px;
      }
    }
  }
  &.large {
    font-size: 14px;
    &.icon {
      &::after {        
        width:14px;
        height:14px;
        font-size:12px;
      }
    }
  }  
  &.info {
    color:#2584DA;
  }
  &.caution {
    color:#ff2300;
  }
  &.icon {
    padding-left: 16px;      
    &.info {
      color:#2584DA;
      &::after {
        background-color: #2584DA;
      }
    }
    &.caution {
      color:#ff2300;
      &::after {
        background-color: #ff2300;
      }
    }
    &::after {
      content: "?";        
      position:absolute;
      left:0;
      top:0;
      width:11px;
      height:11px;
      border-radius:50%;
      background-color: #5A5A5A;
      color:#fff;
      font-size:8px;
      padding: 0 0 0 0.3em;
      margin: 3px 0 0 0;
      line-height: 120%;
    }
  }
}
</style>
