<template>

  <el-container>
       <el-header>
      <el-menu  default-active="reports" mode="horizontal" @select="handleSelect" router>
    <el-menu-item index="reports">report</el-menu-item>
    <el-menu-item index="datasources">data</el-menu-item>
    </el-menu>
</el-header>

<el-main>
  <!-- 保持路由状态 https://www.cnblogs.com/wangmaoling/p/9803960.html -->
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
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
      console.log(this.$router);
      this.$router.push(keyPath);

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
