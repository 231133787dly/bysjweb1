<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          编号（11H）
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
      <tr v-for="Evidence11HData in Evidence11HDataList" :key="Evidence11HData.id">
        <td v-text="Evidence11HData.id"></td>
        <td v-text="Evidence11HData.estimatedBeats"></td>
        <td v-text="Evidence11HData.actualBeats"></td>
        <td v-text="Evidence11HData.beatsRate"></td>
        <td v-text="Evidence11HData.maxBeatsLackTime"></td>
        <td v-text="Evidence11HData.startTime"></td>
        <td v-text="Evidence11HData.deviceSerial"></td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block" v-on:click="getEvidence11HData()">查询数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="deleteEvidence11HData()">删除数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="addEvidence11HData()">生成11H证据</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Evidence11H",
  data() {
    return {
      Evidence11HDataList: [],
    }
  },
  mounted() {
    this.getEvidence11HData();
  },
  methods:{
    getEvidence11HData: function(){
      var _this = this;
      _this.$ajax.get('/evidenceData/11H').then(function(resp){
        console.log(resp.data);
        _this.Evidence11HDataList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    deleteEvidence11HData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/deleteEvidenceData11H').then(function(){
      });
    },
    addEvidence11HData: function(){
      var _this = this;
      _this.$ajax.get('/evidenceData/addEvidenceData/11H').then(function(){
      });
    },
  }
}
</script>

<style scoped>

</style>