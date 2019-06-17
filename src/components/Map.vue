<template>
    <div class="container">
        <div class="col-12 header">
            <p class="clearfix">
                <span style="float:left"> 当前城市：</span>
                <span>
                    <city-selector class="city" field="city" placeholder="请选择城市" :city-list="cityList" v-model="cityId">
                        </city-selector>
                        </span> 
            <p>餐厅关键字：<input type="text" placeholder="请输入地址或关键字" v-model="arrs"><span class="btn btn-success" @click="search()">查询</span></p>
        </div>
        <div class="row ">
            <div class="col-3  mt-3">
                <p>查询结果：</p>
                <div id="panel"></div>
            </div>
            <div class="col-9 mt-3">
                <div class="row">
                    <span>热门活动:</span>
                <div class="textBox">
                        <transition name="fade">    
                            <p class="text" :key="text.id">{{text.val}}</p>
                        </transition>
                    </div>
                </div>

            <div id="container11"></div> 

                
            </div>
        </div>

    </div>
</template>

 <script>
import { citySelector } from "vue2-city-selector";
import cityList from "china-city-data";
export default {
  name: "Map",
  data() {
    return {
      textArr: [
        "地图是假的",
        "搜索也是假的",
        "网站也是假的",
        "支付还是假的",
        "啦啦啦啦啦啦"
      ],
      number: 0,
      arrs: "",
      cityId: "",
      cityList
    };
  },
  mounted() {
    setInterval(() => {
      if (this.number == this.textArr.length - 1) {
        this.number = 0;
      } else {
        this.number += 1;
      }
    }, 1500);
    this.getMap();
  },
  methods: {
    getMap() {
      var that = this;
      var map = new AMap.Map("container11", {
        zoom: 13, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D" //使用3D视图
      });

      AMap.plugin(["AMap.ControlBar"], function() {
        // 添加 3D 罗盘控制
        map.addControl(new AMap.ControlBar());
      });
      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        that.placeSearch = new AMap.PlaceSearch({
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: "010", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        that.placeSearch.search("必胜客");
      });
    },
    search(value) {
      if (value) {
        this.placeSearch.search(value);
      } else {
        //关键字查询
        this.placeSearch.search(this.arrs);
      }
    }
  },
  watch: {
    cityId() {
      if (
        this.cityId == "110100" ||
        this.cityId == "120100" ||
        this.cityId == "310100"
      ) {
        var id = this.cityId.replace(/100$/, "000");
      } else {
        var id = this.cityId;
      }
      this.placeSearch.setCity(id);
      this.search("必胜客");
    }
  },

  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  }
};
</script>
<style scoped>
.header {
  background-color: black;
  height: 100px;
  color: white;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
}
.header button {
  list-style: none;
  margin-left: 5px;
  position: relative;
  top: -4px;
}
.header input {
  width: 168px;
  height: 33px;
  padding: 0px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  position: relative;
  top: 2px;
}
.textBox {
  color: black;
  font-size: 10px;
  width: 500px;
  height: 30px;
  overflow: hidden;
  line-height: 30px;
  position: relative;
}
.text {
  position: absolute;
  top: -5px;
  left: 10px;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}
.fade-enter {
  opacity: 0;
  transform: translateY(20px) scale(1);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.7);
}
#container11 {
  width: 820px;
  height: 480px;
}
#panel {
  position: absolute;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 40px;
  left: 0px;
  width: 280px;
}
.btn {
  /* height: 15px!important; */
  /* line-height: 15px; */
  margin-left: 10px;
  font-size: 6px;
}
.city {
  width: 168px;
  float: left;
  position: relative;
  left: 16px;
}
</style>    