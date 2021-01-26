<template>
    <tabbar>
    <TabarItem path="/home">
      <i slot="item-icon" class="el-icon-s-home aaa"></i>
      <div slot="item-text">首页</div>
    </TabarItem>
    <TabarItem path="/category">
      <i slot="item-icon" class="el-icon-menu aaa" ></i>
      <div slot="item-text">分类</div>
    </TabarItem>
    <TabarItem path="/cart">
      <i slot="item-icon" class="el-icon-shopping-cart-2"></i>
      <div slot="item-text">购物车</div>
    </TabarItem>
    <TabarItem path="/profile">
      <i slot="item-icon" class="el-icon-user-solid aaa"></i>
      <div slot="item-text">我的</div>
    </TabarItem>

  </tabbar>
</template>
<script>
import tabbar from 'components/common/tabbar/TabBar'
import TabarItem from 'components/common/tabbar/TabarItem'
export default {
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
   components:{
       tabbar,TabarItem
   }
}
</script>
<style scoped>
.el-icon-shopping-cart-2{
  margin-top: 7px;
}
</style>
