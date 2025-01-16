<template>
  <div>
    <sc-sample-box>
      <sc-table>
        <template #thead>
          <tr>
            <th style="width: 80px">번호</th>
            <th style="width: 130px">이름</th>
            <th>업체명</th>
            <th style="width: 200px">E-mail</th>
          </tr>
        </template>

        <tr v-for="(item, idx) in items" :key="item.id">
          <td class="text-center">{{ idx + 1 }}</td>
          <td class="text-center">{{ item.name }}</td>
          <td>
            <a href="#">{{ item.enterprise }}</a>
          </td>
          <td>{{ item.email }}</td>
        </tr>
      </sc-table>

      <sc-code-highlight
        template='<sc-table>
<template #thead>
  <tr>
    <th style="width: 80px">번호</th>
    <th style="width: 130px">이름</th>
    <th>업체명</th>
    <th style="width: 200px">E-mail</th>
  </tr>
</template>

<tr v-for="(item, idx) in items" :key="item.id">
  <td class="text-center">{{ idx + 1 }}</td>
  <td class="text-center">{{ item.name }}</td>
  <td>{{ item.enterprise }}</td>
  <td><a href="#">{{ item.email }}</a></td>
</tr>
</sc-table>'
        script="export default {
data() {
  return {
    items: [
      { id: '1', name: 'Kim', email: 'kim@example.com', enterprise: '(주) 가나다' },
      { id: '2', name: 'Lee', email: 'lee@example.com', enterprise: '(주) HYBE' },
      { id: '3', name: 'Park', email: 'park@example.com', enterprise: '(주) YG' },
      { id: '4', name: 'Song', email: 'park@example.com', enterprise: '(주) JYP' },
      { id: '5', name: 'Ryu', email: 'park@example.com', enterprise: '(주) 플레디스' },
      { id: '6', name: 'Yi', email: 'park@example.com', enterprise: '(주) 네이버' },
      { id: '7', name: 'Jang', email: 'park@example.com', enterprise: '(주) 구글코리아' },
      { id: '8', name: 'Yang', email: 'park@example.com', enterprise: '(주) 삼성' },
      { id: '9', name: 'espec', email: 'park@example.com', enterprise: 'eSpec' },
    ],
  };
},
};"
      />
    </sc-sample-box>
  </div>
</template>

<script>
import ScSampleBox from '@/components/common/ScSampleBox.vue';
import ScTable from '@/components/common/ScTable.vue';
import ScCodeHighlight from '@/components/common/ScCodeHighlight.vue';

export default {
  name: 'SampleGrid',
  components: { ScCodeHighlight, ScTable, ScSampleBox },
  data() {
    return {
      items: [
        {
          id: '1',
          name: 'Kim',
          email: 'kim@example.com',
          enterprise: '(주) 가나다',
        },
        {
          id: '2',
          name: 'Lee',
          email: 'lee@example.com',
          enterprise: '(주) HYBE',
        },
        {
          id: '3',
          name: 'Park',
          email: 'park@example.com',
          enterprise: '(주) YG',
        },
        {
          id: '4',
          name: 'Song',
          email: 'park@example.com',
          enterprise: '(주) JYP',
        },
        {
          id: '5',
          name: 'Ryu',
          email: 'park@example.com',
          enterprise: '(주) 플레디스',
        },
        {
          id: '6',
          name: 'Yi',
          email: 'park@example.com',
          enterprise: '(주) 네이버',
        },
        {
          id: '7',
          name: 'Jang',
          email: 'park@example.com',
          enterprise: '(주) 구글코리아',
        },
        {
          id: '8',
          name: 'Yang',
          email: 'park@example.com',
          enterprise: '(주) 삼성',
        },
        {
          id: '9',
          name: 'espec',
          email: 'park@example.com',
          enterprise: 'eSpec',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
