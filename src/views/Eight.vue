<template>
    <div id="subject_Eigth">
        <Title lxx="供应商管理"></Title>
         <div style="margin-top: 15px; float:left">
  <el-input placeholder="请输入内容"
   class="input-with-select"
   style="width: 60%;padding: 10px 35px;">
    <el-button slot="append" icon="el-icon-search" @click="openFullScreen2"></el-button>
  </el-input>
</div>
  <div class="rgth">
    <el-row>
       <el-button>导出</el-button>
   <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

<el-dialog title="商品类别-新增/编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="上级类别" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="*编号" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="*名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="排序" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
  </el-row>
  </div>
    <el-table
    :data="tableData"
    border
    header-cell-style=" background-color:#F2F2F2;padding: 12px 0px"
     cell-style="padding: 0px 0px;  text-align: center;"
    style="    width: 91.6%;padding: 0px 0px"
    >
    <el-table-column
      prop="date"
      align="center"
      label="编码"
      width="60"
      >
    </el-table-column>
    <el-table-column
     align="center"
      prop="name"
      label="供应商名称"
      width="90">
    </el-table-column>
    <el-table-column
     align="center"
      prop="name1"
      label="联系人"
      width="80">
     
    </el-table-column>
    <el-table-column
     align="center"
      prop="city"
      label="联系电话"
      width="110">
    </el-table-column>
    <el-table-column
     align="center"
      prop="zip"
      label="归属区域"
      width="150">
    </el-table-column>
      <el-table-column
     align="center"
      prop="tz"
      label="详细地址"
      width="150">
    </el-table-column>
     <el-table-column
     align="center"
       prop="province"
      label="状态"
      width="70">
    </el-table-column>
    <el-table-column
     align="center"
      label="操作"
      width="230">
     <template>  <!--slot-scope="scope" -->
        <el-button type="text" @click="dialogFormVisible = true">查看</el-button>
       <el-button type="text" @click="dialogFormVisible = true">修改</el-button>

<el-dialog title="商品类别-新增/编辑" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="上级类别" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="*编号" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="*名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="排序" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
   
      <el-button type="text" @click="open">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
    </div>
</template>
<script>
import Title from "../components/Title";
export default {
  name:"Eight",
   components: {
        Title:Title
  },
   methods: {
      handleClick(row) {
        console.log(row);
      },
         open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
       openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);},
      
      
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

    data() {
      return {
         fullscreenLoading: false,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
          date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },{
         date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },
        {
           date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },{
           date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },{
           date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },
        {
           date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },
        {
          date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },
        {
           date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        },{
          date: '001',
          name: '产品大神',
          name1:'十月大神',
          city: '188888888888',
          zip: '广东省/广州区/天河区',
          tz:'幸福街18号',
          province: '正常',
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      }
    }
}
</script>
<style scoped>
#subject_Eigth{
      background: white;
    width: 67%;
    margin: 101px 0px 0px 359px;
    padding: 9px 0px;

}
.el-table{
      left: 36px;
      text-align: center;
      font-size: 12px;
    
  }
  .rgth{
    float:right;
    margin:28px 30px;
  }
  .block{
        text-align: center;
        margin-top: 10px;
  }




</style>