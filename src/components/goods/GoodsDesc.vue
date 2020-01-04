<template>
  <div>
    <Header backIsDisplay="true" title="图文介绍"></Header>
    <h4>{{ myList.title }}</h4>
    <hr />
    <div v-html="myList.content" class="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      const { data: res } = await this.$http.get(`/api/goods/getdesc/${this.$route.params.id}`)
      console.log(res)
      this.myList = res.message[0]
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  text-align: center;
  color: #226aff;
}
.content {
  overflow: hidden;
  padding: 0 10px;
}
</style>
