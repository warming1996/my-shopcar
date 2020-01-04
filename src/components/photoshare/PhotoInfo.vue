<template>
  <div>
    <!-- header头部公共区域 -->
    <Header backIsDisplay="true" title="图片详情"></Header>
    <!-- 图片详情区域 -->
    <div v-for="item in imgInfo" :key="item.id" class="box">
      <h4>{{ item.title }}</h4>
      <p class="time">
        <span>点击:{{ item.add_time | dataFormat }}</span>
        <span>发布时间:{{ item.click }}</span>
      </p>
      <hr />
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(item, index) in imgArr" :key="item.id">
          <van-image :src="item.src" @click="preview(index)" />
        </van-grid-item>
      </van-grid>
      <div>
        {{ item.content }}
      </div>
    </div>
    <!-- 发表评论 -->
    <Comments></Comments>
    <!-- 底部公共区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
  data() {
    return {
      id: 0,
      imgArr: [],
      imgInfo: [],
      texsts: '',
      plun: [],
      loading: false,
      finished: false
    }
  },
  created() {
    this.id = window.sessionStorage.getItem('id')
    this.getImgArr()
    this.getInfomation()
  },
  methods: {
    // 获取缩略图数组数据
    async getImgArr(imgId) {
      const { data: res } = await this.$http.get('api/getthumimages/' + this.id)
      if (res.status !== 0) {
        return this.$toast.fail('获取缩略图数组数据失败！')
      }
      this.imgArr = res.message
      console.log(res.message)
    },
    // 获取图片详情
    async getInfomation() {
      const { data: res } = await this.$http.get('api/getimageInfo/' + this.id)
      if (res.status !== 0) {
        return this.$toast.fail('获取图片详情数据失败！')
      }
      this.imgInfo = res.message
      console.log(res.message)
    },
    // 图片预览
    preview(i) {
      const array = []
      this.imgArr.forEach(item => {
        array.push(item.src)
      })
      ImagePreview({
        images: array,
        startPosition: i,
        onClose() {
          // do something
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 0 10px;
}
h4 {
  text-align: center;
  color: #26a2ff;
  font-size: 15px;
}
.time {
  display: flex;
  font-size: 13px;
  color: #8f8f94;
  justify-content: space-between;
}
.box_a {
  display: flex;
  justify-content: space-between;
}
.box_a span {
  color: #1989fa;
}
</style>
