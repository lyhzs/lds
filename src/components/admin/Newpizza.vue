<template>
<div class="mt-5">
       <h3 class="text-center">添加新的pizza</h3>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">商品名称</label>
      <input type="text" v-model="newpizza.name" class="form-control" id="inputEmail4" placeholder="请输入商品名称">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">商品描述</label>
      <input type="text" v-model="newpizza.description" class="form-control" id="inputPassword4" placeholder="请输入商品描述">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputState1">商品尺寸</label>
      <select id="inputState1" v-model="newpizza.options[0].size" class="form-control">
        <option selected>8</option>
        <option>10</option>
        <option>12</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputZip1">商品价格</label>
      <input type="text" v-model="newpizza.options[0].price" class="form-control" id="inputZip1">
    </div>
  </div>

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputState2">商品尺寸</label>
      <select id="inputState2" v-model="newpizza.options[1].size"  class="form-control">
        <option selected>8</option>
        <option>10</option>
        <option>12</option>
        <option>14</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputZip2">商品价格</label>
      <input type="text" v-model="newpizza.options[1].price" class="form-control" id="inputZip2">
    </div>
  </div>
  <button type="submit" class="btn btn-primary btn-block" @click.prevent="addpizza">添加PIZZA</button>
</form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
      name:'Newpizza',
      data(){
        return{
          newpizza:{
            name:'',
            description:'',
            options:[
             {size:'',price:''},
             {size:'',price:''}   
            ]
          }  
        }  
      },
      methods:{
        addpizza(){
          var ss= {
            name:this.newpizza.name,
            description:this.newpizza.description,
            options:[
             {size:this.newpizza.options[0].size,price:this.newpizza.options[0].price},
             {size:this.newpizza.options[1].size,price:this.newpizza.options[1].price}   
            ]
          }
        //   console.log(this.newpizza) 
        // 非空判断
        // if(this.newpizza.name==''){return}
        // if(this.newpizza.description==''){return}
        // if(this.newpizza.options[0].size==''){return}
        // if(this.newpizza.options[0].price==''){return}
        // if(this.newpizza.options[1].size==''){return}
        // if(this.newpizza.options[1].price==''){return}
    
          axios.post('./lyh-menu.json',ss)
          .then(res=>{
            ss.id=res.data.id
            this.$store.commit('pushmearr',ss)
            // location.reload()  
          })  
        }  
      }  
    }
</script>

<style  scoped>

</style>