<template>
  <div class="home">
    <Header class="header">
      <div slot='top' class='top'>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" >
        <div class="input" >
          <span class="iconfont icon-fangdajing icon"></span>
          <span>
            搜索商品，共xxxxx件好物
          </span>
        </div>
        <div class='logIn'>登录</div>
      </div>
      <div slot='bottom' class="bottom" >
        <div class="oneLine" v-show="true">
          <div class="shopList" >
            <ul class="shops" >
              <li v-for="(item,index) in arr" :key="index" :class="{active:index===0}"><a>{{item}}</a></li>
            </ul>
          </div>
        </div>
        <div class='shopList-div' v-show="false">
          <h2>全部频道</h2>
          <ul>
            <li v-for="(item,index) in arr" :key="index" :class="{active:index===0}"><a>{{item}}</a></li>
          </ul>
        </div>
        <div class="icon"><span class="iconfont icon-jiantouxia"></span></div>
      </div>
    </Header>
    <div class="homeContent" ref="home">
      <div class="main">
        <div class="swiper-container1">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination1"></div>
        </div>
        <div class="pic-bottom">
          <ul>
            <li><a>网易自营品牌</a></li>
            <li><a>30天无忧退货</a></li>
            <li><a>48小时快速退款</a></li>
          </ul>
        </div>
        <div class="Cfs">
          <ul>
            <li v-for="(item, index) in arr1" :key="index">
              <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
              <p>{{item}}</p>
            </li>
          </ul>
        </div>
        <div class="picture">
          <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
        </div>
        <div class="recommend">
          <ul>
            <li>
              <p>实时好评</p>
              <p>精选优质好物</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt="">
                <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt="">
              </div>
            </li>
            <li>
              <p>实时好评</p>
              <p>精选优质好物</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt="">
                <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt="">
              </div>
            </li>
            <li>
              <p>实时好评</p>
              <p>精选优质好物</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt="">
                <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt="">
              </div>
            </li>
            <li>
              <p>实时好评</p>
              <p>精选优质好物</p>
              <div>
                <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt="">
                <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="privateCart">
          <h2>私人定制</h2>
          <div class="swiper-container-cart">
            <div class="swiper-wrapper">
                <div class="swiper-slide cartList">
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                </div>
                <div class="swiper-slide cartList">
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                </div>
                <div class="swiper-slide cartList">
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                  <div class="cart">
                    <img src="http://yanxuan.nosdn.127.net/827d9d95a1710636a1ebf99e1e61f93d.png" alt="">
                    <p><span>男士优质小牛皮手工正装鞋</span><span>¥659</span></p>
                  </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination footer"></div>
          </div>
        </div>
        <div class="bg"></div>
        <div class="limitedTime">
          <div class="timeHeader">
            <div class="time">
              <h2>限时购</h2>
              <span class="hour">03</span>
              <span class="sparate">:</span>
              <span class="minute">04</span>
              <span class="sparate">:</span>
              <span class="sesond">05</span>
            </div>
            <div class="more">更多></div>
          </div>
          <ul>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg"></div>
        <div class="product">
          <div class="timeHeader">
            <div class="time">
              <h2>限时购</h2>
            </div>
            <div class="more">更多></div>
          </div>
          <ul>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg"></div>
        <div class="recommendPer">
          <div class="timeHeader">
            <div class="time">
              <h2>人气推荐</h2>
            </div>
            <div class="more">更多></div>
          </div>
          <div class="picBig">
            <img src="http://yanxuan.nosdn.127.net/e52cb767feb1578fbb7f2b77d70267c8.png" alt="">
            <div class="text">
              <h3>21s素暖轻磨毛四件套</h3>
              <p class="description">厚实粗犷肌理感，越睡越舒适</p>
              <p class="price">¥399</p>
            </div>
          </div>
          <ul>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newName">
                  严选X颐和园 联名款2019...
                </span>
                <span class="newPri">¥289</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg2"></div>
        <div class="specialTopic">
          <div class="timeHeader">
            <div class="time">
              <h2>专题精选</h2>
            </div>
            <div class="more">更多></div>
          </div>
          <div ref="topic" class="topic">
            <ul>
              <li>
                <img src="https://yanxuan.nosdn.127.net/571e99aba1df41c9a7098a8c0b83526a.jpg" alt="">
                <div class="text">
                  <p class="title">一个接近满分的黄桃罐头是怎样的？</p>
                  <p class="introduction">¥肉质剔透，甘润适口</p>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/571e99aba1df41c9a7098a8c0b83526a.jpg" alt="">
                <div class="text">
                  <p class="title">一个接近满分的黄桃罐头是怎样的？</p>
                  <p class="introduction">¥肉质剔透，甘润适口</p>
                </div>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/571e99aba1df41c9a7098a8c0b83526a.jpg" alt="">
                <div class="text">
                  <p class="title">一个接近满分的黄桃罐头是怎样的？</p>
                  <p class="introduction">¥肉质剔透，甘润适口</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg"></div>
        <div class="crowdfunding">
          <div class="timeHeader">
            <div class="time">
              <h2>众筹</h2>
            </div>
            <div class="more">更多></div>
          </div>
          <ul>
            <li>
              <img src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png" alt="">
              <div class="text">
                <p>易武贡茶 迷你普洱茶饼100克</p>
                <p class="price">¥198起</p>
                <div class="line">
                  <div class="allLine">
                    <div class="successLine" style="width:216%"></div>
                  </div>
                  <span>216%</span>
                </div>
                <div class="personNum">217人已支持</div>
              </div>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/f0007d7b330b5ed3e88f43f27f9f565a.png" alt="">
              <div class="text">
                <p>易武贡茶 迷你普洱茶饼100克</p>
                <p class="price">¥198起</p>
                <div class="line">
                  <div class="allLine">
                    <div class="successLine" style="width:216%"></div>
                  </div>
                  <span>216%</span>
                </div>
                <div class="personNum">217人已支持</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="bg2"></div>
        <div class="pictureCard">
          <img class="bigPic" src="https://yanxuan.nosdn.127.net/1a6763ce33440783cc6700fd132b6375.jpg" alt="">
          <div class="list" ref="Piclist">
            <ul>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/d391ff6177d8e9a6b29356c15ba97713.png" alt="">
                <div class="text">
                  <p>20寸 纯PC“铝框”（非全铝）登机箱</p>
                  <p class="price">¥349</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg2"></div>
        <div class="bottom">
          <div class="btn">
            <a><span>下载APP</span></a>
            <a><span>电脑版</span></a>
          </div>
          <div class="text">
            <p>耶梦加德 版权所有 ©copyright</p>
            <p>2019</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core';
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css';
  export default {
    data() {
      return {
        arr:['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子'],
        arr1:[]
      }
    },
    mounted() {
      new BScroll('.shopList', {
        scrollX: true
      })
      new BScroll(this.$refs.topic, {
        scrollX: true
      })
      new BScroll(this.$refs.Piclist, {
        scrollX: true
      })

      new BScroll(this.$refs.home, {})
      new Swiper ('.swiper-container1', {
        loop: true, 
        pagination: {
          el: '.swiper-pagination1',
        }
      })
      new Swiper ('.swiper-container-cart', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })        
      for (let index = 0; index < 10; index++) {
        this.arr1.push('居家')
      }
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .homeContent
    width 100%
    height 100%
  .home
    width 100%
    height 100%
    .homeContent
      padding-bottom 450px
  .main
    padding-top 150px
    padding-bottom 900px
    .bottom
      width 100%
      height 274px
      background-color #414141
      border-top 1px solid rgba(0,0,0,.15)
      font-size 24px
      .text
        color #999
        text-align center
        p
          margin 10px 0
      .btn
        color #fff
        height 65px
        font-weight bold
        display flex
        margin 40px 0
        justify-content center
        a
          display block
          color #fff
          padding 10px 20px
          border 1px solid #fff
          display flex
          justify-content center
          align-items center
          margin-right 40px
    .bg2
      height 20px
      background-color #f4f4f4
      box-sizing border-box
      border-top 1px solid rgba(7,17,27,0.1)
      border-bottom 1px solid rgba(7,17,27,0.1)
    .pictureCard
      .bigPic
        width 100%
        height 400px 
      .list
        width 100%
        height 333px
        ul
          height 333px
          display flex
          float left
          height 100%
          li
            width 200px
            height 333px
            margin-right 20px
            font-size 24px
            line-height 36px
            background-color #fff
            img
              width 200px
              height 200px
              background-color #f4f4f4
            p:nth-child(1)
              height 72px
              overflow hidden
              color #000
            .price
              color #b4282d
    .crowdfunding
      ul
        padding-left 20px
        li
          display flex
          padding-top 20px
          border-top 1px solid #7f7f7f
          img
            width 210px
            height 210px
            background #f5f5f5
          .text
            height 250px
            margin-left 30px
            font-size 24px
            color #7f7f7f
            line-height 36px
            .price
              margin-top 7.5px
            .line
              display flex
              .allLine
                width 360px
                height 6px
                margin-top 15px
                background-color  #d8d8d8
                overflow hidden
                .successLine
                  width 0
                  height 6px
                  background-color #fea438
            .personNum
              margin-top 40px
    .specialTopic
      .topic
        width 100%
        height 393px
        ul
          display flex
          float left
          li
            width 480px
            height 393px
            margin-right 50px
            img
              width 480px
              height 267px
            .text
              height 100px
              line-height 40px
              padding-left 20px
              .title
                font-size 28px
                width 100%
                color #333
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .introduction
                font-size 24px
                color #7f7f7f
    .recommendPer
      .picBig
        height 320px
        width 100%
        display flex
        font-size 24px
        padding-left 20px
        align-items center
        .text
          margin  0 50px
          line-height 36px
          h3
            color #333
          .description
            color #7f7f7f
          .price
            color #b4282d
        img
          width 280px
          height 280px
      ul
        display flex
        flex-wrap wrap
        padding-left 20px
        li
          width 216px
          height 318px
          margin-right 20px
          img
            width 216px
            height 216px
            background-color #eee
          div
            height 100px
            line-height 16px
            span  
              font-size 24px
              &.newName
                color #7f7f7f
              &.newPri
                color #b4282d
    .product
      ul
        display flex
        flex-wrap wrap
        padding-left 20px
        li
          width 216px
          height 318px
          margin-right 20px
          img
            width 216px
            height 216px
            background-color #eee
          div
            height 100px
            line-height 16px
            span  
              font-size 24px
              &.newName
                color #7f7f7f
              &.newPri
                color #b4282d
    .bg
      height 20px
      margin 20px 0 
      background-color #f4f4f4
    .limitedTime
      ul
        display flex
        flex-wrap wrap
        padding-left 20px
        li
          width 216px
          height 318px
          margin-right 20px
          img
            width 216px
            height 216px
            background-color #eee
          div
            height 100px
            line-height 50px
            text-align center
            span  
              font-size 28px
              margin-right 20px
              &.newPri
                color #b4282d
              &.oldPri
                font-size 24px
                color #7f7f7f
                text-decoration line-through
    .timeHeader
      display flex
      justify-content space-between
      line-height 100px
      
      .more
        font-size 28px
        line-height 100px
        margin-right 50px
      h2
        font-size 32px
        margin 0 20px 0 50px      
      .time
        display flex
        align-items center
        .hour,.minute,.sesond
          font-size 24px
          display block
          width 36px
          height 36px
          text-align center
          line-height 36px
          background-color #333
          color #fff
        .sparate
            font-size 24px
            line-height 36px
            margin 0 20px
    .privateCart
      position relative
      margin-bottom 80px
      .footer
        bottom -40px
        .swiper-pagination-bullet-active
          background-color  #b4282d
      .cartList
        display flex
        width 100%
        .cart
          width 210px
          height 311px
          margin-left 20px
          img
            width 216px
            height 216px
            background-color #f5f5f5
          p
            font-size 24px
            margin-top 12px
            margin-bottom 10px
            line-height 32px
            color #333
            span:nth-child(2)
              color #b4282d
      h2
        padding-left 30px
        height 100px
        line-height 100px
        font-size 32px
        background-color #fff
    .recommend
      ul
        display flex
        flex-wrap wrap
        justify-content center
        li
          background-color #f5f5f5
          box-sizing border-box
          width 343px
          height 260px
          padding 20px 0 0 20px
          display flex
          flex-direction column
          justify-content space-between
          margin-right 10px
          p:nth-child(1)
            font-size 32px
          p:nth-child(2)
            font-size 24px
            color #7f7f7f
          img 
            width 150px
            height 150px
            margin-right 10px
    .picture
      height 160px
      margin-top 20px
      margin-bottom 40px
      img
        width 100%
        height 100%
    .Cfs
      ul
        display flex
        flex-wrap wrap
        li
          width 110px
          height 156px
          text-align center
          margin 10px 20px 0px 
          img
            width 110px
            height 110px
          p
            font-size 24px
            line-height 36px
    .pic-bottom
      padding 0 30px
      height 72px
      line-height 72px
      ul
        display flex
        justify-content space-around
        li
          a
            font-size 24px
            color #b4282d
  .swiper-container1
    position relative
    .swiper-pagination-bullets
      position absolute
      bottom 50px
      left 50%
      z-index 10
      transform: translateX(-120px)
      .swiper-pagination-bullet
        width: 40px
        height: 4px
        &.swiper-pagination-bullet-active
          background  #b4282d
  .header
    position relative
    font-size 32px
    z-index 20
  .top
    display flex
    padding 20px
    align-items center
    img
     margin-right 10px
     height 40px
     vertical-align middle
    .input
      width 486px
      height 56px
      display flex
      justify-content center
      line-height 56px
      background #ededed
      vertical-align middle
      font-size 28px
      .icon
        font-size 36px
    .logIn
      width 78px
      height 44px
      box-sizing border-box
      border 1px solid #b4282d
      margin-left 8px
      text-align center
      line-height 44px
      font-size 24px
      color #b4282d
      vertical-align middle
  .bottom
    position relative
    z-index 20px
    .shopList-div
      height 75px
      line-height 75px
      background #fff
      h2
        padding 0 16px
        font-size 28px
      ul
        padding 0 16px
        background #fff
        display flex
        flex-wrap wrap
        li
          width 165px
          height 64px
          background #fafafa
          border 2px solid #d9d9d9
          margin-right 10px
          margin-bottom 20px
          a
            font-size 30px
            color #333
            display block
            width 100%
            height 100%
            text-align center
            line-height 64px
    .oneLine
      position relative
      display flex
      justify-content space-between
      height 75px
      .shopList
        width 100%
        .shops
          float left
          display flex
          height 100%
          padding-right 100px
          li
            width 150px
            height 66px
            text-align center
            box-sizing border-box
            padding 0 16px
            line-height 66px
            flex 0 0 150px
            a
              font-size 28px
              box-sizing border-box
              height 100%
              display block
              margin 0 auto
            &.active
              a
                border-bottom 6px solid #b4282d
                color #b4282d
              
    .icon
        position absolute
        right  0
        top  0
        z-index 2
        width 100px
        height 60px
        text-align center
        line-height 60px
        background #fff
        .icon-jiantouxia
          font-size 28px
</style>
