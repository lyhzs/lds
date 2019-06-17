<template>
    <div class="container">
       <!-- Admin页面 -->
       <div class="row">
       <div class="col-7">
         <Newpizza></Newpizza> 
       </div>
       <div class="col-5">
         <NewMenu></NewMenu>   
         </div>      
       </div>   


       <div class="container">
         <span class="btn btn-success mt-4 col-2" @click='fff'> 查看商品详情</span>
       </div>
    </div>
</template>

<script>
import Newpizza from './admin/Newpizza'
import NewMenu from './admin/Newmenu'

    export default {
      name:'Admin',
      components:{
        Newpizza,
        NewMenu
      } ,
      methods:{
        fff(){
          this.$router.push({
            name:'Details',
            params: {
                page: '1', code: '8989'
              }
            })
        }
      } 
    }
</script>

<style scoped>

</style>