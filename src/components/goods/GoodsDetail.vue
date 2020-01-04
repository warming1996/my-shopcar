<template>
  <div>
    <Header backIsDisplay="true" title="商品详情"></Header>
    <div style="padding:10px">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in my_Img" :key="index">
          <img v-lazy="item.src" alt="" />
        </van-swipe-item>
      </van-swipe>
      <!-- 详情页 -->
      <van-card centered>
        <div slot="tags">
          <h3>{{ my_shuju.title }}</h3>
          <span class="shichang"
            >市场价: <del> {{ my_shuju.market_price }}</del
            >&nbsp;&nbsp; 销售价</span
          >
          <span class="xiaoshou"> ¥ {{ my_shuju.sell_price }}</span>
        </div>
        <div class="shuliang" slot="tags">
          <div class="shichang">购买数量</div>
          <van-stepper v-model="value" input-width="40px" button-size="32px" />
        </div>
        <div slot="footer">
          <van-button type="info" size="small">立即购买</van-button>
          <van-button type="danger" size="small" @click="getNum(my_shuju.id)">加入购物车</van-button>
        </div>
      </van-card>
      <!-- 商品参数页写入 -->
      <div class="xiangqing">
        <h5>商品参数</h5>
        <div class="storelist">
          <p>商品货号: {{ my_shuju.goods_no }}</p>
          <p>库存情况: {{ my_shuju.stock_quantity }}件</p>
          <p>上架时间: {{ my_shuju.add_time }}</p>
        </div>
        <van-button plain type="info" size="large" @click="tiaozhuan(my_shuju.id)">图文介绍</van-button>
        <van-button plain type="danger" size="large" @click="plun(my_shuju.id)">商品评论</van-button>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      value: '',
      my_shuju: [],
      my_Img: []
    }
  },
  created() {
    this.getList()
    this.getImg()
  },
  mounted() {},
  methods: {
    // 标题的请求参数
    async getList() {
      const { data: res } = await this.$http.get(`/api/goods/getinfo/${this.$route.params.id}`)
      // console.log(res)
      // if (res.status === 0) return alert('请求失败,请刷新再试')
      this.my_shuju = res.message[0]
      console.log(this.my_shuju)
    },
    // 轮播图请求
    async getImg() {
      const { data: res } = await this.$http.get(`/api/getthumimages/${this.$route.params.id}`)
      this.my_Img = res.message
    },
    // 跳转图文详情
    tiaozhuan(k) {
      this.$router.push(`/api/goods/getdesc/${k}`)
    },
    // 跳转评论页面
    plun(k) {
      this.$router.push(`/api/goods/comments/${k}`)
    },
    // 购物车添加
    getNum(id) {
      this.$store.commit('addcarlist', { id: id, num: this.value })
      this.$toast.success('已加入购物车')
    }
  },
  computed: {
    ...mapState(['shopcarlist', 'xinzenshop'])
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  border: 1px solid #ccc;
  overflow: hidden;
  width: 100%;
  border-radius: 3px;
  img {
    width: 200px;
    height: 200px;
    display: block;
    margin: auto;
  }
}

.van-card {
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
  padding: 15px;
  h3 {
    margin-top: 0;
    border-bottom: 2px solid #ccc;
  }
  .shichang {
    color: #666;
    font-size: 16px;
    margin-left: 10px;
  }
  .xiaoshou {
    color: #f00;
    font-weight: 600;
    font-size: 18px;
  }
  .van-button {
    float: left;
    margin-top: 8px;
  }
}
.shuliang {
  float: left;
  margin-top: 10px;
  div {
    float: left;
  }
  .van-stepper {
    margin-left: 15px;
    margin-top: -4px;
  }
}
.xiangqing {
  margin-top: 10px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  h5 {
    margin: 0;
  }
  .storelist {
    margin-top: 10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 0 8px;
    p {
      color: #8f8f94;
    }
  }
  .van-button {
    margin-top: 10px;
    border-radius: 5px;
  }
}
</style>
