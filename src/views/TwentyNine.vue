<template>
    <div class="subject_Nine">
           <Title lxx="新增"></Title>
           <div class="titl">
                <strong>基本配置</strong>
           </div>
         <div class="from">
             <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="商品名称">
    <el-select v-model="form.region" placeholder="请选择" style="">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="商品编码">
         <el-input v-model="form.name" placeholder="请选择商品条码" readonly="readonly"></el-input>   <el-checkbox label="自动编码" name="type"></el-checkbox>
  </el-form-item>
  <el-form-item label="商品名称">
    <el-input v-model="form.name" placeholder="长度小于64" readonly="readonly"></el-input>
  </el-form-item>
  <el-form-item label="所属品牌">
  <el-select v-model="form.region" placeholder="未指定" style=" ">
      <el-option label="清风" value="1"></el-option>
      <el-option label="心相印" value="2"></el-option>
       <el-option label="清风" value="3"></el-option>
      <el-option label="心相印" value="4"></el-option>
       <el-option label="清风" value="5"></el-option>
      <el-option label="心相印" value="6"></el-option>
       <el-option label="清风" value="7"></el-option>
      <el-option label="心相印" value="8"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="单位">
  <el-select v-model="form.region" placeholder="未指定" style="">
      <el-option label="个" value="1"></el-option>
      <el-option label="盒" value="2"></el-option>
       <el-option label="件" value="3"></el-option>
      <el-option label="批" value="4"></el-option>
       <el-option label="箱" value="5"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="零售价">
    <el-input v-model="form.name" readonly="readonly"></el-input>
  </el-form-item>
   <el-form-item label="最低售价" >
    <el-input v-model="form.name" readonly="readonly"></el-input>
  </el-form-item>
   <el-form-item label="市场导价">
    <el-input v-model="form.name" readonly="readonly"></el-input>
  </el-form-item>
    <el-form-item label="成本参价">
    <el-input v-model="form.name" readonly="readonly"></el-input>
  </el-form-item>
    <el-form-item label="助记码">
    <el-input v-model="form.name" readonly="readonly"></el-input>
  </el-form-item>
    <el-form-item label="会员特价">
    <el-input v-model="form.name" readonly="readonly"></el-input>
  </el-form-item>
  <el-form-item label="积分赠送">
    <el-radio-group v-model="form.resource">
      <el-radio label="赠送"></el-radio>
      <el-radio label="不赠送"></el-radio>
    </el-radio-group>
  </el-form-item>
</el-form>
             
       </div>
        <div class="titl">
             <p><el-checkbox v-model="checked"><strong  @click="Show" style="font-size: 16px;">商城设置</strong></el-checkbox></p> 
           </div>  
           <div class="showtext" v-show="isshow">
 <el-form ref="form" :model="form" label-width="80px">
 <el-form-item label="属性">
  
      <el-input  type="text" placeholder="属性一" readonly="readonly"></el-input >&nbsp;&nbsp;:&nbsp;&nbsp;<el-input  placeholder="属性值" readonly="readonly"></el-input > &nbsp;&nbsp;&nbsp;<el-button>删除</el-button>
    
  </el-form-item>
  <el-form-item>
  
      <el-input  type="text" placeholder="属性一" readonly="readonly"></el-input >&nbsp;&nbsp;:&nbsp;&nbsp;<el-input  placeholder="属性值" readonly="readonly"></el-input > &nbsp;&nbsp;&nbsp;<el-button>添加</el-button>
    
  </el-form-item>
  <el-form-item label="搜索关键">
         <el-input v-model="form.name" placeholder="长度小于20,多个以;隔开" readonly="readonly"></el-input>  
  </el-form-item>
  <el-form-item label="商品名称">
  <el-button>新品上架</el-button><el-button>热卖推荐按</el-button><el-button>清仓优惠</el-button>
  </el-form-item>
  <el-form-item label="所属品牌">
       <el-radio-group v-model="form.resource">
   
         <el-radio label="卖家承受"></el-radio>
      <el-radio label="卖家包邮"></el-radio>
      
    </el-radio-group>
   <el-select v-model="form.region" placeholder="请选择运费模板" style="width: 100%;">
      <el-option label="双十一运费模板" value="1"></el-option>
      <el-option label="双十一运费模板" value="2"></el-option>
       <el-option label="双十一运费模板" value="3"></el-option>
      <el-option label="双十一运费模板" value="4"></el-option>
       <el-option label="双十一运费模板" value="5"></el-option>
      <el-option label="双十一运费模板" value="6"></el-option>
       <el-option label="双十一运费模板" value="7"></el-option>
      <el-option label="双十一运费模板" value="8"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="排序">
    <el-input v-model="form.name" placeholder="数字越大排名越前" readonly="readonly"></el-input>
  </el-form-item>
   
 <el-form-item label="商品图片" class="img_pad">
   <img src="../assets/18.png" alt=""> &nbsp;&nbsp;<img src="../assets/18.png" alt="">&nbsp;&nbsp; <img src="../assets/18.png" alt=""> &nbsp;&nbsp;<img src="../assets/18.png" alt="">&nbsp;&nbsp; <img src="../assets/18.png" alt="">
  <br>
    <el-button type="primary">上传图片</el-button>  <el-button type="primary">从图片库选择</el-button>&nbsp;&nbsp;<span style="color:silver;">片大小不能过500k.建设尺00-800px</span>
  
  </el-form-item>
     <el-form-item>
         <el-button type="primary" @click="dialogVisible = true">保存</el-button>
           
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          <router-link to="/Five">  <el-button  @click="dialogVisible = true">取消</el-button></router-link>
           
    </el-form-item>
</el-form>
             
           </div>
    </div>
</template>
<script>
import Title from "../components/Title";
export default {
  name:"TwentyNine",
   components: {
        Title:Title
  },
  data() {
      return {
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        isshow:false
      } 
  },
   methods: {
      onSubmit() {
        console.log('submit!');
      },
      Show:function(){
          this.isshow=!this.isshow;
      }

    }
}
</script>
<style scoped>
    .subject_Nine{
            background: white;
    /* height: 499px; */
    width: 73%;
    margin: 103px 0px 0px 325px;
    padding: 9px 0px;
  }
  .titl{
       border-bottom: 1px solid silver;
        margin: 11px 32px;
        padding: 15px 0px;
  }
  .from{
          padding: 0px 26px;
  }
   ::v-deep .el-input{
            width: 216px;
   }
  
    ::v-deep label{
           width: 100px;
    }
    .showtext{
           padding: 0px 26px;
    }
   ::v-deep .img_pad>img{
        padding: 0px 10px;
    }
     ::v-deep .el-select-dropdown,.el-popper{
             width: 212.59px;
    }
      ::v-deep .el-scrollbar{
            width: 212.59px;
    }
     ::v-deep .el-select-dropdown__wrap,.el-scrollbar__wrap{
            width: 212.59px;
    }
       ::v-deep .el-scrollbar__view,.el-select-dropdown__list{
         width: 212.59px;
        
    }
</style>