<template>
  <div>
    <!-- header头部公共区域 -->
    <Header backIsDisplay="true" title="新闻资讯"></Header>
    <!-- 加载组件 -->
    <Loading></Loading>
    <!--新闻界面  -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <ul>
        <li v-for="item in list" :key="item.id" @click="saveId(item.id)" class="van-card">
          <router-link to="/news/detail">
            <img :src="item.img_url" alt />
            <div class="box">
              <p class="title">{{ item.title }}</p>
              <div class="box_a">
                <span class="time">发表时间:{{ item.add_time | dataFormat }}</span>
                <span class="click">点击:{{ item.click }}次</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </van-list>
    <!-- 底部区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{ add_time: '' }],
      loading: false,
      finished: false,
      time: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getList() {
      const { data: res } = await this.$http.get('/api/getnewslist')
      this.list = res.message
      console.log(this.list)
      this.finished = true
    },
    // 存储点击的id
    saveId(id) {
      sessionStorage.setItem('id', id)
    }
  }
}
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.van-card {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  margin: 0 10px;
  padding: 10px;
}
img {
  width: 42px;
  height: 42px;
}
a {
  display: flex;
}
.title {
  font-size: 14px;
  font-weight: 700;
  color: #000;
  // text-overflow: ellipsis;
  overflow: hidden;
}
a span {
  font-size: 12px;
}
.time {
  float: left;
}
.click {
  float: right;
}

.box {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
}
.box_a {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #1989fa;
}
</style>
