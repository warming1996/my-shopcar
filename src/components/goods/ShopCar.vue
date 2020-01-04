<template>
  <div>
    <!-- header头部公共区域 -->
    <Header backIsDisplay="true" title="我的购物车"></Header>
    <!-- 主体内容 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> </van-pull-refresh>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="getshoplist"></van-pull-refresh> -->
    <van-submit-bar :price="totalPrice" button-text="提交订单" />
    <template slot-scope="">
      <van-card v-for="(item, id) in shopcarlist" :key="id" :num="item.cou" :price="item.sell_price" :title="item.title" :thumb="item.thumb_path">
        <div slot="footer">
          <van-stepper v-model="item.cou" @change="changestepp" />
        </div>
      </van-card>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      isLoading: false
    }
  },
  created() {},
  mounted() {
    this.getshoplis()
    this.changestepp()
  },
  methods: {
    ...mapActions(['getshoplist']),
    getshoplis() {
      this.$store.dispatch('getshoplist')
    },
    changestepp() {
      let w = this.$store.getters.changestepper
      this.$store.commit('uploadtotal', w)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
    }
  },
  computed: {
    ...mapState(['shopcarlist', 'totalPrice']),
    ...mapGetters(['changestepper'])
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar__text {
  color: #fff;
}
.van-nav-bar {
  background-color: #1989fa;
}
.van-nav-bar__title {
  color: #fff;
}
.van-icon,
.van-icon::before {
  color: #fff;
}
.van-stepper__plus {
  border-radius: 0 4px 4px 0;
}
</style>
