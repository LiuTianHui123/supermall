<template>
    <div class="bottom-bar">
    <div class="check-content">
          <el-checkbox v-model="isSelectAll" >全选</el-checkbox>
    </div>
    <div class="total">
        合计:{{totalPrice}}
    </div>
    <div class="calculate">去计算({{checkLength}})</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
    name:'CartBottomBar',
   data() {
      return {
          
      }

   },
   created(){
   },
   computed:{
       ...mapGetters(['cartList']),
       totalPrice(){
         return '¥' + this.cartList.filter(item => {
             return item.checked
         }).reduce((preValue,item) => {
           return preValue + item.price * item.count
         },0)
      },
      checkLength(){
          return this.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        if(this.cartList.length === 0)  return false

          for(let item of this.cartList){
              if(!item.checked){
                  return false
              }
          }
          return true
          }
      },
   methods:{
   },
}
</script>
<style scoped>
  .bottom-bar{
      height:40px;
      position: relative;
      line-height: 40px;
      background-color: #eee;
      display: flex;
  }
  .check-content{
      display: flex;
      margin-left: 10px ;
      width: 60px;
      
  }
  .total{
      font-size: 14px;
      margin-left: 30px;
      flex:1
  }
  .calculate{
      width: 90px;
      text-align: center;
      background-color: #F56C6C;
      color:#fff;
      font-size: 14px;
  }
</style>
