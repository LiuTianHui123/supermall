<template>
    <div class="check-button">
    <el-checkbox v-model="product.checked"></el-checkbox>
    </div>
</template>
<script>
export default {
    name:'CheckButton',
    props:{
        product:{
            type:Object,
            default(){
                return {}
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

</style>
