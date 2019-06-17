<template>
   <div class="text-center">
    
    <img width="250" src="../../static/images/1.jpg" alt="">
    <h3>登录</h3>
        <form>
        <div class="form-group">
            <input v-model="username" type="email" class="form-control" aria-describedby="emailHelp" placeholder="请输入您的账号" @blur="ss">
            <span class="login login1" v-if="flag" style="color:red;text-align: left">*账号不能为空</span>
        </div>
        <div class="form-group">
            <input v-model="password" type="password" class="form-control" placeholder="请输入您的密码" @blur="ss1">
             <span class="login login2" v-if="flag1" style="color:red;text-align: left">*密码不能为空</span>
        </div>
        <button type="submit" class="btn btn-primary" style="width:30%" @click.prevent="sub">登录</button>
    </form>
</div>
</template>

<script>
   import axios from 'axios'
    export default {
      name:'Login',
      data(){
          return{
              username:'',
              password:'',
              flag:false,
              flag1:false,
          }
      } ,
     
       methods: {
             sub(){
                if(this.username==''){
                   return this.flag=true
                }else if(this.password==''){
                    return this.flag1=true
                }else{
                 axios.get('./lyh-user.json').then(res=>{
                   var result=[]
                   for(let key in res.data){
                       result.push(res.data[key])
                   }
                var xin = result.filter((item)=>{
                    return item.username==this.username&&item.password==this.password
                })

                if(xin.length>0){
                    alert('登录成功')
                    this.$store.dispatch('setUser',xin[0].username)
                     this.$router.push('/')
                }else(
                    alert('账号或密码错误')
                    
                )
                })
                }
          },
          ss(){
              setTimeout(()=>{this.flag=false},1000)
          },
          ss1(){
              setTimeout(()=>{this.flag1=false},1000)
          }
     }
    }
</script>

<style scoped>
.form-group{
    width: 30%;
    margin: 10px auto;
    margin-bottom: 20px;
    position: relative;
}
.login{
    position: absolute;
}
.login1{
      top: 7px;
    left: 360px;
}
.login2{
      top: 7px;
    left: 360px;
}
</style>
