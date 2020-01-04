<template>
  <div>
    <!-- 头部 -->
    <Header backIsDisplay="true" title="商品评价"></Header>
    <!-- 评论板块 -->
    <Comments></Comments>
    <!-- 底部区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0
    }
  },
  created() {
    this.id = this.$route.params.id
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
