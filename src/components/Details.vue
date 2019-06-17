<template>
    <div class="container mt-5">
       <h3>菜单详情</h3>
       <hr>
       <div>
            您的菜单一共有{{ss.length}}道菜品<br>
            分别为:
          <ul v-for="(item,index) in ss" :key="index">
           <li>披萨的名字是：{{item.name}}--它的尺寸是：{{item.options[1].size}}寸---价格为：{{item.options[0].price}}元</li>
         </ul>  
       </div>
       <hr>
       <h3>购物详情</h3>
       <hr>
        <div v-if="this.jian>0">  
            您的购物车一共有{{this.jian}}道菜品{{this.qian}}元
       </div>
         <div v-else>  
            您的购物车空空如也！快去选购吧！
       </div>
        <div>
                 <span class="btn btn-warning" @click='go'>添加菜单</span>
                 <span class="btn btn-success" @click='go1'>前往选购</span>
        </div>

    </div>
    
</template>

<script>
import axios from 'axios'
    export default {
      name:'Details',
      data(){
          return {
            ss:[],
            jian:'',
            qian:''
          }
      },
        mounted(){
            axios.get('./lyh-menu.json')
            .then(res=>{
            //    console.log(res)
            for(let key in res.data){
                this.ss.push(res.data[key])
            }
            }) 
           this.jian = this.$route.params.TotalNum
            this.qian = this.$route.params.TotalPrice
            console.log(this.jian ,  this.qian)
        },
        methods:{
            go1(){
                this.$router.push('/menu')
            },
            go(){
                this.$router.push('/admin')
            }
        }
    }
</script>

<style scoped>
    *{
        list-style: none;
    }
</style>