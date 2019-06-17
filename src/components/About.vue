<template>
    <div class="container">
         <div class="row mt-4">
            <div class="col-4">
                <router-link class="list-group-item list-group-item-danger mt-3 text-center" to="/activity">热门活动</router-link>
                <router-link class="list-group-item list-group-item-success mt-3 text-center" to="/contact">联系我们</router-link>
                <router-link class="list-group-item list-group-item-info mt-3 text-center" to="/history">历史订单</router-link>
                <router-link class="list-group-item list-group-item-warning mt-3 text-center" to="/delivery">快递信息</router-link>
            
            </div>
            <div class="col-8">
                 <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name:'About'  
    }
</script>

<style scoped>
</style>