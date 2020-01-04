<template>
  <div>
    <!-- header头部公共区域 -->
    <Header backIsDisplay="true" addIsDisplay="true" title="搜索"></Header>
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <ul>
      <li v-for="item in list" :key="item.id">
        <van-swipe-cell>
          <span class="one">{{ item.name }}</span
          ><span class="two">商品上架时间为:{{ item.ctime | dataFormat }}</span>
          <template slot="right">
            <van-button @click="shanchu(item.id)" square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
      </li>
    </ul>
    <div class="ye">
      <h3>
        <span>搜索记录</span><span @click="clearone"><van-icon name="delete" /> </span>
      </h3>
      <span v-for="(item, index) in haha" :key="index" class="three">{{ item }}</span>
      <br />
    </div>
    <van-dialog v-model="show" title="消息确认" show-cancel-button @confirm="clear">
      您确认要删除所有历史记录吗?
    </van-dialog>
    <van-dialog v-model="showtwo" title="消息确认" show-cancel-button @confirm="cleartwo">
      您确认要删除该商品吗?
    </van-dialog>
    <!-- Footer底部区域 -->
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      list: [],
      haha: [],
      show: false,
      showtwo: false,
      id: 0
    }
  },
  created() {
    this.getlist()
  },
  methods: {
    async getlist() {
      const { data: res } = await this.$http.get('/api/getprodlist')
      this.list = res.message
    },
    async onSearch() {
      if (this.value === '') {
        this.$toast('请输入内容')
      } else {
        const { data: res } = await this.$http.get('/api/getprodlist')
        this.list = res.message
        document.querySelector('ul').style.display = 'block'
        this.haha.push(this.value)
        console.log(this.haha)
        document.querySelector('.ye').style.display = 'none'
      }
    },
    onCancel() {
      this.value = ''
      document.querySelector('ul').style.display = 'none'
      document.querySelector('.ye').style.display = 'block'
    },
    clearone() {
      this.show = true
    },
    clear() {
      this.haha = []
    },
    shanchu(id) {
      this.id = id
      this.showtwo = true
      console.log(this.id)
    },
    async cleartwo() {
      const { data: res } = await this.$http.get('/api/delproduct/' + this.id)
      console.log(res)
      this.getlist()
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  display: none;
}
h3 {
  display: flex;
  justify-content: space-between;
}
li {
  font-size: 14px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
}
.ye {
  margin: 0 10px;
}
.one {
  margin-left: 5px;
  line-height: 40px;
}
.two {
  margin-right: 30px !important;
  color: #ccc;
  line-height: 40px;
  float: right;
}
.three {
  display: inline-block;
  padding: 5px;
  margin: 5px 5px;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
}
.van-dialog {
  text-align: center;
}
.van-swipe-cell {
  width: 100%;
}

ul {
  display: none;
}
h3 {
  display: flex;
  justify-content: space-between;
}
li {
  height: 40px;
  width: 100%;
}
.one {
  margin-left: 5px;
  line-height: 40px;
}
.two {
  margin-right: 5px;
  color: #ccc;
  line-height: 40px;
  float: right;
}
.three {
  display: inline-block;
  padding: 5px;
  margin: 5px 5px;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
}
.van-dialog {
  text-align: center;
}
.van-swipe-cell {
  width: 100%;
}
</style>
