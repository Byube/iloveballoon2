<template>
  <div
    class="
      grid 
      grid-cols-2
      gap-2
      font-bold
    "
  >
    <div class="col-12">
      <LineChart
        :LineChartData="LineChartData"
      />
      <PieChart
        :PieChartData="PieChartData"
      />
      <PolarAreaChart 
        :PolarAreaChartData="PolarAreaChartData"
      />

    </div>
    <div class="col-12">
      <BarChart
        :BarChartData="BarChartData"
      />
      <DoughNutChart
        :DoughNutChartData="DoughNutChartData"
      />
      <RadarChart
        :RadarChartData="RadarChartData"
      />
    </div>
  </div>
</template>

<script>
import PieChart from './chart/PieChart.vue';
import LineChart from './chart/LineChart.vue';
import PolarAreaChart from './chart/PolarAreaChart.vue';
import BarChart from './chart/BarChart.vue';
import DoughNutChart from './chart/DoughNutChart.vue';
import RadarChart from './chart/RadarChart.vue';
// import PieChartData from '@/data/PieChartData.json'
import LineChartData from '@/data/LineChartData.json'
import PolarAreaChartData from '@/data/PolarAreaChartData.json'
import BarChartData from '@/data/BarChartData.json'
import DoughNutChartData from '@/data/DoughNutChartData.json'
import RadarChartData from '@/data/RadarChartData.json'
import axios from '@/api/axios';
import { ref } from '@vue/reactivity';
export default {
  components:{
    PieChart,
    LineChart,
    PolarAreaChart,
    BarChart,
    DoughNutChart,
    RadarChart
  },
  setup() {
    const PieChartData = ref(null);
    const GetData = async () => {
      let res;
      try {
        res = await axios.get('comments/1');
        PieChartData.value = res.data;
        console.log(PieChartData.value);
      } catch (err) {
        console.log(err);
      }
    }
    GetData();
    console.log(DoughNutChartData);
    return {
      PieChartData,
      LineChartData,
      PolarAreaChartData,
      BarChartData,
      DoughNutChartData,
      RadarChartData,
    }
  }
};
</script>