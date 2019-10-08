<template>
  <div class="classification">
    <Header class="Header">
      <div class="input" slot="top">
        <i class="iconfont icon-fangdajing icon"></i>
        <span>搜索商品，共xxxxxx件好物</span>
      </div>
    </Header>
    <div class="classContent">
      <div class="titleSwiper">
        <ul class="titles">
          <li class="active">推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
        </ul>
      </div>
      <div class="swiperCate">
        <div class="cate">
          <img class="swiper" src="https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg?imageView&quality=75&thumbnail=0x196" alt="">
          <ul class="cates">
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>明星商品</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core';
  export default {
    mounted() {
      new BScroll('.titleSwiper',{})
      new BScroll('.cate',{})

    }
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  .classification
    height 100%
    width 100%
    .classContent
      display flex
      padding-top 90px
      padding-bottom 150px
      height 100%
      .swiperCate
        height 100%
        .cate
          padding 15px 30px 100px
          .swiper 
            width 100%
            height 192px
          .cates
            display flex
            flex-wrap wrap
            font-size 28px
            margin-top 20px
            li
              width 144px
              height 216px
              margin-right 30px
              text-align center
              img
                width 144px
                height 144px
      .titleSwiper
        width 163px
        height 100%
        font-size 28px
        .titles
          li
            box-sizing border-box
            width 163px
            height 50px
            text-align center
            line-height 50px
            margin-top 40px
            color #7e8c8d
            &:nth-child(1)
              margin-top 20px
            &.active
              color #b4282d
              border-left 6px solid #b4282d
  .Header
    height 89px
    font-size 28px
    display flex
    .input
      width 675px
      height 56px
      background-color #ededed
      border-radius 10px
      margin auto
      text-align center
      line-height 56px
      color #000
      .icon 
        color #7f7f7f
        font-size 34px
        margin-right 10px
</style>
 