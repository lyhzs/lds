<template>
<div class="row">
    <div v-for="(item,index) in list" :key="index" class="card mt-3 mr-2 text-center" style="width: 32%;">
        <img class="card-img-top" :src="item.src">
        <div class="card-body">
            <h5 class="card-title text-primary">{{item.text}}*{{item.num}}</h5>
            <p class="card-text text-danger">已完成交易</p>
        </div>
    </div>
 </div>   
</template>

<script>
    export default {
       name:'History',
       data(){
           return{
               list:[
                    {src:'../../../static/images/1.jpg',text:'榴莲多多披萨',num:'3'},
                    {src:'../../../static/images/2.jpg',text:'北京潮鸭披萨',num:'1'},
                    {src:'../../../static/images/3.jpg',text:'海鲜至尊披萨',num:'5'}
               ]
           }
       }
    }
</script>

<style  scoped>

</style>