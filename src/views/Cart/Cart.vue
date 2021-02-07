<template>
    <div class="cart">
      <NavBar class="nav-bar">
          <div slot="center">购物车({{length}})</div>
      </NavBar>
      <CartList/>
      <CartBottomBar/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
    name:'cart',
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
      ...mapGetters({
          length:'cartLength'
      })
   },
   components:{
   NavBar,CartList,CartBottomBar
   },
   methods:{
   }
}
</script>
<style scoped>
.nav-bar{
    background-color: var(--color-tint);
    color:#fff;
    font-weight: 500;
}
.cart{
    height: 100vh;
}
</style>
