<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
    <Maintabbar/>
  </div>
</template>

<script>
import Maintabbar from 'components/content/Maintabbar/Maintabbar'
export default {
  name: 'App',
  components:{
     Maintabbar
  }
}
</script>

<style>
@import './assets/css/base.css' ;
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
border-color: #dcdcdc !important;
background-color: var(--color-tint) !important;
}
.el-checkbox__input.is-checked+.el-checkbox__label{
color:var(--color-tint) !important;
}
.el-checkbox__inner:hover{
border-color: #dcdcdc !important;
}
.el-checkbox__input.is-focus .el-checkbox__inner {
border-color: #dcdcdc !important;
}
</style>
