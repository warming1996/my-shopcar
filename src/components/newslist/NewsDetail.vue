props:['id']
<template>
  <div>
    <!-- 头部导航栏 -->
    <Header backIsDisplay="true" title="新闻详情"></Header>
    <!-- Loading 加载圈 -->
    <Loading></Loading>
    <!-- 头部标题 -->
    <div v-for="item in List" :key="item.id" class="box">
      <h3 class="title">{{ item.title }}</h3>
      <div class="box_a">
        <span>发布时间:{{ item.add_time | dataFormat }}</span>
        <span>点击次数:{{ item.click }}</span>
      </div>
      <hr />
      <div v-html="item.content"></div>
      <!-- 发表评论 -->
      <Comments></Comments>
    </div>
    <!-- 底部公共区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: []
    }
  },
  created() {
    this.id = window.sessionStorage.getItem('id')
    this.getNews()
  },
  methods: {
    onLoad() {},
    async getNews() {
      const { data: res } = await this.$http.get('/api/getnew/' + this.id)
      this.List = res.message
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 95%;
  margin: auto;
}
.title {
  font-size: 14px;
  color: #1989fa;
  text-align: center;
  line-height: 30px;
  margin: 0;
  padding: 5px 0;
}
.box span {
  font-size: 13px;
}
.box_a {
  display: flex;
  justify-content: space-between;
}
.box_a span {
  color: #1989fa;
}
</style>
