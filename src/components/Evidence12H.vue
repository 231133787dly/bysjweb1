<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          编号（12H）
        </th>
        <th>
          应有心跳数
        </th>
        <th>
          实际心跳数
        </th>
        <th>
          心跳率（实际/应有）
        </th>
        <th>
          最大缺失时间
        </th>
        <th>
          统计开始时间
        </th>
        <th>
          设备序列号
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="Evidence12HData in Evidence12HDataList" :key="Evidence12HData.id">
        <td v-text="Evidence12HData.id"></td>
        <td v-text="Evidence12HData.estimatedBeats"></td>
        <td v-text="Evidence12HData.actualBeats"></td>
        <td v-text="Evidence12HData.beatsRate"></td>
        <td v-text="Evidence12HData.maxBeatsLackTime"></td>
        <td v-text="Evidence12HData.startTime"></td>
        <td v-text="Evidence12HData.deviceSerial"></td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block" v-on:click="getEvidence12HData()">查询数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="deleteEvidence12HData()">删除数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="addEvidence12HData()">生成12H证据</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Evidence12H",
  data() {
    return {
      Evidence12HDataList: [],
    }
  },
  mounted() {
    this.getEvidence12HData();
  },
  methods:{
    getEvidence12HData: function(){
      var _this = this;
      _this.$ajax.get('/evidenceData/12H').then(function(resp){
        console.log(resp.data);
        _this.Evidence12HDataList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    deleteEvidence12HData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/deleteEvidenceData12H').then(function(){
      })
    },
    addEvidence12HData: function(){
      var _this = this;
      _this.$ajax.get('/evidenceData/addEvidenceData/12H').then(function(){
      });
    },
  }
}

</script>

<style scoped>

</style>