<template lang="">
  <div>
    <sc-sample-box>
      <template #description>버튼이나 아이콘에 알림 개수 또는 표시를 할 수 있습니다.</template>
      <div>
        <sc-badge value="new">
          <sc-button>comment</sc-button>
        </sc-badge>
        <sc-badge value="3">
          <sc-button>replies</sc-button>
        </sc-badge>
        <sc-badge value="99+">
          <sc-button>notices</sc-button>
        </sc-badge>
      </div>

      <div class="mt-5">
        <sc-badge value="3">
          <sc-icon type="bell" color="dark-gray" size="medium" />
        </sc-badge>
        <sc-badge value="9+">
          <sc-icon type="bell" color="dark-gray" size="medium" />
        </sc-badge>
        <sc-badge value="new">
          <sc-icon type="bell" color="dark-gray" size="medium" />
        </sc-badge>
      </div>

      <sc-code-highlight
        template='<div>
  <sc-badge value="new">
    <sc-button>comment</sc-button>
  </sc-badge>
  <sc-badge value="3">
    <sc-button>replies</sc-button>
  </sc-badge>
  <sc-badge value="99+">
    <sc-button>notices</sc-button>
  </sc-badge>
</div>

<div class="mt-5">
  <sc-badge value="3">
    <sc-icon type="bell" color="dark-gray" size="medium" />
  </sc-badge>
  <sc-badge value="9+">
    <sc-icon type="bell" color="dark-gray" size="medium" />
  </sc-badge>
  <sc-badge value="new">
    <sc-icon type="bell" color="dark-gray" size="medium" />
  </sc-badge>
</div>'
      />
    </sc-sample-box>

    <sc-sample-box title="dot">
      <sc-badge dot> test </sc-badge>
      <sc-badge dot>
        <sc-button>comments</sc-button>
      </sc-badge>
      <sc-badge dot>
        <sc-icon type="bell" color="dark-gray" size="medium" />
      </sc-badge>

      <sc-highlight
        template='<sc-badge dot> test </sc-badge>
<sc-badge dot>
  <sc-button>comments</sc-button>
</sc-badge>
<sc-badge dot>
  <sc-icon type="bell" color="dark-gray" size="medium" /> 
</sc-badge>'
      />
    </sc-sample-box>

    <sc-sample-box title="color, background-color">
      <sc-badge value="new" background-color="#00abd6" color="white">
        <sc-button>comments</sc-button>
      </sc-badge>
      <sc-badge value="new" background-color="#00abd6" color="white">
        <sc-button>comments</sc-button>
      </sc-badge>
      <sc-badge dot background-color="#00abd6">
        <sc-icon type="bell" color="dark-gray" size="medium" />
      </sc-badge>
      <sc-badge dot background-color="#00abd6">
        <sc-icon type="bell" color="dark-gray" size="medium" />
      </sc-badge>

      <sc-code-highlight
        template='<sc-badge value="new" background-color="#00abd6" color="white">
  <sc-button>comments</sc-button>
</sc-badge>
<sc-badge value="new" background-color="#ffcc00" color="white">
  <sc-button>comments</sc-button>
</sc-badge>
<sc-badge dot background-color="#00abd6">
  <sc-icon type="bell" color="dark-gray" size="medium" />
</sc-badge>
<sc-badge dot background-color="#ffcc00">
  <sc-icon type="bell" color="dark-gray" size="medium" />
</sc-badge>'
      />
    </sc-sample-box>
  </div>
</template>
<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';
import ScButton from '@/components/common/ScButton.vue';
import ScIcon from '@/components/common/ScIcon.vue';
import ScBadge from '@/components/common/ScBadge.vue';

export default {
  name: 'SampleBadge',
  components: { ScSampleBox, ScCodeHighlight, ScButton, ScIcon, ScBadge },
};
</script>
<style lang=""></style>
