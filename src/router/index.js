import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home/Home')
const Cart = () => import('../views/Cart/Cart')
const Category = () => import('../views/Category/Category')
const Profile = () => import('../views/Profile/Profile')
const Detail = () => import('../views/detail/Detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
     },
     {
       path:'/home',
       component:Home
      },
      {
       path:'/category',
       component:Category
      },
      {
       path:'/cart',
       component:Cart
      },
      {
       path:'/profile',
       component:Profile
      },
      {
        path:'/detail/:iid',
        component:Detail
       },
  ],
  mode:'history'
})
