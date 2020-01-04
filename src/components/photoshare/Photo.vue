<template>
  <div>
    <!-- header头部公共区域 -->
    <Header backIsDisplay="true" title="图片分享"></Header>
    <!-- 标签页滚动 -->
    <div class="pic">
      <van-tabs @click="getImageList">
        <van-tab title="全部" name="0">
          <ul class="img_list">
            <li v-for="item in imagelist" :key="item.id">
              <div class="van-image">
                <router-link to="/photo/info">
                  <img :src="item.img_url" alt="" lazy="loaded" class="van-image__img" @click="saveId(item.id)" />
                </router-link>
              </div>
              <div class="botInfo">
                <p>{{ item.title }}</p>
                <p>{{ item.zhaiyao }}</p>
              </div>
            </li>
          </ul>
        </van-tab>
        <!-- 分类标签 -->
        <van-tab v-for="item in photolist" :title="item.title" :key="item.id" :name="item.id">
          <ul class="img_list">
            <li v-for="item in imagelist" :key="item.id">
              <div class="van-image">
                <router-link to="/photo/info">
                  <img :src="item.img_url" alt="" lazy="loaded" class="van-image__img" @click="saveId(item.id)" />
                </router-link>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
    <!-- Footer底部区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagelist: [],
      photolist: []
    }
  },
  created() {
    this.getImageList(0)
    this.getPhotoList()
  },
  methods: {
    // 获取图片列表数据
    async getImageList(name) {
      console.log(name)
      const { data: res } = await this.$http.get('/api/getimages/' + name)
      if (res.status !== 0) {
        return this.$toast.fail('获取图片分类失败！')
      }
      console.log(res.message)
      this.imagelist = res.message
    },
    // 获取图片分类数据
    async getPhotoList() {
      const { data: res } = await this.$http.get('/api/getimgcategory')
      if (res.status !== 0) {
        return this.$toast.fail('获取图片分类失败！')
      }
      console.log(res.message)
      this.photolist = res.message
    },
    // 存储图片的id
    saveId(id) {
      sessionStorage.setItem('id', id)
    }
  }
}
</script>

<style lang="less" scoped>
.pic {
  height: 40px;
}
.img_list {
  padding: 0 10px;
}
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.img_list li {
  position: relative;
  padding-top: 10px;
}
.van-image {
  width: 100%;
}
.van-image__img {
  display: block;
  width: 100% !important;
  height: 100% !important;
}
.img_list li .botInfo {
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  height: 90px;
}
.img_list li .botInfo p {
  margin: 5px;
  font-size: 12px;
}
</style>
