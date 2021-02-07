<template>
    <div id="shop-item">
        <div class="item-selector">
        <CheckButton :product='product'/>
        </div>
   <div class="item-img">
       <img :src="product.image" alt="">
   </div>
   <div class="item-info">
       <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
            <div class="item-price left">¥{{product.price}}</div>
            <div class="item-count right">×{{product.count}}</div>
        </div>
   </div>
    </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
   data() {
      return {
      }
   },
   props:{
   product:{
       type:Object,
       default(){
           return {}
       }
   }
   },
   mounted(){
       console.log(this.product);
   },
   computed:{
   },
   components:{
   CheckButton
   },
   methods:{

   },
}
</script>
<style scoped>
  #shop-item{
      width: 100%;
      display: flex;
      font-size: 10px;
      padding: 5px;
      border-bottom: 1px solid #ccc;
      font-family: '宋体';
      font-weight: 500;
  }
  .item-title, .item-desc{
      overflow: hidden;
      white-space: nowrap;
      text-overflow:ellipsis;
      font-size: 10px;
  }
  .item-img{
      padding:5px;
  }
.item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.item-info{
    font-size: 15px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.item-info .item-desc{
    font-size: 8px;
    color: #666;
    margin-top:15px;

}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left:10px;
  right: 10px;
}
.info-bottom .item-price{
    color:orangered;
    font-weight: 600;
}
.item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
