<template>
  <view>
    <van-card v-for="item in goods" :key="item.goods_id" :price="item.goods_price | toFixed" :title="item.goods_name"
      :thumb="item.goods_small_logo||defaultPic" />
  </view>
</template>

<script>
  import {
    getGoodsList
  } from "@/apis/goods.js"
  import toast from "@/utils/toast.js"
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '',
          pagenum: 1,
          pagesize: 10
        },
        isLoading: false,
        goods: [],
        total: '',
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png'
      };
    },
    methods: {
      async loadGoodsList(cb) {
        this.isLoading = true
        const res = await getGoodsList(this.queryData)
        this.isLoading = false
        this.goods = [...this.goods, ...res.message.goods]
        this.total = res.message.total
        // 请求完成之后要刷新结束cb，只有下拉刷新才会传输该关闭刷新的函数
        cb && cb()
      },
      onLoad({
        query
      }) {
        this.queryData.query = query
        this.loadGoodsList()
      },
      // 下拉刷新
      onPullDownRefresh() {
        this.queryData = {
            query: this.queryData.query,
            cid: '',
            pagenum: 1,
            pagesize: 10
          },
          this.goods = [],
          this.total = '',
          this.loadGoodsList(() => {
            uni.stopPullDownRefresh()
          })
      },

    },
    // 下拉触底
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return toast('没有更多数据了')
      if (this.isLoading) return
      this.queryData.pagenum++
      this.loadGoodsList()
    }

  }
</script>

<style lang="scss">

</style>
