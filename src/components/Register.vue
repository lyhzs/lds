<template>
<div class="text-center">
    
    <img width="250" src="../../static/images/1.jpg" alt="">
    <h3>注册</h3>
        <form>
        <div class="form-group">
            <input v-model="username" type="email" class="form-control" aria-describedby="emailHelp" placeholder="请输入您的邮箱">
        </div>
        <div class="form-group">
            <input v-model="password" type="password" class="form-control" placeholder="请输入您的密码">
        </div>
        <div class="form-group">
            <input v-model="password1" type="password" class="form-control" placeholder="请确认您的密码">
        </div>
        <button type="submit" class="btn btn-primary" style="width:30%" @click.prevent="sub">立即注册</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'
    export default {
      name:'Register',
      data(){
          return{
              username:'',
              password:'',
              password1:'',
          }
      } ,
       methods: {
             sub(){
                 var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                    if(reg.test(this.username)){
                      
        if(this.username==''){
                    alert('账号不能为空')
                }else if(this.password==''){
                    alert('密码不能为空')
                }else if(this.password!=this.password1){
                    alert('密码两次输入不一致')
                }else{
                    axios.get('./lyh-user.json').then(res=>{
                          const result = []
                          for(let key in res.data){
                            result.push(res.data[key])  
                          } 
                
                          const trueUser = result.filter((item)=>{
                            return item.username===this.username 
                          })
                          if(trueUser.length>0){
                            alert('当前用户名已存在') 
                          }else{
                               const formData={
                              username:this.username,
                              password:this.password 
                            }
                            axios.post('./lyh-user.json',formData)
                            .then(res=>{
                              alert('当前数据注册成功') 
                              console.log(res.data)
                    
                              this.$router.push('/login')
                            })  
                          }
                        })
                    } 

                 



                    }else{
                        alert("邮箱格式不正确");
                    }


                // if(this.username==''){
                //     alert('账号不能为空')
                // }else if(this.password==''){
                //     alert('密码不能为空')
                // }else if(this.password!=this.password1){
                //     alert('密码两次输入不一致')
                // }else{
                //     axios.get('./jsx-user.json').then(res=>{
                //           const result = []
                //           for(let key in res.data){
                //             result.push(res.data[key])  
                //           } 
                
                //           const trueUser = result.filter((item)=>{
                //             return item.username===this.username 
                //           })
                //           if(trueUser.length>0){
                //             alert('当前用户名已存在') 
                //           }else{
                //                const formData={
                //               username:this.username,
                //               password:this.password 
                //             }
                //             axios.post('./jsx-user.json',formData)
                //             .then(res=>{
                //               alert('当前数据注册成功') 
                //               console.log(res.data)
                    
                //               this.$router.push('/login')
                //             })  
                //           }
                //         })
                //     } 





                 } 
             }
  }
</script>

<style scoped>
.form-group{
    width: 30%;
    margin: 10px  auto;
    margin-bottom: 20px;
}
</style>    