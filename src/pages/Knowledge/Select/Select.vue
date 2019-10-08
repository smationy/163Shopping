<template>
  <div class="Select">
    <div class="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0ab7c3d8e18630076aaf32e2e70ae41e.jpg?imageView&quality=75&thumbnail=670x371" alt=""></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0ab7c3d8e18630076aaf32e2e70ae41e.jpg?imageView&quality=75&thumbnail=670x371" alt=""></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/0ab7c3d8e18630076aaf32e2e70ae41e.jpg?imageView&quality=75&thumbnail=670x371" alt=""></div>
        </div>
      </div>
      <div class="bg"></div>
      <div class="collection">
        <h2>建议征集 <i class="iconfont icon-jiantou2"></i></h2>
        <p class="standard">告诉我们，你的好物标准</p>
        <div class="board">
          <img src="https://yanxuan.nosdn.127.net/9114b528faf4e23e364fcc1d4e3da9df.jpg?imageView&quality=75&thumbnail=272x200" alt="">
          <div class="text">
            <p >你想要一款什么样的菜板？</p>
            <div class="icon">
              <div>
                <i class="iconfont icon-xinxi"></i>
                <span>7条建议</span>
              </div>
              <div>
                <i class="iconfont icon-yanjing"></i>
                <span>118人看过</span>
              </div> 
            </div>
          </div>
        </div>
        <p class="text">每一个厨房都离不开一块好菜板，卫生、环保的同时，又要兼顾美感。你会希望严选新推出的菜板是使用什么材质都呢？造型是圆形还是长方形？快来和选妹谈谈你的想法吧！</p>
        <div class="btn"><span>我要建议</span></div>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core';
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css';
  export default {
    mounted() {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        } //可选选项，自动滑动
      }) 
      new BScroll('.Select',{})
    },
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  .Select
    width 100%
    height 100%
  .main
    padding 0
    padding-top 88px
    padding-bottom 150px
    .collection
      padding 18*2px 15*2px 20*2px
      color #7f7f7f
      font-size 28px
      .btn
        width 100%
      .text
        font-size 24px
        line-height 40px
      .board
        border-radius 2px
        display flex
        background-color #f4f4f4
        padding 12*2px 15*2px
        justify-content space-between
        .text
          margin-left 8*2px
          padding 18*2px 9*2px 16*2px
          display flex
          flex-direction column
          justify-content space-between
          p
            font-size 30px
            color #333
          .icon
           display flex
           font-size 24px
           div:nth-child(2)
            margin-left 30px
           i
            font-size 28px
        img 
          height 100*2px
          width 136*2px
      .standard
        margin-bottom 20px
        font-size 24px
        text-align center
      h2
        text-align center
        font-size 36px
        margin-bottom 20px
        color #333
        i
          font-size 36px
          color #a7a7a7
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          text-align center
          margin 0 auto 
          img
            width 334.98 * 2px
            height 196*2px
 
</style>
