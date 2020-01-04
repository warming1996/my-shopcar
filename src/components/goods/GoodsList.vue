<template>
  <div>
    <!-- header头部公共区域 -->
    <Header backIsDisplay="true" title="商品购买"></Header>
    <!-- 商品列表 -->
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="getGoodslist">
      <lazy-component>
        <van-grid :column-num="2" :border="true" :gutter="10">
          <!-- <van-grid-item icon-size="80px" v-for="(img, id) in goodsData" :key="id" :icon="img.img_url" /> -->
          <!-- <img v-for="(img, id) in goodsData" v-lazy="img.img_url" :key="id" /> -->
          <van-grid-item v-for="(item, id) in goodsData" :key="id" @click="getDetail(item.id)">
            <van-image :src="item.img_url" />
            <span>{{ item.title }}</span>
            <i
              >￥{{ item.sell_price }} <del>￥{{ item.market_price }}</del></i
            >
            <p>热卖中</p>
            <p>还剩{{ item.stock_quantity }}件</p>
          </van-grid-item>
        </van-grid>
      </lazy-component>
    </van-pull-refresh>
    <!-- 底部公共区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsData: [],
      isLoading: false
    }
  },
  created() {
    this.getGoodslist()
  },
  methods: {
    async getGoodslist() {
      const { data: res } = await this.$http.get(`/api/getgoods?pageindex=1`)
      console.log(res)
      this.goodsData = res.message
      console.log(this.goodsData)
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    getDetail(key) {
      this.$router.push(`/api/goods/detail/${key}`)
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #1989fa;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
  }
  .van-nav-bar__arrow {
    color: #fff;
  }
}
.van-grid span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  font-size: 18px;
  margin-top: 10px;
}
.van-grid i {
  width: 100%;
  background-color: #eeeeee;
  color: red;
  font-family: '楷体';
  margin-top: 15px;
}
.van-grid p {
  display: inline-block;
  width: 100%;
  color: #89898a;
  background-color: #eeeeee;
  margin: 0;
  font-size: 15px;
}
.van-grid del {
  color: #333;
}
.van-grid_content {
  padding: 0;
}
</style>
