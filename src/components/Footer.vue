<template>
  <div>
    <div class="box1">
        <van-row type="flex">
          <van-col span="6">
            <router-link to="/home" :style="'color:' + homeLight">
              <i class="iconfont icon-index-fill"></i>
              <div>首页</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/vip" :style="'color:' + vipLight">
              <i class="iconfont icon-icon_zhanghao"></i>
              <div>会员</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/shopcar">
              <van-icon name="cart-o" :info="$store.state.znum" />
              <div>购物车</div>
            </router-link>
          </van-col>
          <van-col span="6">
            <router-link to="/api/getprodlist" :style="'color:' + seachLight">
              <van-icon name="search" />
              <div>搜索</div>
            </router-link>
          </van-col>
        </van-row>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  props: ['homeLight', 'vipLight', 'seachLight'],
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.box1 {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-left:35px;
  background-color: white;
  a {
    color: #7d7e80;
  }
  div {
    font-size: 12px;
  }
}
.van-icon {
  font-size: 18px;
}
.box {
  height: 40px;
  margin-top: 40px;
}
</style>
