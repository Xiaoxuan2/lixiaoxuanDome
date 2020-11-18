<template>
    <div id="subject_Seven">
        <Title lxx="图片库管理"></Title>
         <div style="margin-top: 15px; float:left">
  <el-input placeholder="请输入内容"
   class="input-with-select"
  style="  width: 38%;padding: 15px 158px;">
    <el-button slot="append" icon="el-icon-search" @click="openFullScreen2"></el-button>
  </el-input>
</div>
  <div class="rgth" style="margin-right: 190px;margin-top: 25px;">
    <el-row>
<router-link to="/Thirty">
   <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
</router-link>

  </el-row>
  </div>
    <el-table
    :data="tableData"
    border
    header-cell-style=" background-color:#F2F2F2;padding: 12px 0px"
     cell-style="padding: 0px 0px;  text-align: center;"
    style="    width: 73.2%;padding: 0px 0px"
    >
    <el-table-column
      prop="date"
      align="center"
      label="编码"
      width="100"
      >
    </el-table-column>
    <el-table-column
     align="center"
      prop="name"
      label="相册名称"
      width="120">
    </el-table-column>
    <el-table-column
     align="center"
      label="封面"
      width="80">
      <img src="../assets/17.png" alt="" width="30">
    </el-table-column>
    <el-table-column
     align="center"
      prop="city"
      label="图片数量"
      width="70">
    </el-table-column>
    <el-table-column
     align="center"
      prop="zip"
      label="描述"
      width="120">
    </el-table-column>
      <el-table-column
     align="center"
      prop="city"
      label="排序"
      width="70">
    </el-table-column>
     <el-table-column
     align="center"
       prop="province"
      label="创建时间"
      width="150">
    </el-table-column>
    <el-table-column
     align="center"
      label="操作"
      width="230">
     <template>  <!--slot-scope="scope" -->
        <el-button type="text">查看</el-button>
       <el-button type="text">修改</el-button>
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
  
  name:"Seven",
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
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },{
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },
        {
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },{
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },{
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },
        {
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },
        {
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },
        {
          date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        },{
         date: '100001',
          name: '家居家纺图片',
          province: '2018-04-08 16:28:28',
          city: '100',
          zip: '暂无相册描述'
        }],
        
      }
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
.el-table{
      left: 156px;
      text-align: center;
      font-size: 12px;
        width: 61.8%;
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