<template>
    <div id="detail">
     <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
     <scroll class="contentDetail" ref="scroll" @scroll="contentScroll" :probe-type="3">
     <DetailSwiper :topImages="topImages"></DetailSwiper>
     <DetailBaseInfo :goods="goods"></DetailBaseInfo>
     <DetailShopInfo :shop="shop"></DetailShopInfo>
     <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
     <DetailParams :paramInfo="paramInfo" ref="params"></DetailParams>
     <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
     <GoodsList  :goods="recommend" ref="recommend"></GoodsList>
     </scroll>
     <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
     <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
    </div>
</template>
<script>
import DetailNavBar from './ChildComps/DetailNavBar'
import DetailSwiper from './ChildComps/DetailSwiper'
import DetailBaseInfo from './ChildComps/DetailBaseInfo'
import DetailShopInfo from './ChildComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './ChildComps/DetailGoodsInfo'
import DetailParams from './ChildComps/DetailParams'
import DetailCommentInfo from './ChildComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './ChildComps/DetailBottomBar'
import {backTopMixin} from 'common/mixin'



import {getDetail} from 'network/detail'
import {Goods} from 'network/detail'
import {Shop} from 'network/detail'
import {GoodsParam} from 'network/detail'
import { getRecommend} from 'network/detail'
import {debounce} from 'common/utils'

export default {
    name:'Detail',
   data() {
      return {
          iid:null,
          topImages:[],
          goods:{},
          shop:{},
          detailInfo:{},
          paramInfo:{},
          commentInfo:{},
          recommend:[],
          itemListener:null,
          themeTopYs:[],
          getThemeTopY:null,
          currentIndex:0
      }
   },
   
   created(){
      this.iid =  this.$route.params.iid
      getDetail(this.iid).then(res => {
          
          const data = res.result;
          this.topImages = data.itemInfo.topImages;
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this. paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
          if(data.rate.cRate !== 0){
              this.commentInfo = data.rate.list[0]
          }
      })

      getRecommend().then(res => {
          this.recommend = res.data.list
      })

      this.getThemeTopY = debounce(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
           this.themeTopYs.push(Number.MAX_VALUE)
      },500)
   },
   computed:{
   },
   components:{
       DetailNavBar,DetailSwiper,DetailBaseInfo,DetailShopInfo,Scroll,DetailGoodsInfo,DetailParams,DetailCommentInfo,GoodsList,DetailBottomBar
      
   },
   mixins:[backTopMixin],
   methods:{
       imageLoad() {
         this.$refs.scroll.refresh()
         this.getThemeTopY()
       },
       titleClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
       },
       contentScroll(position){
        const positionY = -position.y
        let length = this.themeTopYs.length
        for(let i = 0;i < length-1;i++){
           // if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length -1 && positionY >= this.themeTopYs[i]))){
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
                this.currentIndex = i
                this.$refs.nav.currentIndex = this.currentIndex
                }
        }
        this.listenShowBackTop(position)
       },
       addToCart(){
           const product = {}
           product.image = this.topImages[0];
           product.title = this.goods.title;
           product.desc = this.goods.desc;
           product.price = this.goods.realPrice;
           product.iid = this.iid;
           this.$store.dispatch('addCart',product).then(res => {
               this.$message({
                   message:res,
                   type:'success',
                   duration:1500,
                   offset:150,
                   center:true
               })
           })
           
       }
   },
}
</script>
<style scoped>
#detail{
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
}
.contentDetail{
    height: calc(100% - 44px - 49px);;
    overflow: hidden;
    
}
</style>
