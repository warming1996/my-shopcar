<template>
  <div>
    <!-- 头部区域 -->
    <Header backIsDisplay="true" title="添加商品"></Header>
    <!-- 添加区域 -->
    <van-cell-group>
      <van-field placeholder="请输入商品名称" v-model="value" />
    </van-cell-group>
    <!-- 添加按钮 -->
    <van-button type="info" class="btn" @click="add">添加商品</van-button>
    <!-- 底部区域 -->
    <Footer></Footer>
    <van-dialog v-model="show" title="消息确认" show-cancel-button @confirm="addone">
      您确认要添加此商品吗?
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      show: false
    }
  },
  created() {},
  methods: {
    add() {
      this.show = true
    },
    async addone() {
      const { data: res } = await this.$http.post('/api/addproduct', 'name=' + this.value)
      console.log(res)
      this.value = ''
    }
  }
}
</script>

<style lang="less" scoped>
.btn {
  margin: 50px 15px 0 15px;
  width: 26em;
}
.van-dialog {
  text-align: center;
}
</style>
