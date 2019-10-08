<template>
  <div class="main">
      <ul class="center">
        <li class="bigPicture">
          <div class="content">
            <div class="user">
              <img src="https://yanxuan.nosdn.127.net/daa4738f9298731c301e71214c754244.png" alt="" class="avatar">
              <span>选妹</span>
            </div>
            <h2>时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</h2>
            <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg" alt="" class="picture">
            <div class="see"><i class="iconfont icon-yanjing icon"></i><span>76.8k</span><span>人看过</span></div>
          </div>
          <div class="bg"></div>
        </li>
        <li class="midPicture">
          <div class="content">
            <div class="information">
              <div class="user">
                <img class="avatar" src="https://yanxuan.nosdn.127.net/6a8d774f54e8d814809be2f239e0b24b.JPG" alt="">
                <span>网易游戏：波涛</span>
              </div>
              <h2>买支词典笔，让家长好好放个假</h2>
              <p>有道词典笔2.0</p>
              <div class="see"><i class="iconfont icon-yanjing icon"></i><span>76.8k</span><span>人看过</span></div>
            </div>
            <img class="picture" src="https://yanxuan.nosdn.127.net/c9eac8ed27f531c9fb45ac9e4add02d0.jpg" alt="">
          </div>
          <div class="bg"></div>          
        </li>
        <li class="smallPicture">
          <div class="content">
              <h2>可机洗的羊绒衫，慵懒针织毛衣，轻松变时髦的心机穿搭法则</h2>
              <p>今秋人气新品</p>
              <ul>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
                <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
              </ul>
              <div class="see"><i class="iconfont icon-yanjing icon"></i><span>76.8k</span><span>人看过</span></div>
          </div>
          <div class="bg"></div>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  .main
    padding 0
    width 100%
    height 100%
    ul.center
      padding-top 150px
      padding-bottom 150px
      .bg
        height 20px
        background-color #f4f4f4
        margin 0
      li
        width 100%
        font-size 28px
        .content
          box-sizing border-box
          padding 18*2px 23px
          width 100%
          h2
            font-size 36px
            color #333
            line-height 50px
            margin-top 20px
            width 100%
            height  94px
          .see
            display flex
            align-items center
            color #999
            font-size 28px
            .icon
              font-size 36px
        .user
          .avatar
            box-sizing border-box
            width 27*2px
            height 27*2px
            border-radius 50%
            vertical-align middle
            border 1px solid #d9d9d9
            margin-right 20px
          span
            vertical-align middle
            color  #000
        &.bigPicture
          .content
            box-sizing border-box
            padding 18*2px 15*2px
            
            .picture
              margin-top 15px
              width 100%
              height 388px
              margin-bottom 15px
        &.midPicture
          .content
            display flex
            .picture 
              width 278px
              height 278px
              margin 0
            .information
              height 278px
              display flex
              flex-direction column
              justify-content space-between
              h2
                font-size 36px
                margin-bottom 10px
                -webkit-line-clamp 2
              p
                color #7f7f7f
                font-size 28px
                margin-bottom 20px
        font-size 28px
        &.smallPicture
          h2
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            line-height 94px
          p
            font-size 28px
            color #7f7f7f
          ul
            display flex
            padding 0
            flex-wrap wrap
            li
              width 166px
              height 166px
              margin-right 10px
              margin-bottom 10px
              img 
                width 166px
                height 166px
  
 
</style>
