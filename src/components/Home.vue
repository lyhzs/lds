<template>
    <div>
      <!-- 轮播图导航 -->
       <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="../assets/1.jpg" alt="">
                  </div>
                <div class="swiper-slide">
                  <img src="../assets/2.jpg" alt="">
                  </div>
                <div class="swiper-slide">
                  <img src="../assets/3.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                  <img src="../assets/4.jpg" alt="">
                  </div>
                  <div class="swiper-slide">
                  <img src="../assets/5.jpg" alt="">
                  </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div> 
    <div class="mt-5 text-center newaa">
      <h3>最新动态</h3>
    </div>
    <div class="container ">
       <div class="row">
         <div class="col-7">
           <div class="tt">
                  <div class="swiper-container1">
                  <div class="swiper-wrapper" >
                 
                        <div class="swiper-slide">
                          
                        <img src="../assets/11.jpg" alt="">
                        </div> 
                        <div class="swiper-slide">
                        <img src="../assets/22.jpg" alt="">
                        </div>
                      <div class="swiper-slide">
                        <img src="../assets/33.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/44.jpg" alt="">
                        </div>
                        <div class="swiper-slide">
                        <img src="../assets/55.jpg" alt="">
                        </div> -->
                       
                  </div>
                  <div class="span">0{{id}}</div>  
                  <div class="swiper-pagination fyq">11</div>           
              </div>
          </div>         
           </div>
         <div class="col-5">
           <h4>2018年度披萨点评</h4>
              <ul class="oul">
                <li>“不畏强权”的美国学术界给政府跪了 中国学者怒了</li>
                <li>英媒：中国这几大科技领先全球 追赶速度惊人</li>
                <li>官员因一张卡被揪出主动投案 调查发现案件不简单</li>
                <li>奥地利“小鲜肉”总理下台背后 藏着一个惊天阴谋？</li>
                <li>不只是华为 中国科研领域有这些“终极浪漫”力量</li>
                <li>刘士余秦光荣等人接连主动投案 背后有三大动机</li>
                <li>女子因病离世 室友封锁消息仍与之共处一周</li>
              </ul>          
           </div>
       </div>
    </div>
      <div class="box3">
          <img src="../assets/banner.jpg" alt="" width="350px" height="350px" >
          <span class="btn btn-success" @click="from">let`s go shop</span>
      </div>


    <div class="his container">
      <h3>历史订单</h3>
        <His></His>
    </div>


    </div>
</template>
<script>
import Swiper from "swiper";
import His from "./about/History";
export default {
  name: "Home",
  data() {
    
    return {
      id:1,
      items: [
        { src: require("../assets/11.jpg"), index: 1 },
        { src: require("../assets/22.jpg"), index: 2 },
        { src: require("../assets/33.jpg"), index: 3 },
        { src: require("../assets/44.jpg"), index: 4 },
        { src: require("../assets/55.jpg"), index: 5 }
      ]
    };
  },
  components: {
    His
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      effect: "fade",
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
     var that=this
    var mySwiper = new Swiper(".swiper-container1", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      effect: "fade",
      autoplay: true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        currentClass: "my-pagination-current"
      },
            on: {
          slideChange: function () {
            console.log(this.activeIndex);
            var ind = this.activeIndex
            if(ind>5){
              ind=1
            }
            if(ind<1){
              ind=5
            }
            that.id =ind
          },
        }
    });
  },
  methods: {
    from() {
      this.$router.push("/menu");
    }
  }
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 600px;
}
.swiper-container img {
  width: 100%;
  height: 600px;
}
.swiper-container1 {
  width: 400px;
  height: 600px;
  position: relative;
  top: -30px;
  left: -30px;
}
.swiper-container1 img {
  width: 400px;
  height: 600px;
}

.tt {
  background-color: orange;
  width: 400px;
  height: 600px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
}
.newaa {
  padding: 50px 0 100px;
}
.fyq {
  position: relative;
  top: -120px;
  left: 410px;
}
.oul {
  list-style: none;
  width: 500px;
  height: 50px;
  position: relative;
  top: 52px;
  left: -43px;
}
.oul li {
  height: 60px;
  padding: 10px 0;
}
.box3 {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 120px;
  left: 150px;
  z-index: 333;
}
.box3 span {
  position: absolute;
  top: 280px;
  left: 110px;
}
.his {
  margin-top: 30px;
  text-align: center;
}
.span{position: relative;top: -150px;left:404px; z-index: 155;}
</style>