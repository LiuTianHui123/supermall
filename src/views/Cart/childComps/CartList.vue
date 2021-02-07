<template>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
    <CartListItem v-for="(item,index) in cartList" :key="index" :product="item"></CartListItem>
      </scroll>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

export default {
    name:'cartList',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
      ...mapGetters(['cartList'])
   },
   activated(){
    this.$refs.scroll.refresh()
   },
   components:{
   Scroll,CartListItem
   },
   methods:{
   },
}
</script>
<style scoped>
.content{
    height:100%
}
.cart-list{
    height:calc(100% - 44px - 49px - 40px);
    overflow: hidden;
}
</style>
