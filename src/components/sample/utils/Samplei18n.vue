<template>
  <div>
    <sc-sample-box>
      <template #description>
        <div v-pre>
          <p>DB에 데이터를 입력하고 {{ $t('메세지키') }}를 사용하여 다국어를 사용하니다.</p>
          <p>this.$util.locale() = 현재 언어값 노출</p>
        </div>
      </template>
      <sc-form-box col="2">
        <sc-form-item label="MessageKey" span="1" required>
          <sc-text-field v-model="messageKey" />
        </sc-form-item>
        <sc-form-item label="값" span="1">
          <div v-html="$t(`${messageKey}`)"></div>
        </sc-form-item>
      </sc-form-box>
    </sc-sample-box>
  </div>
</template>
