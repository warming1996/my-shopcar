<template>
  <div>
    <header>
      <div class="back" @click="goback" v-show="backIsDisplay">
        <van-icon name="arrow-left" />
        返回
      </div>
      <div class="title">{{ title }}</div>
      <router-link to="/addgoods">
        <div class="add" v-show="addIsDisplay">添加</div>
      </router-link>
    </header>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  props: ['title', 'backIsDisplay', 'addIsDisplay'],
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 40px;
  background-color: #1989fa;
  line-height: 40px;
  font-size: 14px;
  color: white;
  .title {
    text-align: center;
  }
  .back {
    margin-left: 10px;
    width: 80px;
    position: absolute;
  }
  .add {
    width: 40px;
    position: absolute;
    right: 10px;
  }
  .back .van-icon {
    vertical-align: -15%;
  }
  .add {
    top: 0;
    right: 0;
    color: white;
  }
}
.box {
  height: 40px;
}
</style>
