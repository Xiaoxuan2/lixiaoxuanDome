<template>
    <div id="subject_Seven">
            <Title lxx="新增相册"></Title>
       
           <div class="showtext">
 <el-form ref="form" :model="form" label-width="80px">
 <el-form-item label="相册名称">
  
      <el-input  type="text" placeholder="长度小于32" readonly="readonly"></el-input >
    
  </el-form-item>
   <el-form-item label="封面" class="img_pad">
   <img src="../assets/20.png" alt="">
  <br>
    <el-button type="primary">上传图片</el-button>  <el-button type="primary">从图片库选择</el-button>&nbsp;&nbsp;<span style="color:silver;">片大小不能过500k.建设尺00-800px</span>
  
  </el-form-item>

  <el-form-item label="描述">
         <el-input v-model="form.name" placeholder="长度小于20,多个以;隔开" style="height:50px" readonly="readonly"></el-input>  
  </el-form-item>

 
   <el-form-item label="排序">
    <el-input v-model="form.name" placeholder="数字越大排名越前" readonly="readonly"></el-input>
  </el-form-item>
   

     <el-form-item>
         <el-button type="primary" @click="dialogVisible = true">保存</el-button>
           
             &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 
          <router-link to="/Seven">  <el-button  @click="dialogVisible = true">取消</el-button></router-link>
           
    </el-form-item>
</el-form>

             
         </div>

    </div>
</template>
<script>
import Title from "../components/Title";
export default {
    name:"Thirty",
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
#subject_Seven{
      background: white;
    width: 67%;
    margin: 101px 0px 0px 359px;
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
             padding: 46px 108px;
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