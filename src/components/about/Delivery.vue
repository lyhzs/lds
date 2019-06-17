<template>
    <div class="row">
     <div v-for="(item,index) in list" :key="index" class="card mt-3 mr-2 text-center" style="width: 15rem;">
        <img class="card-img-top" :src="item.src">
        <div class="card-body">
            <h5 class="card-title text-primary">{{item.text}}</h5>
            <p class="card-text text-success">{{item.text1}}</p>
             <a href="#" class="btn btn-primary">前往查询</a>
        </div>
    </div>
</div>
</template>

<script>
    export default {
       name:'Delivery',
       data(){
           return{
               list:[
                    {src:'../../../static/images/4.jpg',text:'顺丰速递',text1:'包裹离你越来越近了'},
                    {src:'../../../static/images/55.jpg',text:'百世快递',text1:'包裹离你越来越近了'},
                    {src:'../../../static/images/66.jpg',text:'圆通速递',text1:'包裹离你越来越近了'}
               ]
           }
       } 
    }
</script>

<style  scoped>

</style>