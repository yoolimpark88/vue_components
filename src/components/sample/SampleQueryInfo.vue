<!-- SampleQueryInfo.vue -->
<template>
  <div>
    <!-- ScQueryInfo 컴포넌트 사용 -->
    <sc-query-info
      :queryTime="queryTime"
      :displayTime="displayTime"
      :showCopyUrl="true">
      <sc-pagination v-model="page" @change="onPageChange" />
    </sc-query-info>
  </div>
</template>

<script>
import ScQueryInfo from "@/components/common/ScQueryInfo.vue";
//import ScQueryInfo from "../common/ScQueryInfo.vue";

export default {
  name: "SampleQueryInfo",
  components: {
    ScQueryInfo, // ScQueryInfo 컴포넌트를 등록
  },
  data() {
    return {
      queryTime: "",
      displayTime: "",
      page: {
        rowPerPage: 10,
        currentPage: 1,
        totalItems: 12345,
      },
    };
  },
  methods: {
    onPageChange(page) {
      console.info("페이지 이동", page);
    },
    onSearch() {
      // 검색 관련 함수 구현
    },
  },
};
</script>
