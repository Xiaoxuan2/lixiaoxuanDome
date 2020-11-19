<template>
  <div class="subject_Sixteen">
      <Title lxx="商品库存明细"></Title>
    <div style="margin-top: 15px;
    float: left;
    width: 40%;
    margin-left: 176px;"
>
     <el-dropdown>
  <span class="el-dropdown-link">
  出入库<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>出入库</el-dropdown-item>
    <el-dropdown-item>出库</el-dropdown-item>
    <el-dropdown-item>出库</el-dropdown-item>
  
  </el-dropdown-menu>
</el-dropdown>
 <el-dropdown>
  <span class="el-dropdown-link">
  业务类型<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>业务类型</el-dropdown-item>
    <el-dropdown-item>其他入库</el-dropdown-item>
    <el-dropdown-item>采购入库</el-dropdown-item>
    <el-dropdown-item>调拨入库</el-dropdown-item>
     <el-dropdown-item>盘盈入库</el-dropdown-item>
     <el-dropdown-item>销售退货入库</el-dropdown-item>
    <el-dropdown-item>其他出库</el-dropdown-item>
    <el-dropdown-item>采购退货出库</el-dropdown-item>
     <el-dropdown-item>调拨出库</el-dropdown-item>
        <el-dropdown-item>盘亏出库</el-dropdown-item>
           <el-dropdown-item>积分兑换出库</el-dropdown-item>
              <el-dropdown-item>销售出库</el-dropdown-item>
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
       <el-button>导出</el-button>
  </el-row>
  </div>
    <el-table
    :data="tableData"
    border
      ref="multipleTable"
       tooltip-effect="dark"
    header-cell-style=" background-color:#F2F2F2;padding: -32px 0px;  text-align: center;"
    cell-style="padding: 10px 0px;  text-align: center;"
    style="width: 74.3%;padding: 0px;left: 215px;top: 15px;"
    @selection-change="handleSelectionChange">
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      label="商品编码"
      width="130">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="归属门店"
       width="80"
    >
    </el-table-column>
    <el-table-column
      prop="province"
      label="出入库"
       width="70"
    >
    </el-table-column>
    <el-table-column
      prop="zip"
      label="业务类型"
       width="150"
    >
    </el-table-column>
    <el-table-column
      prop="scmoney"
      label="业务单号"
       width="100"
    >
    </el-table-column>
    <el-table-column
      prop="cbmoney"
      label="业务日期"
       width="90"
    >
    </el-table-column>
    
      <el-table-column
        align="center"
         prop="zt"
          label="入库数量"
          width="80" >
    </el-table-column>
      <el-table-column
        align="center"
         prop="city"
          label="出库数量"
          width="80" >
    </el-table-column>
     <el-table-column
        align="center"
         prop="zt"
          label="库存数量"
          width="80" >
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
  name:"Sixteen",
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
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
          

        },{
           date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },
        {
           date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },{
          date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },{
          date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },
        {
          date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },
        {
           date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },
        {
         date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        },{
           date: 'TH2018042810101',
           name: '清风抽取式面巾纸150抽X2层',
           address:'产品大神',
          province: '入库',
          city: '---',
          zip: 'IQ2018042810101',
          scmoney:'2018-04-28',
          cbmoney:'2017-04-28',
           zt:'100',
           sl:'2000'
        }]
        , multipleSelection: [],
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
           gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        formLabelWidth: '120px',
        
      }
    }
}
</script>
<style scoped>
  .subject_Sixteen{
            background: white;
   height:606px;
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
    
    margin: 24px 0px 0px 1182px;

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