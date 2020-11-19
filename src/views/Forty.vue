<template>
    <div class="subject_Nine">
           <Title lxx="新增会员类别"></Title>
         
         <div class="from">
             <el-form ref="form" :model="form" label-width="80px">
 
  <el-form-item label="编码">
         <el-input v-model="form.name" placeholder="01" readonly="readonly"></el-input> 
  </el-form-item>
  <el-form-item label="等级名称">
    <el-input v-model="form.name" placeholder="钻石会员" readonly="readonly"></el-input>
  </el-form-item>
     <el-form-item label="会员特价">
       <el-radio-group v-model="form.resource">
         <el-radio label="支持" checked="checked"></el-radio>
      <el-radio label="不支持"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="积分倍数">
  <el-select v-model="form.region" placeholder="1.2倍" style=" ">
      <el-option label="无积分" value="1"></el-option>
      <el-option label="1.0倍" value="2"></el-option>
      <el-option label="1.1倍" value="3"></el-option>
      <el-option label="1.2倍" value="4"></el-option>
      <el-option label="1.3倍" value="5"></el-option>
      <el-option label="1.4倍" value="6"></el-option>
      <el-option label="1.5倍" value="7"></el-option>
      <el-option label="1.6倍" value="8"></el-option>
      <el-option label="1.7倍" value="9"></el-option>
      <el-option label="1.8倍" value="10"></el-option>
      <el-option label="1.9倍" value="11"></el-option>
      <el-option label="2.9倍" value="12"></el-option>
    </el-select>
  </el-form-item>
 <el-form-item label="所需经验">
    <el-input v-model="form.name" readonly="readonly" placeholder="钻石会员" ></el-input>
    <span style="font-sizi:12px;color:silver;">
        每月1号统计最近12个月的经验值，重新计算用户等级

关于经验值：用户每消费1元就增加1经验值，后续考虑签到增加经验值等
    </span>
  </el-form-item>
  <el-form-item>
         <el-button type="primary" @click="dialogVisible = true">保存</el-button>
           
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          <router-link to="/TwentySeven">  <el-button  @click="dialogVisible = true">取消</el-button></router-link>
           
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