<template>
  <div>
    <!-- Loading 加载圈 -->
    <van-loading type="spinner" color="#1989fa" vertical />
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      const time = document.querySelector('.van-loading ')
      time.style.display = 'none'
    }, 800)
  }
}
</script>

<style lang="less" scoped></style>
