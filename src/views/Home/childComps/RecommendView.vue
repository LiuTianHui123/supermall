<template>
    <div class="recommend">
     <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
         <a :href="item.link">
             <img :src="item.image" alt="">
             <div class="recommendfont">{{item.title}}</div>
         </a>
     </div>
    </div>
</template>
<script>
export default {
    name:'RecommendView',
    props:{
    recommends:{
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
}
</script>
<style scoped>
 .recommend{
     display:flex;
     text-align: center;
     width: 100%;
     font-size: 12px;
     padding: 10px 0 20px;
     border-bottom: 10px solid #eee;
 }
 .recommend-item{
     flex:1
 }
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
.recommendfont{
    color:#909399;
    font-family:"微软雅黑";
}
</style>
