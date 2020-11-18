<template>
  <div class="subject_two">
    <Title lxx="商品单位"></Title>
    <div style="margin-top: 15px; float:left">
  <el-input placeholder="请输入内容"
   class="input-with-select"
   style="   width: 38%;padding: 15px 168px;">
    <el-button slot="append" icon="el-icon-search" @click="openFullScreen2"></el-button>
  </el-input>
</div>
  <div class="rgth" style="margin-right: 137px;margin-top: 25px;">
    <el-row>
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
    style="    width: 73.4%;padding: 0px 0px"
    >
    <el-table-column
      prop="date"
      align="center"
      label="序号"
      width="100"
      >
    </el-table-column>
    <el-table-column
     align="center"
      prop="name"
      label="编码"
      width="160">
    </el-table-column>
    <el-table-column
     align="center"
      prop="province"
      label="类别名称"
      width="220">
    </el-table-column>
    <el-table-column
     align="center"
      prop="city"
      label="排序"
      width="120">
    </el-table-column>
  
    <el-table-column
     align="center"
      label="操作"
      width="230">
     <template>  <!--slot-scope="scope" -->
     
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
<script>import Title from "../components/Title";
export default {
  name:"Four",
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
      },openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);},
      //  open1() {
      //   this.$prompt('修改项', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消',
      //   }).then(({ value }) => {
      //     this.$message({
      //       type: 'success',
      //     });
      //   }).catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '取消输入'
      //     });       
      //   });
      // },
      
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
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },{
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },
        {
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },{
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },{
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },
        {
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },
        {
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },
        {
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
        },{
          date: '1',
          name: '00',
          province: '未分类',
          city: '1',
          zip: 200333
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
  .subject_two{
        background: white;
    /* height: 699px; */
    width: 59%;
    margin: 103px 0px 0px 415px;
    padding: 9px 0px;
  }
  .el-table{
      left: 166px;
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
  ::v-deep .input-with-select{
      width: 38%;
    padding: 15px 168px;
}
::v-deep .el-button el-button--primary{
      margin-right: 119px;
    margin-top: 5px;
}
</style>