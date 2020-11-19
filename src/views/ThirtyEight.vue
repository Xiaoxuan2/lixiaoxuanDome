<template>
    <div class="subject_Nine">
          <Title lxx="订单促销"></Title>
              <div class="titl">
                <strong>促销配置</strong>
           </div>
         <div class="from">
             <el-form ref="form" :model="form" label-width="80px">

  <el-form-item label="促销编码">
         <el-input v-model="form.name" placeholder="请选择" readonly="readonly"></el-input> 
  </el-form-item>
    <el-form-item label="促销门店">
    <el-input v-model="form.name" placeholder="产品大神(幸福店)" readonly="readonly" style=" background: silver"></el-input>
  </el-form-item>
    <el-form-item label="促销日期">
   <el-input
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  </el-form-item>

  <el-form-item label="促销时间" style="width: 100%;">
  <el-select v-model="value1" multiple placeholder="00:00">
  </el-select>
   <el-select
    v-model="value2"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="23:59">
  </el-select>
  </el-form-item>
  <el-form-item label="促销周期" style="">
<el-checkbox v-model="checked">全选</el-checkbox><el-checkbox v-model="checked">周一</el-checkbox><el-checkbox v-model="checked">周二</el-checkbox>
<el-checkbox v-model="checked">周三</el-checkbox><el-checkbox v-model="checked">周四</el-checkbox><el-checkbox v-model="checked">周五</el-checkbox>
<el-checkbox v-model="checked">周六</el-checkbox><el-checkbox v-model="checked">周日</el-checkbox>
  <div style="margin: 0px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</el-form-item>
<el-form-item label="促销对象" style="">
<el-checkbox v-model="checked">全选</el-checkbox><el-checkbox v-model="checked">非会员</el-checkbox><el-checkbox v-model="checked">注册会员</el-checkbox>
<el-checkbox v-model="checked">白银会员</el-checkbox><el-checkbox v-model="checked">黄金会员</el-checkbox><el-checkbox v-model="checked">钻石会员</el-checkbox>
  <div style="margin: 0px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</el-form-item>
 <el-form-item label="促销规则">
  
    <el-radio-group v-model="form.resource">
      <el-radio label="满减" checked="checked" style="    margin: 0px 7px;
    padding: 0px 1px;"></el-radio>
      <el-radio label="折扣"></el-radio>
        <el-radio label="赠送"></el-radio>

    </el-radio-group>
    
  </el-form-item>
   <el-form-item label="经办人员">
    <el-input v-model="form.name"  readonly="readonly"></el-input>
  </el-form-item>
    <el-form-item label="备注">
    <el-input v-model="form.name"  readonly="readonly"></el-input>
  </el-form-item>

</el-form> 
       </div>
        <div class="titl">
            <strong  style="font-size: 16px;">促销商品</strong>
           </div>  
           <div class="showtext">
                <el-table :data="tableData"
       border style="width: 50% 
        text-align: center;" 
          cell-style="padding: 0px 0px;  text-align: center;"
           header-cell-style=" background-color:#F2F2F2; text-align: center;"
        class="table">
          <el-table-column fixed prop="date" label="日期" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="230"></el-table-column>
          <el-table-column fixed="right" label="操作" width="50">
            <template>
              <el-button type="text" size="small" @click="open" style=" text-align: center;">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
        &nbsp;  &nbsp;
        <router-link to="/Seventeen">  <el-button plain>取消</el-button></router-link>
      </el-row>
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
      ],
             form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
            checked: true
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
      height: 999px;
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
    
     ::v-deep  label {
    width: 54px;

    }
    .zdxx {
    margin: 30px -29px;
    font-size: 12px;
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
  </style>