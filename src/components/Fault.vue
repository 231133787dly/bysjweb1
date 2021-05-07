<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          编号（故障）
        </th>
        <th>
          故障id
        </th>
        <th>
          开始时间
        </th>
        <th>
          设备序列号
        </th>
        <th>
          故障严重度
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="FaultData in FaultDataList" :key="FaultData.id">
        <td v-text="FaultData.id"></td>
        <td v-text="FaultData.faultId"></td>
        <td v-text="FaultData.startTime"></td>
        <td v-text="FaultData.deviceSerial"></td>
        <td v-text="FaultData.faultCount"></td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block" v-on:click="getFaultData()">查询数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="deleteFaultData()">删除数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="addFaultData()">生成故障数据</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fault",
  data() {
    return {
      FaultDataList: [],
    }
  },
  mounted() {
    this.getFaultData();
  },
  methods:{
    getFaultData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/getFaultData').then(function(resp){
        console.log(resp.data);
        _this.FaultDataList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    deleteFaultData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/deleteFaultData').then(function(){
      });
    },
    addFaultData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/addFaultData').then(function(){
      });
    },
  }
}
</script>

<style scoped>

</style>