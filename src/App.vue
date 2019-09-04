<template>

  <el-container>
       <el-header>
      <el-menu  default-active="2" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">菜单一</el-menu-item>
    <el-menu-item index="2">菜单二</el-menu-item>
    </el-menu>
</el-header>

<el-main>
  <router-view></router-view>
</el-main>

  </el-container>
 
    
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  methods:{
    handleSelect(key,keyPath){
      console.log("handle select:"+key+" path:"+keyPath);

    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
