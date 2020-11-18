<template>
    <div class="subject_Nine">
          <Title lxx="新增供应商"></Title>
              <div class="titl">
                <strong>基本信息</strong>
           </div>
         <div class="from">
             <el-form ref="form" :model="form" label-width="80px">

  <el-form-item label="供应商名">
         <el-input v-model="form.name" placeholder="请选择" readonly="readonly"></el-input> 
  </el-form-item>
  <el-form-item label="编码">
    <el-input v-model="form.name" placeholder="002" readonly="readonly" style=" background: silver"></el-input>
  </el-form-item>
  <el-form-item label="所属区域" style="width: 100%;">
  <el-select v-model="value1" multiple placeholder="广东省">
  </el-select>

  <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="广州市">
  </el-select>
   <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="天河区">
  </el-select>
  </el-form-item>
 
   <el-form-item label="详细地址">
    <el-input v-model="form.name"  placeholder="幸福村街18号" readonly="readonly"></el-input>
  </el-form-item>

</el-form> 
       </div>
        <div class="titl">
            <strong  style="font-size: 16px;">财务信息</strong>
           </div>  
           <div class="showtext">
 <el-form ref="form" :model="form" label-width="80px">
 <el-form-item label="开户名称">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
 <el-form-item label="开户银行">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
  <el-form-item label="银行账号">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
</el-form>
             
           </div>

              <div class="titl">
            <strong  style="font-size: 16px;">联系人信息</strong>
           </div>  
           <div class="showtext">
 <el-form ref="form" :model="form" label-width="80px">
 <el-form-item label="姓名">
  
      <el-input  type="text" readonly="readonly"></el-input >
      <el-radio-group v-model="form.resource">
      <el-radio label="男" checked="checked" style="    margin: 0px 7px;
    padding: 0px 1px;"></el-radio>
      <el-radio label="女"></el-radio>
    </el-radio-group>
    
  </el-form-item>
 <el-form-item label="职务">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
  <el-form-item label="手机">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
  <el-form-item label="电话">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
  <el-form-item label="邮箱">
  
      <el-input  type="text" readonly="readonly"></el-input >
    
  </el-form-item>
</el-form>
             
           </div>

                 <div class="titl">
            <strong  style="font-size: 16px;">其他信息</strong>
           </div>  
           <div class="showtext">
 <el-form ref="form" :model="form" label-width="80px">
 <el-form-item label="备注">
  
      <el-input  type="text" readonly="readonly"></el-input >
     
    
  </el-form-item>
 <el-form-item label="状态">
  
    <el-radio-group v-model="form.resource">
      <el-radio label="正常" checked="checked" style="    margin: 0px 7px;
    padding: 0px 1px;"></el-radio>
      <el-radio label="关闭"></el-radio>
    </el-radio-group>
    
  </el-form-item>
 
  <el-form-item>
  
      <el-button type="primary" @click="dialogVisible = true">保存</el-button>
           
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
 <router-link to="/Eight">
   <el-button  @click="dialogVisible = true">取消</el-button></router-link>
    
  </el-form-item>
</el-form>
             
           </div>
    </div>
</template>

  <script>
  
  import Title from "../components/Title";
  export default {
       name:"ThirtyOne",
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