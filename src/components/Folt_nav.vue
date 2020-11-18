<template>
  <div class="Folt_nav">
    <el-row class="header">
      <el-col :span="24">
        <el-col :span="2" :offset="1" class="logo"></el-col>
     <router-link to="/One"><el-col :span="2" class="title">内容管理</el-col></router-link>  
        <el-col :span="1" class="title">系统设置</el-col>
        <el-button class="shanghu" @click.native="sh">商户账户管理</el-button>
        <div @mouseenter="mouseru" @mouseleave="mousechu">
          <el-button class="shanghu1">十月大神</el-button>
          <div class="hides" v-show="showhide">
            <el-row class="top">
              <el-col :span="4" :offset="1">
                <h5>账户信息</h5>
              </el-col>
              <el-col :span="4" :offset="10">
                <el-link type="danger" @click.native="tz">修改密码</el-link>
              </el-col>
            </el-row>
            <p>登录用户:18912345678</p>
            <p>上次登录:2018-12-2818:00:O0</p>
            <p>登录地区:广东省广州市(IP:183.18.18.31)</p>
          </div>
        </div>
        <div @mouseenter="mouseru1" @mouseleave="mousechu1">
          <el-badge :value="3" class="item">
            <i class="el-icon-message-solid"  ></i>
          </el-badge>
          <div class="shows" v-show="hideshow">
              <ul>
                  <li>您有3笔外卖订单未接单<br><span>2018-12-28 09:18:00</span></li>
                  <li>您有1笔上门服务订单未接单<br><span>2018-12-28 09:18:00</span></li>
                  <li>您有5笔订单待发货<br><span>2018-04-28 09:18:00</span></li>
              </ul>
          </div>
        </div>

        <i class="el-icon-s-home"></i>
        <i class="el-icon-switch-button"></i>
      </el-col>
    </el-row>
  </div>
  
</template>
<script>
export default {
  name: "houtai",
  data() {
    return {
      showhide: false,
      hideshow:false
    };
  },
  methods: {
    mouseru: function () {
      this.showhide = true;
    },
    mousechu: function () {
      this.showhide = false;
    },
     mouseru1: function () {
      this.hideshow = true;
    },
    mousechu1: function () {
      this.hideshow = false;
    },
    tz(){
      this.$router.push({
        path:"/xiugai"
      })
    },
    sh(){
      this.$router.push({
        path:"/shanghu"
      })
    } 
  },
};
</script>
<style scoped>
    .Folt_nav{
     background: blue;
    width: 100%;
    height: 44px;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    }
    el-icon-message-solid {
  color: white;
  font-size: 32px;
  position: absolute;
}
.shows{
     background: white!important;
  position: absolute;
    top: 45px;
    width: 250px;
    line-height: 2;
    right: 74px;
    padding-left: 44px;
    box-shadow: 0 0 4px black;
}
.shows ul li span{
    color: gray;
    font-size: 14px;
}

.el-icon-s-home {
  color: white;
  font-size: 22px;
  position: absolute;
  right: 120px;
  top: 13px;
}
.el-icon-switch-button {
  color: white;
  font-size: 22px;
  position: absolute;
  right: 56px;
  top: 13px;
}

.logo {
  background: url("../assets/16.png") no-repeat;
      width: 108px;
    height: 25px;
  margin-top: 12px;
  background-size: 100% 100%;
}
.item{
    position: absolute;
        right: 194px;
    top: 18px;
}
.title {
  border-width: 0px;
  font-family: "微软雅黑 Regular", "微软雅黑";
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  margin: 21px 0 0 0;
}
.shanghu {
  background: transparent;
  border: 0;
  color: white;
  position: absolute;
     right: 353px;
    height: 53px;
}
.shanghu1 {
  background: transparent;
  border: 0;
  color: white;
  position: absolute;
     right: 253px;
    height: 53px;
  cursor: auto;
}
.el-button:focus,
.el-button:hover {
  color: white;
  border-color: none;
  background-color: rgba(255, 255, 255, 0.2);
}
.top {
  margin: 10px 0;
  background: rgb(254, 251, 239);
  height: 44px;
}
.hides {
    background: white!important;
  width: 371px;
  height: 207px;
      margin-top: 44px;
  right: 141px;
  position: absolute;
  box-shadow: 0 0 2px black;
}
.hides p {
  font-size: 13px;
  margin-left: 20px;
  line-height: 40px;
}
.hides p:hover {
  color: rgb(255, 136, 0);
}
h5 {
  display: inline-block;
}
</style>