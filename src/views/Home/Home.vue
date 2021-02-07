<template>
 <div id="home">
   <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
   <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="TabControl1"  v-show=" isTabFixed">
   </TabControl>
  <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="LoadMore">
   <HomeSwiper :banners="banners" @SwiperImageLoad="SwiperImageLoad"></HomeSwiper>
   <RecommendView :recommends="recommends"></RecommendView>
   <FeatureView></FeatureView>
   <TabControl :titles="['流行','新款','精选']"  @tabClick="tabClick" ref="TabControl2"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>
    </scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import {backTopMixin} from 'common/mixin'


import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'

export default {
    name:'home',
    mixins:[backTopMixin],
   data() {
      return {  
          banners:[],
          recommends:[],
          goods:{
            'pop':{page:0,list:[]},
            'new':{page:0,list:[]},
            'sell':{page:0,list:[]}
          },
          currentType:'pop',
          isShowBackTop:false,
          tabOffsetTop:0,
          isTabFixed:false,
          saveY:0,
          
      }
   },
   components:{
    NavBar,HomeSwiper,RecommendView,FeatureView,TabControl,GoodsList, Scroll
   },
   created(){
     this.getHomeMultidata()
      this.getHomeGoods('pop')
     this.getHomeGoods('new')
      this.getHomeGoods('sell')
     
     },
   computed:{
   },
   activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,300)
    this.$refs.scroll.refresh()
   },
   deactivated() {
     this.saveY = this.$refs.scroll.getScrollY()
     
     
   },
   mounted() {
     const refresh = debounce(this.$refs.scroll.refresh,50)
   this.$bus.$on('itemImageLoad',() => {
          refresh()
     })
   },
   methods:{
     LoadMore() {
      this.getHomeGoods(this.currentType)
     },
     SwiperImageLoad(){
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
     },
     tabClick(index){
     switch(index) {
       case 0:
         this.currentType = "pop"
         break
          case 1:
         this.currentType = "new"
         break
          case 2:
         this.currentType = "sell"
         break
     }
     this.$refs.TabControl1.currentIndex = index;
      this.$refs.TabControl2.currentIndex = index;
     },
   contentScroll(position) {
    this. listenShowBackTop(position);
    this.isTabFixed = (-position.y) > this.tabOffsetTop
   },


     getHomeMultidata() {
        getHomeMultidata().then(res => {
       this.banners = res.data.banner.list;
       this.recommends = res.data.recommend.list
     })
     },
     getHomeGoods(type) {
       const page = this.goods[type].page + 1
     getHomeGoods(type, page).then(res => {
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      this.$refs.scroll.finishPullUp()

     })
     },
   
   },
}
</script>
<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
  z-index: 9;
}
</style>
