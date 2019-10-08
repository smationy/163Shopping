<template>
  <ul class="footer">
    <li :class="{active: $route.path === '/home' }">
      <div class="iconfont icon-1 icon" :class="{active: $route.path === '/home' }"></div>
      <div>首页</div>
    </li>
    <li :class="{active: $route.path === '/classification' }">
      <div class="iconfont icon-fenlei icon" :class="{active: $route.path === '/classification' }"></div>
      <div>分类</div>
    </li>
    <li :class="{active: $route.path === '/knowledge' }">
      <div class="iconfont icon-tupian icon" :class="{active: $route.path === '/knowledge' }"></div>
      <div>识物</div>
    </li>
    <li :class="{active: $route.path === '/shops' }">
      <div class="iconfont icon-weibiaoti-- icon" :class="{active: $route.path === '/shops' }"></div>
      <div>购物车</div>
    </li>
    <li :class="{active: $route.path === '/personal' }">
      <div class="iconfont icon-geren icon" :class="{active: $route.path === '/personal' }"></div>
      <div>个人</div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
@import '../../static/stylus/mixins.stylus'
  .footer
    position fixed
    bottom 0
    margin-top -100px
    width 100%
    font-size 24px
    height 100px
    display flex
    align-items center
    background  #fff
    &::before
      content ''
      position absolute
      z-index 200
      left 0
      bottom 0
      width 100%
      height 1px
      background-color $color
      transform scaleY(0.5)
    li
      width 150px
      height 70px
      text-align center
      &.active
        color red
      .icon
        font-size 40px
        margin-bottom  10px
        color #aaa
        &.active
          color red
</style>
