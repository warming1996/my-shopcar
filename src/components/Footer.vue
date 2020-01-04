<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" class="iconfont icon-index-fill"><span>首页</span></van-tabbar-item>
      <van-tabbar-item to="/vip" class="iconfont icon-icon_zhanghao"><span>会员</span></van-tabbar-item>
      <van-tabbar-item to="/shopcar" icon="cart-o"  :info="$store.state.znum">购物车</van-tabbar-item>
      <van-tabbar-item to="/api/getprodlist" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ''
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 16px;
}
.van-tabbar-item__text{
font-size: 12px;
}

.van-tabbar-item span{
  font-size: 12px;
}
</style>
