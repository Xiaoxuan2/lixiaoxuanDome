<template>
    <div id="Title_nav">
        <p><span></span>{{lxx}}</p>
    </div>
</template>
<script>
export default {
    name:'Title',
    data() {
    return {
        
    };
  },
     props:{    //父向子传值 
        lxx:{
            type:String,//传值 类型
            default:'首页'//默认显示值
        }
    }
}
</script>
<style scoped>
 #Title_nav{
        background: white;
    padding: 10px 0px;
    position: fixed;
    width: 100%;
       z-index: 8;
    top: 45px;
        left: 0px;
 }
    #Title_nav p>span{
   width: 2px;
    height: 20px;
    background: #0066FF;
    display: inline-block;
        margin: -6px 17px;
    }
     #Title_nav p{
       text-indent: 16em;
       font-size: 15px;
       font-weight: 700;
     }
</style>