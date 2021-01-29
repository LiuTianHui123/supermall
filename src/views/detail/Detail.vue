<template>
    <div id="detail">
     <DetailNavBar></DetailNavBar>
     <DetailSwiper :topImages="topImages"></DetailSwiper>
     <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    </div>
</template>
<script>
import DetailNavBar from './ChildComps/DetailNavBar'
import DetailSwiper from './ChildComps/DetailSwiper'
import DetailBaseInfo from './ChildComps/DetailBaseInfo'

import {getDetail} from 'network/detail'
import {Goods} from 'network/detail'

export default {
    name:'Detail',
   data() {
      return {
          iid:null,
          topImages:[],
          goods:{}
      }
   },
   created(){
      this.iid =  this.$route.params.iid
      getDetail(this.iid).then(res => {
          console.log(res)
          const data = res.result;
          this.topImages = data.itemInfo.topImages;
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      })
   },
   computed:{
   },
   components:{
       DetailNavBar,DetailSwiper,DetailBaseInfo
   },
   methods:{
   },
}
</script>
<style scoped>

</style>
