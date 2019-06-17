<template>
    <div class="mt-5">
      <h3 class="text-center">菜单管理</h3>
<table class="table">
  <thead>
    <tr>
      <th scope="col">序号</th>
      <th scope="col">品种</th>
      <th scope="col">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in newmenu" :key="index">
      <td scope="row">{{index+1}}</td>
      <td>{{item.name}}</td>
      <td><button class="btn btn-danger" @click="add(item.id,index)">Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
       name:'Newmenu',
       data(){
         return{
          //  newmenu:[]  
         }  
       },
       mounted(){
         axios.get('./lyh-menu.json')
         .then(res=>{
           var result =[]
            for(let key in res.data){
              var item =res.data[key] 
                item.id=key
                result.push(item)
            }
           this.$store.commit('getmearr',result)  
         })  
       },
       methods:{
         add(i,ii){
           axios.delete('./lyh-menu/'+i+'.json').then(res=>{
              // location.reload()
              
              this.$store.commit('addmearr',ii)  
           })
         }
       } ,
       computed:{
          newmenu(){
            return this.$store.getters.getmearr
          }
       }
    }
</script>

<style  scoped>
  td,th{text-align: center;}
</style>