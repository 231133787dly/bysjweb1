<template>
  <div>
    <table class="table table-bordered table-hover table-striped">
      <thead>
      <tr>
        <th>
          编号（现象）
        </th>
        <th>
          现象id
        </th>
        <th>
          开始时间
        </th>
        <th>
          设备序列号
        </th>
        <th>
          证据条数
        </th>
        <th>
          证据来源
        </th>
        <th>
          现象可信度
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="PhenomenonData in PhenomenonDataList" :key="PhenomenonData.id">
        <td v-text="PhenomenonData.id"></td>
        <td v-text="PhenomenonData.phenomenonId"></td>
        <td v-text="PhenomenonData.startTime"></td>
        <td v-text="PhenomenonData.deviceSerial"></td>
        <td v-text="PhenomenonData.evidenceNum"></td>
        <td v-text="PhenomenonData.evidenceFrom"></td>
        <td v-text="PhenomenonData.phenomenonThreshold"></td>
      </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-primary btn-block" v-on:click="getPhenomenonData()">查询数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="deletePhenomenonData()">删除数据库</button>
      </div>
      <div class="col-md-4">
        <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="addPhenomenonData()">生成现象数据</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Phenomenon",
  data() {
    return {
      PhenomenonDataList: [],
    }
  },
  mounted() {
    this.getPhenomenonData();
  },
  methods:{
    getPhenomenonData: function(){
      var _this = this;
      _this.$ajax.get('/phenomenonData/getPhenomenonData').then(function(resp){
        console.log(resp.data);
        _this.PhenomenonDataList = resp.data;
      }).catch(resp => {
        console.log('请求失败：'+resp.status+','+resp.statusText);
      });
    },
    deletePhenomenonData: function(){
      var _this = this;
      _this.$ajax.get('/faultData/deletePhenomenonData').then(function(){
      });
    },
    addPhenomenonData: function(){
      var _this = this;
      _this.$ajax.get('/phenomenonData/addPhenomenonData').then(function(){
      });
    },
  }
}
</script>

<style scoped>

</style>