<template>
   <Swiper class="swiper1">
       <SwiperItem v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" >
       </SwiperItem>
   </Swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'DetailSwiper',
    props:{
     topImages:{
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
   components:{
   Swiper,SwiperItem
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style scoped>
.swiper1{
    height: 300px;
    overflow: hidden;
}
</style>
