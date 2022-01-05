<template>
  <Table :TableData="TableData" />
  <Table :TableData="MemSamData" />
</template>

<script>
import TableData from "@/data/Member.json";
import MemSamData from "@/data/MemSamData.json";
import Table from "@/views/common/table/Table.vue";
export default {
  components: {
    Table,
  },
  setup() {
    return {
      TableData,
      MemSamData,
    };
  },
};
</script>

<style>
</style>