<template>
<div class="row">
     <div v-for="(item,index) in list" :key="index" class="card mt-3 mr-2 text-center" style="width: 15rem;">
        <img class="card-img-top" :src="item.src">
        <div class="card-body">
            <h5 class="card-title text-primary">{{item.text}}</h5>
            <p class="card-text text-danger">{{item.text1}}</p>
             <a href="#" class="btn btn-primary">前往参加</a>
        </div>
    </div>
</div>
   
</template>

<script>
    export default {
       name:'Activity',
        data(){
           return{
               list:[
                    {src:'../../../static/images/1.jpg',text:'榴莲pizza大降价',text1:'没事吃榴莲，你疯了吧!在下佩服！'},
                    {src:'../../../static/images/2.jpg',text:'吃夏威夷披萨，有机会赢取海底一日游！',text1:'只要你敢来，包送到海底'},
                    {src:'../../../static/images/3.jpg',text:'特价再买一份',text1:'一份80，两份150，三份200！'}
               ]
           }
       } 
    }
</script>

<style  scoped>

</style>