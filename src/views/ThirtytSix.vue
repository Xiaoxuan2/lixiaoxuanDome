
<template class="main1">
  <div class="main">
    <div class="eheader">
   <Title lxx="新增出库单"></Title>
    </div>
    <div class="content">
      <el-row class="btn1">
        <el-button type="text" @click="dialogFormVisible = true">扫条形码</el-button>
        <el-dialog title="商品扫描" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="商品编码:" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off" placeholder="62100000000001" class="el-input__inner1"></el-input>
            </el-form-item>
            <el-form-item label="商品数量:" :label-width="formLabelWidth">
              <el-input-number v-model="num" @change="handleChange" :min="1"  label="描述文字" class="num"></el-input-number>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false,open1()">确 定</el-button>
          </div>
        </el-dialog>
      </el-row>
      <div class="content1">
        <div class="content1_left">
          <ul>
            <li>
             出库单号:
              <el-input placeholder="CG2018042708181" v-model="input1" :disabled="true" class="srk"></el-input>
            </li>
            <li>
             出库门店:
              <el-input placeholder="产品大神(幸福店)" v-model="input2" :disabled="true" class="srk"></el-input>
            </li>
            <li>
            经办人员:
              <el-input placeholder="请输入采购人员" v-model="input" class="srk"></el-input>
            </li>
          </ul>
        </div>
        <div class="content1_rigth">
          <ul>
            <li>
            出库状态:
              <el-input placeholder="待审核" v-model="input1" :disabled="true" class="srk"></el-input>
            </li>
            <li>
            出库门店:
              <el-input placeholder="产品大神(幸福店)" v-model="input2" :disabled="true" class="srk"></el-input>
            </li>
            <li>
              备注:
              <el-input placeholder="" v-model="input" class="srk"></el-input>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <el-table :data="tableData"
       border style="width: 100% 
        text-align: center;" 
          cell-style="padding: 0px 0px;  text-align: center;"
           header-cell-style=" background-color:#F2F2F2; text-align: center;"
        class="table">
          <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="230"></el-table-column>
          <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template>
              <el-button type="text" size="small" @click="open">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="jg1">
          <ul class="jg">
            <li>其他金额：0.00</li>
            <li>优惠金额：800.00</li>
            <li>采购金额：32200.00</li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="zdxx">
          <li>制单人:syds</li>
          <li>制单时间：2018-04-27 12:12:12</li>
          <li>审核人:____________</li>
          <li>审核时间：_________</li>
        </ul>
      </div>
      <el-row class="btn">
        <el-button type="primary" @click="fh">保存</el-button>
        <el-button plain @click="fh">取消</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
  import Title from "../components/Title";
export default {
  name:"ThirtyTwo",
  components: {
    Title
  },
  data() {
    return {
      input: "",
      dialogFormVisible: false,
      formLabelWidth: '120px',
      num:1,
      form: {
          name: '',
          region: '',
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
     handleChange(value) {
        console.log(value);
      },
    fh() {
      this.$router.go(-1);
    },
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
    open1() {
        this.$message({
          showClose: true,
          message: '操作成功',
          type: 'success'
        });
      },
  }
};
</script>
<style  scoped>
.main {
  background: #ffffff;
  width: 1070px;
  height: 820px;
     margin: 115px 436px;
  position: absolute;
}
.main1 {
  position: absolute;
  width: 950px;
  height: 450px;
  margin: 0px 80px;
}
.table {
  height: 380px;
}
.content {
  width: 980px;
  height: 500px;
  margin: 60px auto;
}
.content1_left {
  width: 49%;
  height: 200px;
  float: left;
}
.content1_rigth {
  width: 50%;
  height: 200px;
  float: left;
}
.srk {
  width: 270px;
}
.content1_left ul li {
  list-style-type: none;
  padding: 10px;
}
.content1_rigth ul li {
  list-style-type: none;
  padding: 10px;
}
.content1_rigth ul li:nth-of-type(3) {
  margin: 0px 30px;
}
.jg li {
  list-style: none;
  padding: 5px;
}
.jg1 {
  position: absolute;
  margin-top: -110px;
  margin-left: 800px;
}
.zdxx {
  margin: 30px 40px;
}
.zdxx li {
  list-style-type: none;
  float: left;
  padding-left: 40px;
}
.btn {
  position: absolute;
  margin: 70px 50px;
}
.btn1 {
  position: absolute;
  right: 50px;
  top: 10px;
}
.el-input__inner1{
  width: 300px;
}
.num{
  width: 300px;

}
</style>

