

<template>
  <div class="subject_Eighteen">
    <Title lxx="终端财务退款汇总"></Title>
    <div style="margin-top: 15px;
    float: left;
    width: 40%;
    margin-left: 93px;"
>
      <el-dropdown>
        <span class="el-dropdown-link">
          按日总汇
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>按日总汇</el-dropdown-item>
          <el-dropdown-item>按月总汇</el-dropdown-item>
          <el-dropdown-item>按年总汇</el-dropdown-item>
         
        </el-dropdown-menu>
      </el-dropdown>

      <!--  -->
      <el-input placeholder="请输入门店名称/编码" class="input-with-select" style="  width: 41%;left: 57px;">
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
       style="    width: 82.1%;
    padding: 0px;
    left: 129px;
    top: 17px;"
      @selection-change="handleSelectionChange"
    >
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column label="日期" width="130">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="支付宝笔数" width="130"></el-table-column>
      <el-table-column prop="address" label="支付宝金额" width="180"></el-table-column>
      <el-table-column prop="province" label="微信笔数" width="70"></el-table-column>
      <el-table-column prop="zip" label="微信金额" width="100"></el-table-column>
      <el-table-column prop="scmoney" label="银行卡笔数" width="90"></el-table-column>
           <el-table-column prop="cbmoney" label="银行卡金额" width="90"></el-table-column>
      <el-table-column prop="city" label="现金笔数" width="90"></el-table-column>
       <el-table-column prop="xjje" label="现金金额" width="90"></el-table-column>
      <el-table-column prop="mlbe" label="抹零笔数" width="90"></el-table-column>
       <el-table-column prop="mlje" label="抹零金额" width="90"></el-table-column>
     
    
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Title from "../components/Title";
const cityOptions = ['全部', '待审核', '审核成功', '审核失败']; 
export default {
  name: "TwentySix",
  components: {
    Title: Title
  },
  methods: {
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
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
  },
  data() {
    return {
      checkedCities: ['全部'],
      cities: cityOptions,

      fullscreenLoading: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          date: "总汇",
          name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
          date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
           date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
           date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
           date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
           date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
           date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
          date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        },
        {
           date: "2048-04-28",
         name: "122",
          address: "13232.00",
          province: "89",
          city: "13",
          zip: "8888.00",
          scmoney: "12",
          cbmoney: "1028.00",
         xjje:"228.00",
         mlbe:"13",
         mlje:"0.16"
        }
      ],
      multipleSelection: [],
    //   dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",

       dialogFormVisible2: false,
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
    };
  }
};
</script>
<style scoped>
.subject_Eighteen {
  background: white;
  height: 606px;
  width: 73%;
  margin: 103px 0px 0px 325px;
  padding: 9px 0px;
}
.el-table {
  left: 36px;
  text-align: center;
  font-size: 12px;
}
.rgth {
        margin: 24px 0px 0px 1208px;
}
.block {
  text-align: center;
  margin-top: 10px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
  /* padding: 0px 9px; */
  left: 40px;
  top: 9px;
}
.el-button--text {
  color: #409eff;
  background: 0 0;
  padding-left: 59px;
  padding-right: 4px;
}
.el-table td,
.el-table th {
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
  line-height: 0;
}
.el-table .cell:nth-of-type(2) {
  color: red !important;
}
.el-pagination {
  white-space: nowrap;
  padding: 32px 5px;
  color: #303133;
  font-weight: 700;
}
::v-deep #input_OO{
  height: 172px;;
}
::v-deep .input_left{
 float: left;
     padding: 0px 37px;
}
::v-deep .input_rigth{
float: right;
}
::v-deep .input_left>p{
  height: 30px;
}
::v-deep .input_left>p>label{
  padding: 0px 10px;
}
::v-deep .input_left>p>input{
      height: 17px;
}
::v-deep .input_left>p>select{
      height: 17px;
}
</style>