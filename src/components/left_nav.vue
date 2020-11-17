<template>
  <div class="left_nav">
   <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
 
          <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-shop"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-6" @click="submit">•  商品类别</el-menu-item>
          <el-menu-item index="1-1" @click="submit1">•  商品品牌</el-menu-item>
          <el-menu-item index="1-2" @click="submit2">•  商品单位 </el-menu-item>
           <el-menu-item index="1-3" @click="submit4">•  商品编码设置</el-menu-item>
          <el-menu-item index="1-4" @click="submit3">•  商品档案</el-menu-item>
          <el-menu-item index="1-5"  @click="submit5">•  图片库管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
           <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-shopping-cart-full"></i>
          <span>采购</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"  @click="submit6">•  供应商管理</el-menu-item>
          <el-menu-item index="2-2" @click="submit7">•  采购单</el-menu-item>
          <el-menu-item index="2-3"  @click="submit8">•  采购退货单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
           <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-files"></i>
          <span>库存</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"   @click="submit9">•  商品入库</el-menu-item>
          <el-menu-item index="3-2" @click="submit10">•  库存调拨</el-menu-item>
          <el-menu-item index="3-3" @click="submit11">•  商品出库</el-menu-item>
          <el-menu-item index="3-4"  @click="submit12">•  库存盘点</el-menu-item>
          <el-menu-item index="3-5"  @click="submit13">•  商品库存</el-menu-item>
          <el-menu-item index="3-6" @click="submit14">•  商品库存明细</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
           <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-present"></i>
          <span>促销</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1" @click="submit15">•  订单促销</el-menu-item>
          <el-menu-item index="4-2" @click="submit16">•  商品促销</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
           <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>零售</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">•  终端销售单</el-menu-item>
          <el-menu-item index="5-2">•  终端退货单</el-menu-item>
          <el-menu-item index="5-3">•  商城销售单</el-menu-item>
          <el-menu-item index="5-4">•  终端销售交易明细</el-menu-item>
          <el-menu-item index="5-5">•  终端财务收银明细</el-menu-item>
          <el-menu-item index="5-6">•  终端销售交易汇总</el-menu-item>
          <el-menu-item index="5-7">•  终端财务收银汇总</el-menu-item>
          <el-menu-item index="5-8">•  终端财务退款汇总</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-check"></i>
          <span>会员</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">•  会员类别</el-menu-item>
          <el-menu-item index="6-2">•  会员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
  </div>
</template>
<script>
export default {
  name:"left_nav",
     data(){
   return {

   }
 },
      methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      ,
     submit:function(){
       this.$router.push({
         name: "Two", //跳转到指定name的页面
         
      });
      
     },
      submit1:function(){
      this.$router.push({
         name: "Three", //跳转到指定name的页面
        
      })
     },
      submit2:function(){
      this.$router.push({
         name: "Four", //跳转到指定name的页面
        
      })
     }
     ,
      submit3:function(){
      this.$router.push({
         name: "Five", //跳转到指定name的页面
        
      })
     },
      
      submit4:function(){
      this.$router.push({
         name: "Six", //跳转到指定name的页面
        
      })
     },
     submit5:function(){
      this.$router.push({
         name: "Seven", //跳转到指定name的页面
        
      })
     },
      submit6:function(){
      this.$router.push({
         name: "Eight", //跳转到指定name的页面
        
      })
     },
      submit7:function(){
      this.$router.push({
         name: "Nine", //跳转到指定name的页面
      })
     },
     submit8:function(){
      this.$router.push({
         name: "Ten", //跳转到指定name的页面
      })
     },
      submit9:function(){
      this.$router.push({
         name: "Eleven", //跳转到指定name的页面
      })
     },
     submit10:function(){
      this.$router.push({
         name: "Twelve", //跳转到指定name的页面Thirteen
      })
     },
      submit11:function(){
      this.$router.push({
         name: "Thirteen", //跳转到指定name的页面Thirteen
      })
     },
     submit12:function(){
      this.$router.push({
         name: "Fourteen", //跳转到指定name的页面Thirteen
      })
     },
      submit13:function(){
      this.$router.push({
         name: "Fifteen", //跳转到指定name的页面
      })
     },
      submit14:function(){
      this.$router.push({
         name: "Sixteen", //跳转到指定name的页面Seventeen
      })
     },
      submit15:function(){
      this.$router.push({
         name: "Seventeen", //跳转到指定name的页面Seventeen
      })
     },
     submit16:function(){
      this.$router.push({
         name: "Eighteen", //跳转到指定name的页面Seventeen
      })
     }
    }
  }

</script>
<style scoped>
.el-menu-item{
  padding-left: 28px!important;
}
   .left_nav{
     z-index: 99;
    position: fixed;
    left: 0;
    background-color: rgb(84, 92, 100);
    width: 170px;
    height: 762px;
    top: 44px;

}
.el-submenu .el-menu-item {
    height: 50px;
    line-height: 50px;
    padding: 0 45px;
    min-width: 0px !important;
}
.el-submenu__title i {
    color: white;
}
.el-col-12 {
    width: 100%;
}
</style>