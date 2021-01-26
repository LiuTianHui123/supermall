<template>
    <div class="tab-bar-item" @click="itemClick">
        <div :style="activeStyle"><slot name="item-icon"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name:'TabarItem',
    props:{
        path:"",
        activeColor:{
            type:String,
            default:'#F56C6C'
        }
    },
   data(){
       return {
           
       }
   },
   created(){
   },
   computed:{
       isActive() {
          return this.$route.path == this.path
       },
       activeStyle() {
       return this.isActive ? {color: this.activeColor} : {}
       }
 
   },
   methods:{
       itemClick() {
           this.$router.replace(this.path)
       }
   },
}
</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.aaa{
    margin-top: 7px;
    vertical-align: middle;
    margin-bottom: 2px;
}
.active{
   background-color: turquoise;
}
</style>
