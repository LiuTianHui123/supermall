<template>
    <div class="goods">
     <GoodsListItem v-for="(item,index) in goods" :goodsItem="item" :key="index"></GoodsListItem>>
    </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsList',
    props:{
    goods:{
        type:Array,
        default() {
            return []
        }
    }
    },
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
       GoodsListItem
   }
}
</script>
<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>
