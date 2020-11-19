<template>
    <div class="subject_Nine">
          <Title lxx="新增商品促销"></Title>
              <div class="titl">
                <strong>促销配置</strong>
           </div>
         <div class="from">
             <el-form ref="form" :model="form" label-width="80px">

  <el-form-item label="促销编码">
         <el-input v-model="form.name" placeholder="CX2018042801" readonly="readonly"></el-input> 
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
       <div class="tab_from">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="立减优惠" name="first">
          <el-table :data="tableData"
       border style="width: 50% 
        text-align: center;" 
          cell-style="padding: 0px 0px;  text-align: center;"
           header-cell-style=" background-color:#F2F2F2; text-align: center;"
        class="table">
          <el-table-column  prop="date"
           label="序号" width="80"></el-table-column>
          <el-table-column prop="province"
           label="编号" width="150"></el-table-column>
          <el-table-column prop="city"
           label="商品名称" width="119"></el-table-column>
          <el-table-column prop="address" 
          label="单位" width="50"></el-table-column>
            <el-table-column prop="moeny" 
          label="销售价" width="80"></el-table-column>
              <el-table-column prop="zip" 
          label="立减金额" width="100"></el-table-column>
          <el-table-column 
           label="操作" width="75">
            <template>
              <el-button type="text" 
              size="small" @click="open" style=" text-align: center;">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        
        
        
        </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">
              <el-table :data="tableData"
       border style="width: 50% 
        text-align: center;" 
          cell-style="padding: 0px 0px;  text-align: center;"
           header-cell-style=" background-color:#F2F2F2; text-align: center;"
        class="table">
          <el-table-column  prop="date"
           label="序号" width="80"></el-table-column>
          <el-table-column prop="province"
           label="编号" width="150"></el-table-column>
          <el-table-column prop="mc3"
           label="商品名称" width="119"></el-table-column>
          <el-table-column prop="address" 
          label="单位" width="50"></el-table-column>
            <el-table-column prop="moeny" 
          label="销售价" width="80"></el-table-column>
              <el-table-column prop="zip" 
          label="立减金额" width="100"></el-table-column>
          <el-table-column 
           label="操作" width="75">
            <template>
              <el-button type="text" 
              size="small" @click="open" style=" text-align: center;">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">
        
            <el-table :data="tableData"
       border style="width: 50% 
        text-align: center;" 
          cell-style="padding: 0px 0px;  text-align: center;"
           header-cell-style=" background-color:#F2F2F2; text-align: center;"
        class="table">
          <el-table-column  prop="date"
           label="序号" width="80"></el-table-column>
          <el-table-column prop="province"
           label="编号" width="150"></el-table-column>
          <el-table-column prop="mc2"
           label="商品名称" width="119"></el-table-column>
          <el-table-column prop="address" 
          label="单位" width="50"></el-table-column>
            <el-table-column prop="moeny" 
          label="销售价" width="80"></el-table-column>
              <el-table-column prop="zip" 
          label="立减金额" width="100"></el-table-column>
          <el-table-column 
           label="操作" width="75">
            <template>
              <el-button type="text" 
              size="small" @click="open" style=" text-align: center;">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">
                <el-table :data="tableData"
       border style="width: 50% 
        text-align: center;" 
          cell-style="padding: 0px 0px;  text-align: center;"
           header-cell-style=" background-color:#F2F2F2; text-align: center;"
        class="table">
          <el-table-column  prop="date"
           label="序号" width="80"></el-table-column>
          <el-table-column prop="province"
           label="编号" width="150"></el-table-column>
          <el-table-column prop="mc1"
           label="商品名称" width="119"></el-table-column>
          <el-table-column prop="address" 
          label="单位" width="50"></el-table-column>
            <el-table-column prop="moeny" 
          label="销售价" width="80"></el-table-column>
              <el-table-column prop="zip" 
          label="立减金额" width="100"></el-table-column>
          <el-table-column 
           label="操作" width="75">
            <template>
              <el-button type="text" 
              size="small" @click="open" style=" text-align: center;">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      
    </el-tab-pane>
     
  </el-tabs>
   <el-row class="btn">
        <el-button type="primary" @click="fh">保存</el-button>
        &nbsp;  &nbsp;
        <router-link to="/Eighteen">  <el-button plain>取消</el-button></router-link>
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
             activeName: 'second',
          tableData: [
        {
          date: "1",
          name: "王小虎",
          province: "6210000000001",
          city: "德芙巧克力60g",
          address: "盒",
          zip: 1,
          moeny:"3.00",
          mc1:"徐福记巧克力",
          mc2:"清风抽取式面纸",
          mc3:"大白兔奶糖"
        },
        {
          date: "2",
          name: "王小虎",
          province: "6210000000001",
          city: "德芙巧克力60g",
          address: "盒",
          zip: 15,
          moeny:"3.00",
          mc1:"徐福记巧克0g",
          mc2:"清风抽取式面纸",
          mc3:"大白兔奶糖"
        },
        {
          date: "3",
          name: "王小虎",
          province: "6210000000001",
          city: "德芙巧克力60g",
          address: "盒",
          zip: 10,
          moeny:"3.00",
          mc1:"徐福记巧克0g",
          mc2:"清风抽取式面巾",
          mc3:"大白兔奶糖"
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
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
.tab_from{
    padding: 20px 40px;
}
  </style>