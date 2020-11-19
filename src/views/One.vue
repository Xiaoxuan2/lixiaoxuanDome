<template>
  
  <div id="subject_one">
    <Title lxx="首页"></Title>
   
   <div class="one">
        <ul>
          <li><img src="../assets/1.png" alt=""></li>
          <li><p>欢迎您</p><p style="color:#242424;">十月大神</p></li>
          <li><p>商户ID</p><p>66668888</p></li>
          <li><p>有效期至</p><p>2018-05-18</p></li>
          <li><p>操作门店</p><p>产品大神(幸福店)</p></li>
        </ul>
   </div>
    <div class="two">
       <div class="left">
          <p>待处理事务</p>
          <ul style="margin: 0px 48px;">
            <li> 
              <p>
              <el-badge :value="4" class="item">
                                  采购待审核
                          </el-badge>
              </p>
              <p>
              <el-badge :value="1" class="item">
                                出货待审核
                          </el-badge>
              </p>
             <p>订单促销待审核</p>
            </li>
            <li>
              <p>采购退货待审核</p>
              <p>
              <el-badge :value="1" class="item">
                                调拨待审核
                          </el-badge>
              </p>
              <p>商品促销待审核</p>
            </li>
            <li>
                 <p>入库待审核</p>
                  <p>盘点待审核</p>
                   <p>— —</p>
            </li>
          </ul>
       </div>
       <div class="rigth left">
           <p>快捷菜单</p>  <span>添加/设置</span>
          <ul style="margin: 0px 48px;">
            <li> 
              <p>
           
                         商品档案
                    
              </p>
              <p>
            
                           终端销售交易明细
                     
              </p>
             <p>终端财务收银汇总</p>
            </li>
            <li>
              <p>商品库存</p>
              <p>
            
               终端财务收银明细
                       
              </p>
              <p>— —</p>
            </li>
            <li>
                 <p>商品库存明细</p>
                  <p>   终端销售交易明细</p>
                   <p>— —</p>
            </li>
          </ul>
       </div>
   </div>
        <div class="three">
            <p class="p">门店数据汇总</p>
            <ul style="margin: 0px 48px;">
            <li>
              <p><img src="../assets/2.png" alt=""></p>
              <p><img src="../assets/3.png" alt=""></p>  
            </li>
              <li><p>今日销售总额</p><p>人民币:68978.00</p><p>今日销售总额<br>人民币:68978.00</p></li>
               <li>
              <p><img src="../assets/4.png" alt=""></p>
              <p><img src="../assets/5.png" alt=""></p>  
            </li>
              <li><p>今日毛利总额</p><p>人民币:28978.00</p><p>今日销售订单<br>数量:579</p></li>
               <li>
              <p><img src="../assets/6.png" alt=""></p>
              <p><img src="../assets/7.png" alt=""></p>  
            </li>
              <li><p>今日销售总额</p><p>人民币:68978.00</p><p>今日销售总额<br>人民币:68978.00</p></li>
               <li>
              <p><img src="../assets/8.png" alt=""></p>
              <p><img src="../assets/9.png" alt=""></p>  
            </li>
              <li><p>今日销售总额</p><p>人民币:68978.00</p><p>今日销售总额<br>人民币:68978.00</p></li>
               <li>
              <p><img src="../assets/10.png" alt=""></p>
              <p><img src="../assets/11.png" alt=""></p>  
            </li>
              <li><p>今日销售总额</p><p>人民币:68978.00</p><p>今日销售总额<br>人民币:68978.00</p></li>
            </ul>
      </div>
   <div class="seven">
       <div class="seven_left">
          <div>
            <ul>
             <li>采购单汇总</li>
             <li>近7天</li>
             <li>近30天</li>
             <li>自定义</li>
             <li>开始日期~结束日期 <i class="el-icon-date"></i></li>
            </ul>
          </div>
          <div>
            <img src="../assets/12.png" alt="">
          </div>
       </div>
       <div class="seven_rigth seven_left">
 <div>
            <ul>
             <li>退款单汇总</li>
             <li>近7天</li>
             <li>近30天</li>
             <li>自定义</li>
             <li>开始日期~结束日期 <i class="el-icon-date"></i></li>
            </ul>
          </div>
          <div>
            <img src="../assets/13.png" alt="">
          </div>

       </div>
   </div>
   <div class="four">
     <div>退款单汇总</div>
        <div>
                    <ul>
                    <li>近7天</li>
                    <li>近30天</li>
                    <li>自定义</li>
                    <li>开始日期~结束日期 <i class="el-icon-date"></i></li>
                    </ul>
                  </div>
        <div class="sb">
          <div class="sb_left">
                
                    <p>本周订单统计【终端销售】</p>
                    <p>6899笔</p>
                    <p> <i class=" el-icon-caret-bottom">8%</i>同比上周</p>
            
                    <p style="margin-top: 21px;">本周订单统计【商城销售】</p>
                    <p>3167笔</p>
                    <p><i class="el-icon-caret-top">4.8%</i>同比上周</p>
                  
          </div>
            <div class="sb_right">
              <img src="../assets/14.png" alt="">
          </div>
        </div>
   </div>
   <div class="five four">
   <div>销售金额统计</div>
        <div>
                    <ul>
                  
                    <li>近7天</li>
                    <li>近30天</li>
                    <li>自定义</li>
                    <li>开始日期~结束日期 <i class="el-icon-date"></i></li>
                    </ul>
                  </div>
        <div class="sb">
          <div class="sb_left">
                
                    <p>本周收入统计【终端销售收入】</p>
                    <p>19822元</p>
                    <p> <i class=" el-icon-caret-bottom">6.9%</i>同比上周</p>
            
                    <p style="margin-top: 21px;">本周收入统计【商城销售收入】</p>
                    <p>23017元</p>
                    <p><i class="el-icon-caret-top">2.1%</i>同比上周</p>
                  
          </div>
            <div class="sb_right">
              <img src="../assets/15.png" alt="">
          </div>
        </div>
   </div>
  </div>

  
