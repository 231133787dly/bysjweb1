<template>
  <div class="row">
    <div class="col-md-3">
      <button type="button" class="btn btn-primary btn-block" v-on:click="createEssential11H()">生成11H基础数据</button>
    </div>
    <div class="col-md-3">
      <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="createEssential12H()">生成12H基础数据</button>
    </div>
    <div class="col-md-3">
      <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="createEssential14H()">生成14H基础数据</button>
    </div>
    <div class="col-md-3">
      <button type="button" class="btn btn-md btn-primary btn-block" v-on:click="createEssential18H()">生成18H基础数据</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EssentialData",
  methods: {
    createEssential11H: function () {
      var _this = this;
      _this.$ajax.get('/essentialData/11H').then(function () {
      });
    },
    createEssential12H: function () {
      var _this = this;
      _this.$ajax.get('/essentialData/12H').then(function () {
      });
    },
    createEssential14H: function () {
      var _this = this;
      _this.$ajax.get('/essentialData/14H').then(function () {
      });
    },
    createEssential18H: function () {
      var _this = this;
      _this.$ajax.get('/essentialData/18H').then(function () {
      });
    },
  }
}

</script>

<style scoped>

</style>