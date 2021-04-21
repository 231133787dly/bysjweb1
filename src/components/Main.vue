<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/test">Test</router-link>
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
          <li class="nav-item dropdown ml-md-auto">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">操作</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" to="/test">test</router-link>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider">
              </div> <a class="dropdown-item" href="#">Separated link</a>
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
name: "Main"
}
</script>

<style scoped>

</style>