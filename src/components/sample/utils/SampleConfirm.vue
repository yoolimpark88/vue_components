<template>
  <div>
    <sc-sample-box>
      <template #description>this.$util.confirm('메세지', confirm, cancelFn, closeFn);</template>
      <div>
        <sc-button @click="showConfirm">저장</sc-button>
      </div>
      <div class="mt-5 text-sm">결과 : {{ result }}</div>
    </sc-sample-box>
  </div>
</template>
