<template>
  <div>
    <!-- 导入头部组件 -->
    <Header backIsDisplay="true" title="我是会员"></Header>
    <!-- 加载中 -->
    <div class="box">
      <van-loading size="30px" type="spinner" color="#1989fa" vertical> </van-loading>
      <div class="hint">正在加班加点开发中， 敬请期待!</div>
    </div>
    <!-- 导入底部标签 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.box {
  margin-top: 20px;
}
.hint {
  margin-top: 10px;
  text-align: center;
}
</style>
