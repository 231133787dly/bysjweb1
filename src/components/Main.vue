<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/essentialData">EssentialData</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/evidence11H">Evidence11H</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/evidence12H">Evidence12H</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/evidence14H">Evidence14H</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/evidence18H">Evidence18H</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/phenomenon">Phenomenon</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/fault">Fault</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rules">Rules</router-link>
          </li>
          <li class="nav-item dropdown ml-md-auto">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">操作</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="javascript:void(0);" v-on:click="createEssentialData()">生成基础数据</a>
              <a class="dropdown-item" href="javascript:void(0);" v-on:click="deleteAll()">删除全部</a>
            </div>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Main",
  methods:{
    deleteAll: function(){
      var _this = this;
      _this.$ajax.get('/faultData/deleteAll').then(function(){
      })
    },
    createEssentialData: function(){
      var _this = this;
      _this.$ajax.get('/essentialData/all').then(function(){
      })
    },
  }
}
</script>

<style scoped>

</style>