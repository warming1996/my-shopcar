<template>
  <div>
    <!-- 头部标题 -->
    <div class="box">
      <div>
        <h4>发表评论</h4>
        <div class="boxs">
          <div class="boxs_a">
            <textarea placeholder="请输入留言" v-model="texsts"></textarea>
            <van-button type="info" @click="addLists">发表评论</van-button>
            <ul class="uls">
              <li v-for="(item, index) in plun" :key="index">
                <span>第{{ index + 1 }}楼 匿名用户 发表时间{{ item.add_time | dataFormat }}</span>
                <div>{{ item.content }}</div>
              </li>
            </ul>
            <van-button color="red" plain hairline type="primary">加载更多</van-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texsts: '',
      plun: []
    }
  },
  created() {
    this.id = window.sessionStorage.getItem('id')
    this.getNews()
  },
  methods: {
    onLoad() {},
    async getNews() {
      const { data: res1 } = await this.$http.get('/api/getcomments/' + this.id + '?pageindex=1')
      this.plun = res1.message
    },
    async addLists() {
      if (!this.texsts.trim()) return alert('请输入评论内容')
      const { data: res } = await this.$http.post('/api/postcomment/' + this.id, 'content=' + this.texsts)
      console.log(res)
      if (!res.status === 0) return this.$message.error('提交失败')
      this.getNews()
      this.texsts = ''
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 95%;
  margin: auto;
}
.boxs_a {
  // border-top: 1px solid #000;
  padding-top: 10px;
}
textarea {
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 10px 0 0 10px;
}
.van-button {
  width: 100%;
  margin-bottom: 10px;
}

.uls li {
  display: flex;
  flex-direction: column;
  height: 65px;
}
.uls li span {
  height: 30px;
  line-height: 30px;
  background: #cccccc;
  font-size: 13px;
}
.uls li div {
  box-sizing: border-box;
  padding-left: 10px;
  height: 35px;
  line-height: 35px;
  font-size: 12px;
}
</style>
