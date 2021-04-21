<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          编号（14H）
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
      <tr v-for="Evidence14HData in Evidence14HDataList" :key="Evidence14HData.id">
        <td v-text="Evidence14HData.id"></td>
        <td v-text="Evidence14HData.estimatedBeats"></td>
        <td v-text="Evidence14HData.actualBeats"></td>
        <td v-text="Evidence14HData.beatsRate"></td>
        <td v-text="Evidence14HData.maxBeatsLackTime"></td>
        <td v-text="Evidence14HData.startTime"></td>
        <td v-text="Evidence14HData.deviceSerial"></td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block" v-on:click="getEvidence14HData()">查询数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="deleteEvidence14HData()">删除数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="addEvidence14HData()">生成14H证据</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Evidence14H",
  data() {
    return {
      Evidence14HDataList: [],
    }
  },
  mounted() {
    this.getEvidence14HData();
  },
  methods:{
    getEvidence14HData: function(){
      var _this = this;
      _this.$ajax.get('/evidenceData/14H').then(function(resp){
        console.log(resp.data);
        _this.Evidence14HDataList = resp.data;
        //this.$set(this,'Evidence18HData',resp.data.body)
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    deleteEvidence14HData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/deleteEvidenceData14H').then(function(){
      })
    },
    addEvidence14HData: function(){
      var _this = this;
      _this.$ajax.get('/evidenceData/addEvidenceData/14H').then(function(){
      });
    },
  }
}
</script>

<style scoped>

</style>