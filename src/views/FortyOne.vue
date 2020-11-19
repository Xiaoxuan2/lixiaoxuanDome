<template>
    <div class="subject_Nine">
           <Title lxx="新增会员"></Title>
         
         <div class="from">
             <el-form ref="form" :model="form" label-width="80px">
 
  <el-form-item label="会员编码">
         <el-input v-model="form.name" placeholder="888 888 888" readonly="readonly" :disabled="true"></el-input> 
  </el-form-item>
  <el-form-item label="会员名称">
    <el-input v-model="form.name" placeholder="十月大神" readonly="readonly"></el-input>
  </el-form-item>
   <el-form-item label="会员等级" style="border: none">
    <el-input v-model="form.name" placeholder="注册会员" readonly="readonly" style="border: none"></el-input>
  </el-form-item>
   
  <el-form-item label="发卡门店">
  <el-select v-model="form.region" placeholder="产品大神(幸福店)" :disabled="true">
      <el-option label="无积分" value="1"></el-option>
      
    
    </el-select>
  </el-form-item>
   <el-form-item label="性别">
       <el-radio-group v-model="form.resource">
         <el-radio label="男" checked="checked"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="生日">
      <div class="block">
 
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>

  </el-form-item>
   <el-form-item label="邮箱:"> 
            &nbsp;&nbsp;---
   </el-form-item>
   <el-form-item label="经验值:"> 
            &nbsp;&nbsp;---
   </el-form-item>
   <el-form-item label="可用积分:"> 
            &nbsp;&nbsp;---
   </el-form-item>
   <el-form-item label="账户余额:"> 
            &nbsp;&nbsp;---
   </el-form-item>
   <el-form-item label="消费金额:"> 
            &nbsp;&nbsp;---
   </el-form-item>
   <el-form-item label="消费次数:"> 
            &nbsp;&nbsp;---
   </el-form-item>
    <el-form-item label="消费日期:"> 
            &nbsp;&nbsp;---
   </el-form-item>
    <el-form-item label="注册来源:"> 
            &nbsp;&nbsp;---
   </el-form-item>
    <el-form-item label="邀请码:"> 
            &nbsp;&nbsp;RH4O68
   </el-form-item>
   <el-form-item label="注册时间:"> 
            &nbsp;&nbsp;---
   </el-form-item>
   <el-form-item label="个人邀请:"> 
            &nbsp;&nbsp;---
   </el-form-item>
  <el-form-item>
         <el-button type="primary" @click="dialogVisible = true">保存</el-button>
           
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          <router-link to="/TwentyEight">  <el-button  @click="dialogVisible = true">取消</el-button></router-link>
           
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
           pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
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