<template>
  <div id="app">
    <Header></Header>
   
    <router-view></router-view>

     <router-view name="history" class="container"></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data(){
    return {
      
      }
    },
    components:{
      Header
    }
  }
 
</script>

<style>

  .container{margin-left: 200px;}
</style>
