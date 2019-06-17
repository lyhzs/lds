import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({

    state:{
        mearr:[],
        currentUser:localStorage.getItem('currentUser'),//当前用户名，默认为空
        isLogin:localStorage.getItem('isLogin')//当前的登录状态，默认为false  
    },
    getters:{
        getmearr:state=>state.mearr,
        getCurrentUser:state=>state.currentUser,
        getIsLogin:state=>state.isLogin
    },
    mutations:{
        pushmearr(state,data){
            state.mearr.push(data)
        },
        addmearr(state,data){
            state.mearr.splice(data,1)
        },
        getmearr(state,data){
            state.mearr=data
        },
        UserStatus(state,data){
            if(data){//如果登录成功，传入data数据-用户名
              console.log(data)
              state.isLogin=true
              state.currentUser=data
              // 使用离线存储
              localStorage.setItem('isLogin',true)
              localStorage.setItem('currentUser',data)
            }else{
              state.isLogin=false
              state.currentUser=null
              localStorage.clear()
            }
          }
    },
    actions:{
        setUser({commit},user){
            commit('UserStatus',user)
          } 

    },
})
