import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Photo from '../components/photoshare/Photo.vue'
import Vip from '../components/vip/Vip.vue'
import Search from '../components/search/Search.vue'
import AddGoods from '../components/search/AddGoods.vue'
import PhotoInfo from '../components/photoshare/PhotoInfo.vue'
import NewsList from '../components/newslist/NewsList.vue'
import NewsDetail from '../components/newslist/NewsDetail.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import ShopCar from '../components/goods/ShopCar.vue'
import GoodsDetail from '../components/goods/GoodsDetail.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComments from '../components/goods/GoodsComments.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/photo/list', component: Photo },
  { path: '/vip', component: Vip },
  { path: '/api/getprodlist', component: Search },
  { path: '/addgoods', component: AddGoods },
  { path: '/photo/info', component: PhotoInfo },
  { path: '/newslist', component: NewsList },
  { path: '/news/detail', component: NewsDetail },
  { path: '/goods/list', component: GoodsList },
  { path: '/shopcar', component: ShopCar },
  { path: '/api/goods/detail/:id', component: GoodsDetail },
  { path: '/api/goods/getdesc/:id', component: GoodsDesc },
  { path: '/api/goods/comments/:id', component: GoodsComments }
]

const router = new VueRouter({
  routes
})

export default router