</template>

<script>

import Title from "../components/Title";
export default {
  name: "One",
components: {
        Title:Title
  }
};
</script>
<style scoped>
#subject_one{
        background: white;
    /* height: 699px; */
    width: 59%;
    margin: 103px 0px 0px 415px;
    padding: 9px 0px;

}
 .one{
   border: 1px solid silver;
   width: 90%;
   height: 100px;
   margin:13px auto;;
   color: #666666;
 }
 .one ul{
    margin: 24px 107px;
 }
 .one ul li{
   float: left;
   font-size: 12px;
   padding: 0px 10px;
 }
 
   .one ul li:nth-of-type(2){
        padding: 9px 0px 0px 0px;
  }
  .one ul li:nth-of-type(3){
          margin: 0px 0px 0px 71px;
  }
   .one ul li:nth-of-type(3),.one ul li:nth-of-type(4),.one ul li:nth-of-type(5){
          padding: 10px 0px 0px 59px;
  }
  .one ul li>img{
      width: 80%;
 }
  .two{
   width: 90%;
   height: 150px;
   margin:13px auto;
 }
  .seven{
   width: 90%;
   height: 204px;
   margin:13px auto;
 }
 .three{
    width: 90%;
   height: 180px;
   margin:13px auto;
    border: 1px solid silver;
 }
   .three .p{
    font-weight: bold;
    margin: 11px 40px;
    font-size: 13px;

   }
  .three p{
    font-size: 12px;    font-weight: 100;
  }
 .three ul li{
   float: left;
    font-size: 12px;
        padding: 0px 7px;
 }
  .three ul li p>img{
    width: 49%;
        position: relative;
    left: 26px;
  }
   .three ul li p:nth-of-type(2)>img, .three ul li p:nth-of-type(3){
   
       padding: 51px 0px;
  }
 .four{
  width: 90%;
   height:286px;
   margin:34px  auto;
    border: 1px solid silver;
 }
 .four div ul li{
   float: left;
   font-size: 12px;
   font-weight: 100;    padding: 0px 5px;    margin: 12px 0px;
 
 }
 .four div:nth-of-type(1){
   float: left;font-weight: bold;  font-size: 12px;    padding: 12px 30px;
 }
  .four div:nth-of-type(2){
   float: right;    padding: 4px 26px 0px 0px;
 }

 /* .four div ul li:nth-of-type(1){
font-weight: bold;    padding: 0px 27px;
 } */
  .four div ul li:nth-of-type(2){
  color: blue;
 }
  .four div ul li:nth-of-type(4){
  border: 1px solid silver;
  border-radius: 5px;    padding: 3px 4px; margin: 7px 2px;
 }
 .sb{
    width: 100%;
    height: 79%;
    margin: 46px 0px;
 }
 .sb .sb_left{
    font-weight: 100!important;
    font-size: 12px;
 }
 .sb .sb_left p:nth-of-type(2),.sb .sb_left p:nth-of-type(5){
     font-size: 13px;
      font-weight: 500!important;
 }
 .sb .sb_left p:nth-of-type(3)>i{
     font-size: 12px;
     font-weight: 100;
     color: red;
 }
 .sb .sb_left p:nth-of-type(6)>i{
     font-size: 12px;
     font-weight: 100;
     color: #55BB55;
 }
 .sb .sb_left p{
    line-height: 31px;
 }
 .sb .sb_right{
   padding: 0px!important;
    height: 97%;
    width: 71%;
 }
 .sb .sb_right>img{
      height: 100%;
    width: 100%;
 }
 .seven_left div ul li{
   float: left;
   font-size: 12px;
   font-weight: 100;    padding: 0px 5px;    margin: 12px 0px;
 }
  .seven_left div ul li:nth-of-type(1){
font-weight: bold;    padding: 0px 27px;
 }
  .seven_left div ul li:nth-of-type(3){
  color: blue;
 }
  .seven_left div ul li:nth-of-type(5){
  border: 1px solid silver;
  border-radius: 5px;    padding: 3px 4px; margin: 7px 2px;
 }
 .seven_left div>img{
       width: 100%;
        height: 164px;
 }
  .five{
     width: 90%;
    height:286px;
   margin:13px auto;
    border: 1px solid silver;
 }
 .two .left{
    width: 49%;
    height: 100%;
    border: 1px solid silver;
    float: left;
 }
  
 .two .left ul>li{
   float: left;
   padding: 2px 0px 0px 37px;
    font-size: 12px;
    line-height: 30px;  font-weight: 100;
 }
 .two .left ul>li>p:hover{
   color: blue;
   cursor: pointer;
 }
  .two .left>p {
    font-weight: bold;
         margin: 14px 0px 0px 35px;
             font-size: 13px;  
}
.two .rigth>p{
    font-weight: bold;
    margin: 14px 0px 0px 27px;
  }
   .two .rigth ul li{
         padding: 2px 0px 0px 30px;
    }
 .two .rigth{
    width: 49%;
    height: 100%;
    border: 1px solid silver;
    float: right;
 }
 .rigth span{
      float: right;
    color: blue;
    font-size: 12px;
    margin: -20px 19px 0px 0px;
   
 }
 .seven .seven_left{
    width: 49%;
    height: 100%;
    border: 1px solid silver;
    float: left;
 }
  .seven .seven_rigth{
   width: 49%;
    height: 100%;
    border: 1px solid silver;
    float: right;
 }
.el-badge__content.is-fixed {
    position: absolute;
    top: 10px;
    right: -2px!important;
    transform: translateY(-47%) translateX(92%)!important;
}
::v-deep .el-badge__content {
       background-color: #F56C6C;
    border-radius: 10px;
    color: #FFF;
    display: inline-block;
    font-size: 12px;
    height: 15px;
    line-height: 15px;
    padding: 0px 5px;
    text-align: center;
    white-space: nowrap;
    /* left: 29px; */
    border: 1px solid #FFF;
}
</style>