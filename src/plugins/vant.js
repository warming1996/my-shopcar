// 导入vue
import Vue from 'vue'
import {
  NavBar,
  Button,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Loading,
  Tab,
  Tabs,
  Icon,
  Row,
  Col,
  Search,
  Toast,
  SwipeCell,
  Dialog,
  Field,
  Cell,
  CellGroup,
  Notify,
  Image,
  ImagePreview,
  List,
  PullRefresh,
  Lazyload,
  SubmitBar,
  Card,
  Stepper
} from 'vant'

// 挂载 Button 组件
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid).use(GridItem)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Loading)
Vue.use(Tab).use(Tabs)
Vue.use(Icon)
Vue.use(Row).use(Col)
Vue.use(Search)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(SwipeCell)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Notify)
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(SubmitBar)
Vue.use(Card)
Vue.use(Stepper)
