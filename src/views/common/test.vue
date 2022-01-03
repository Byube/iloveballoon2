<template>
  <div class="grid">
    <div class="col-12">
      <div class="card l-3 border-1 surface-border">
        <Dashboard :mName="cmName" :cName="cName" />
      </div>
      <div class="card l-3 border-1 surface-border">
        <Dashboard :mName="amName" :cName="aName" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Dashboard from "./Dashboard.vue";
export default {
  components: {
    Dashboard,
  },
  setup() {
    const cmName = ref("공통");
    const cName = ref([
      "회원수",
      "회원가입 현황",
      "유저 KYC관리",
      "바우처 구매",
    ]);
    const amName = ref("ASTA");
    const aName = ref([
      "ASTA 전체회원 토큰 보유 합계",
      "ASTA 관리자 입금액/건",
      "ASTA 관리자 출금액/건",
      "ASTA 관리자 입금액/건",
      "ASTA 관리자 출금액/건",
      "ASTA 관리자 출금 수수료/건",
    ]);
    return {
      cName,
      cmName,
      amName,
      aName,
    };
  },
};
</script>

<style>
</style>