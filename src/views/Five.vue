<template>
  <div class="subject_ten">
     <Title lxx="商品档案"></Title>
    <div style="margin-top: 15px;
    float: left;
    width: 40%;
    margin-left: 207px;">
     <el-dropdown>
  <span class="el-dropdown-link">
  审核状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>审核状态</el-dropdown-item>
    <el-dropdown-item>待审核</el-dropdown-item>
    <el-dropdown-item>审核失败</el-dropdown-item>
  <el-dropdown-item>审核成功</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
 <el-dropdown>
  <span class="el-dropdown-link">
  出库状态<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>出库状态</el-dropdown-item>
    <el-dropdown-item>已作废</el-dropdown-item>
    <el-dropdown-item>待出库</el-dropdown-item>
    <el-dropdown-item>部分出库</el-dropdown-item>
     <el-dropdown-item>已出库</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>


<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>
  <el-input placeholder="请输入采购单退货号"
   class="input-with-select"
   style= "  width: 41%;left: 57px;">
    <el-button slot="append" icon="el-icon-search" @click="openFullScreen2"></el-button>
  </el-input>
</div>
  <div class="rgth">
    <el-row>
       <el-button>导出</el-button> &nbsp; &nbsp;
     <router-link to="/TwentyNine">
         <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
       </router-link> 
 


  </el-row>
  </div>
    <el-table
    :data="tableData"
    border
      ref="multipleTable"
       tooltip-effect="dark"
    header-cell-style=" background-color:#F2F2F2;padding: -42px 0px;  text-align: center;"
    cell-style="padding:5px 0px;  text-align: center;"
    style="width:64.3%;padding: 0px 0px; left: 250px; top: 15px;"
    @selection-change="handleSelectionChange">
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="采购退货号"
      width="130">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="供应商"
      width="130">
    </el-table-column>
    <el-table-column
      prop="address"
      label="退货金额"
       width="80"
    >
    </el-table-column>
    <el-table-column
      prop="province"
      label="采购关联单号"
       width="170"
    >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="制单人员"
       width="80"
    >
    </el-table-column>
    <el-table-column
      prop="scmoney"
      label="制单日期"
       width="90"
    >
    </el-table-column>
    <el-table-column
      prop="cbmoney"
      label="审核状态"
       width="90"
    >
    </el-table-column>
    
      <el-table-column
        align="center"
         prop="zt"
          label="出库状态"
          width="80" >
    </el-table-column>
      <el-table-column
        align="center"
         prop="imgg"
          width="50" >
           <el-tooltip placement="bottom">
  <div slot="content">详情<br/>修改<br/>上架/下架<br/>删除</div>
  <el-button style="border: none;    padding: 0px 0px;"> ...</el-button>
</el-tooltip>
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
  name:"Five",
   components: {
        Title:Title
  },
   methods: {
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
      }, openFullScreen2() {
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
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
    ,

    data() {
      return {
         fullscreenLoading: false,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        tableData: [{
          date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'待审核',
           zt:'待出库',
          

        },{
         date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'审核失败',
           zt:'待出库',
        },
        {
         date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'待审核',
           zt:'待出库',
        },{
         date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'审核成功',
           zt:'待出库',
        },{
          date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'审核成功',
           zt:'待出库',
        },
        {
         date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'审核成功',
           zt:'待出库',
        },
        {
          date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'待审核',
           zt:'待出库',
        },
        {
         date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'审核失败',
           zt:'待出库',
        },{
         date: 'TH2018042810101',
           name: '产品大神供应商',
           address:'10000.00',
          province: 'CG2018042810101',
          city: '8.00',
          zip: 'syds',
          scmoney:'2018-04-28',
          cbmoney:'待审核',
           zt:'待出库',
        }]
        , multipleSelection: [],
        formLabelWidth: '120px',
        
      }
    }
}
</script>
<style scoped>
  .subject_ten{
            background: white;
    height: 499px;
    width: 73%;
    margin: 103px 0px 0px 325px;
    padding: 9px 0px;
  }
  .el-table{
      left: 36px;
      text-align: center;
      font-size: 12px;
    
  }
  .rgth{
        margin: 24px 0px 0px 980px;
  }
  .block{
        text-align: center;
        margin-top: 10px;
  }
  .el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    /* padding: 0px 9px; */
    left: 40px;top: 9px;
}
.el-button--text {
    color: #409EFF;
    background: 0 0;
    padding-left: 59px;
    padding-right: 4px;
  
}
.el-table td, .el-table th {
    /* padding: 12px 0; */
    min-width: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
}
.el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-button {
    display: inline-block;
    line-height: 0;}
   .el-table .cell:nth-of-type(2){
            color: red!important;
    }
.el-pagination {
    white-space: nowrap;
    padding: 32px 5px;
    color: #303133;
    font-weight: 700;
}
</style>