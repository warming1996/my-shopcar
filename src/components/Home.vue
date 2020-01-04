<template>
  <div>
    <!-- header头部公共区域 -->
    <Header title="黑马商城首页"></Header>
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="item in imageslist" :key="item.id">
        <img :src="item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 展示列表 -->
    <van-grid :border="false" :column-num="3">
      <van-grid-item>
        <router-link to="/newslist">
          <img src="../assets/home-img/menu1.png" alt="" />
          <p>新闻资讯</p>
        </router-link>
      </van-grid-item>
      <van-grid-item>
        <router-link to="/photo/list">
          <img src="../assets/home-img/menu2.png" alt="" />
          <p>图片分享</p>
        </router-link>
      </van-grid-item>
      <van-grid-item>
        <router-link to="/goods/list">
          <img src="../assets/home-img/menu3.png" alt="" />
          <p>商品购买</p>
        </router-link>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/home-img/menu4.png" alt="" />
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/home-img/menu5.png" alt="" />
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/home-img/menu6.png" alt="" />
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
    <!-- 底部 标签栏 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageslist: []
    }
  },
  created() {
    this.getImagesList()
  },
  methods: {
    // 获取轮播图的数据
    async getImagesList() {
      const { data: res } = await this.$http.get('/api/getlunbo')
      console.log(res.message)
      this.imageslist = res.message
    }
  }
}
</script>

<style lang="less" scoped>
.header_box {
  width: 100%;
  height: 40px;
  background: #1989fa;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  z-index: 1;
}
.van-swipe img {
  width: 100%;
  height: 200px;
  object-fit: cover !important;
}
.van-grid-item {
  width: 33.33333%;
  box-sizing: border-box;
}
.van-grid-item img {
  width: 60px;
}
</style>
