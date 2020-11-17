<template>
    <div class="subject_three">
         <Title lxx="商品编码设置"></Title>
        <div class="left">
                <p><span>编码规则:</span><span>前缀+顺序号</span></p>
                <p><span>*编码位数:</span>
                <select>
                    <option value=value>13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                </select>
                </p>
                <p>&nbsp;<span>编码前缀:</span>
 <p @click="shouShow">&nbsp; &nbsp; <el-radio v-model="radio" label="1">自定义</el-radio><input type="text" value="620" v-show="isshow"></p>
  <p @click="heideShow"><el-radio v-model="radio" label="2" id="aa" >使用类别前两位(勾选此项时，建档前要先选类别)</el-radio></p>

<p>
      <el-button type="primary">保存</el-button>
</p>
        </div>
         <div class="rigth">
              
                    <div class="titl">生成编码示列<i class="el-icon-caret-bottom"></i></div>
                    <div class="subjec">
                        <ul>
                            <li>
                                
                    <p style="opacity:0">第一个:</p>
                    <p>第一个:</p>
                     <p>第二个:</p>
                      <p>第三个:</p>
                      <p> ...</p>
                         <p>最后一个</p>
                    </li>
                    <li>
                        <p><strong>3位前缀</strong></p>
                          <p>620</p>
                          <p>620</p>
                          <p>620</p>
                            <p style="opacity:0">620</p>
                              <p>620</p>
                    </li>
                     <li>
                        <p><strong>5位顺序号</strong></p>
                          <p>00001</p>
                          <p>00002</p>
                          <p>00003</p>
                           <p style="opacity:0">00003</p>
                              <p>99999</p>
                    </li>
                  
        
                        </ul>
                    </div>
                    <div class="foot">
                        <strong>共可生成99999个商品</strong>
                    </div>
               
        </div>
    </div>
</template>
<script>
import Title from "../components/Title";
export default {
    name:"Six",
     components: {
        Title:Title
  },
    data() {
        return {
              radio: '1',
              isshow:true
        }
       
    },
     methods:{
           heideShow(){
            //    alert(1)
               this.isshow=false;
           } ,
           shouShow(){
                this.isshow=true;
           }        
        }
}
</script>
<style scoped>
    .subject_three{
    background: white;
    width: 59%;
    margin: 103px 0px 0px 415px;
    padding: 9px 0px;
    font-size: 12px;
    font-weight: 100;
    height: 300px;
  }
  .left{
        width: 39%;
    /* border: 1px solid; */
    float: left;
    padding: 20px 50px;
  }
  
   .left select{
       outline: none;
       width: 150px;
       border-color: silver;
   }
   .left p>span{
       padding: 0px 10px;
   }
   .left p{
        margin-bottom: 20px;
   }
  .rigth{
        width: 30%;
   border: 1px dashed silver;
    float: right;
        margin: 22px 33px;
  }
  #aa {
    font-size: 12px!important;
    padding-left: 10px;
}
.el-radio:nth-of-type(2){
        margin: 15px 68px;
}
.el-button--primary {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    padding: 7px 15px;
    margin: 12px 136px;
}
.rigth .titl{
 font-size: 12px;
    font-weight: 100;  border-bottom: 1px dashed silver;
text-align:center;    padding: 6px 0px;
}
.rigth .subjec{
     font-size: 12px;
    font-weight: 100; 
        height: 119px;
text-align:center;
}
.rigth .subjec ul{
    
}
.rigth .subjec ul li{
    float: left;    padding: 0px 13px;
}
.rigth .subjec ul li>p{
  height: 19px;
}
.rigth .foot{
     font-size: 12px;  border-top: 1px dashed silver;
text-align:center;    padding: 6px 0px;

}
.rigth::after{
    display: block;
    content: "";
    clear: both;
}
</style>