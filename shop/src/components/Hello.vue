<template>
  <div>
    <p>欢迎来到主页</p>
    <router-link to="/list">展现列表</router-link><br/><br/>
     <router-view name="list"></router-view>
  </div>
    
</template>

<script>
import Vue from 'vue'
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
