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
    <sc-sample-box title="검색 : 검색결과는 최대 200건만 노출됩니다.">
      <sc-search-box class="my-5">
        <sc-search-item label="메세지키">
          <sc-text-field v-model.trim="searchKey" />
        </sc-search-item>
        <sc-search-item :label="$t('한글')">
          <sc-text-field v-model.trim="searchKo" />
        </sc-search-item>
        <sc-search-item :label="$t('영문')">
          <sc-text-field v-model.trim="searchEn" />
        </sc-search-item>
      </sc-search-box>
      <div class="w-full">
        <sc-table>
          <template #thead>
            <tr>
              <th style="width: 2%" class="text-center">No</th>
              <th style="width: 18%">messageKey</th>
              <th style="width: 40%">messageKo</th>
              <th style="width: 40%">messageEn</th>
              <!--            <th>messageZh</th>-->
            </tr>
          </template>
          <tr
            v-for="(item, idx) in filteredItems"
            :key="`${item.messageKey}_${idx}`"
            @click="messageKey = item.messageKey"
          >
            <td class="text-center">{{ idx + 1 }}</td>
            <td>{{ item.messageKey }}</td>
            <td>{{ item.messageKo }}</td>
            <td>{{ item.messageEn }}</td>
            <!--          <td>{{ item.messageZh }}</td>-->
          </tr>
          <tr v-if="filteredItems.length === 0">
            <td colspan="4" class="text-center">검색 결과가 없습니다.</td>
          </tr>
        </sc-table>
      </div>
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTextField from '@/components/common/ScTextField.vue';
import ScFormBox from '@/components/common/ScFormBox.vue';
import ScFormItem from '@/components/common/ScFormItem.vue';
import ScTable from '@/components/common/ScTable.vue';
import { useCommonStore } from '@/store/commonStore';
import { storeToRefs } from 'pinia';
import ScSearchBox from '@/components/common/ScSearchBox.vue';
import ScSearchItem from '@/components/common/ScSearchItem.vue';

export default {
  name: 'SampleI18n',
  components: {
    ScSearchItem,
    ScSearchBox,
    ScTable,
    ScFormItem,
    ScFormBox,
    ScTextField,
    ScSampleBox,
  },
  setup() {
    const commonStore = useCommonStore();
    const { languageRaw } = storeToRefs(commonStore);

    return {
      languageItems: languageRaw,
    };
  },
  data() {
    return {
      messageKey: 'ISPEC_MSG_01157',
      searchKey: '',
      searchKo: '',
      searchEn: '',
      items: [
        {
          messageKey: 'test_msgKey_01',
          messageKo: '테스트_01',
          messageEn: 'test+01',
        },
        // 다른 객체를 추가할 수 있습니다.
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items
        .filter((item) => {
          return item.messageKey.toLowerCase().includes(this.searchKey.toLowerCase());
        })
        .filter((item) => {
          return item.messageKo?.includes(this.searchKo);
        })
        .filter((item) => {
          return item.messageEn?.toLowerCase().includes(this.searchEn.toLowerCase());
        })
        .sort((a, b) => {
          if (a.messageKo.length > b.messageKo.length) {
            return 1;
          } else {
            return -1;
          }
        })
        .slice(0, 200);
    },
  },
  created() {
    // this.$util.alert(this.$t('GESPEC0008404'));
  },
};
</script>

<style scoped lang="scss"></style>
