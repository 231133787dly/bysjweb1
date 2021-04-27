<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          现象id
        </th>
        <th>
          现象名
        </th>
        <th>
          心跳率最小阈值
        </th>
        <th>
          心跳率最大阈值
        </th>
        <th>
          缺失时间最小阈值
        </th>
        <th>
          缺失时间最大阈值
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="PhenomenonRules in PhenomenonRulesList" :key="PhenomenonRules.phenomenonId">
        <td v-text="PhenomenonRules.phenomenonId"></td>
        <td v-text="PhenomenonRules.phenomenonName"></td>
        <td v-text="PhenomenonRules.beatsRateMin"></td>
        <td v-text="PhenomenonRules.beatsRateMax"></td>
        <td v-text="PhenomenonRules.lackTimeMin"></td>
        <td v-text="PhenomenonRules.lackTimeMax"></td>
      </tr>
      </tbody>
    </table>

    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          故障id
        </th>
        <th>
          所需现象id
        </th>
        <th>
          所需现象条数
        </th>
        <th>
          所需现象可信度
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="FaultRules in FaultRulesList" :key="FaultRules.id">
        <td v-text="FaultRules.faultId"></td>
        <td v-text="FaultRules.needPhenomenonId"></td>
        <td v-text="FaultRules.needPhenomenonNum"></td>
        <td v-text="FaultRules.needPhenomenonThreshold"></td>
      </tr>
      </tbody>
    </table>

    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          故障id
        </th>
        <th>
          故障名
        </th>
        <th>
          故障模块
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="FaultName in FaultNameList" :key="FaultName.faultId">
        <td v-text="FaultName.faultId"></td>
        <td v-text="FaultName.faultName"></td>
        <td v-text="FaultName.faultDevice"></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: "Rules",
  data() {
    return {
      PhenomenonRulesList: [],
      FaultRulesList: [],
      FaultNameList: [],
    }
  },
  mounted() {
    this.getPhenomenonRules();
    this.getFaultRules();
    this.getFaultName();
  },
  methods:{
    getPhenomenonRules: function(){
      var _this = this;
      _this.$ajax.get('/phenomenonData/getPhenomenonRules').then(function(resp){
        console.log(resp.data);
        _this.PhenomenonRulesList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    getFaultRules: function(){
      var _this = this;
      _this.$ajax.get('/faultData/getFaultRules').then(function(resp){
        console.log(resp.data);
        _this.FaultRulesList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    getFaultName: function(){
      var _this = this;
      _this.$ajax.get('/faultData/getFaultName').then(function(resp){
        console.log(resp.data);
        _this.FaultNameList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
  }
}
</script>

<style scoped>

</style>