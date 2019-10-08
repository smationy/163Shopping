<template>
  <div class="Knowledge">
    <Header class="header">
      <div slot="top" class="headerTop">
        <i class="iconfont icon-1 iconHome"></i>
        <div class="text">
          <h2 :class="{active:$route.path === '/knowledge/find'}">发现</h2>
          <h2 :class="{active:$route.path === '/knowledge/select'}">甄选家</h2>
        </div>
        <div class="icon">
          <i class="iconfont icon-fangdajing magnifier "></i>
          <i class="iconfont icon-gouwuche2 shoppingCart"></i>
        </div>
      </div>
      <div slot="bottom" class="headerBottom" v-if="$route.path === '/knowledge/find'">
        <ul>
          <li class="active">推荐</li>
          <li>好货内部价</li>
          <li>晒单</li>
          <li>选购指南</li>
          <li>回购榜</li>
          <li>达人</li>
          <li>HOME</li>
        </ul>
      </div>
    </Header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core';
  export default {
    mounted() {
      new BScroll('.main',{})
    },
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  .Knowledge
    width 100%
    height 100%
  .header
    .headerBottom
      box-sizing border-box
      font-size 28px
      background-color #fafafa
      border-top 1px sloid #ddd
      height 75.5px
      width 100%
      ul
        height 100%
        display flex
        line-height 75.5px
        justify-content space-between
        li
          height 100%
          box-sizing border-box
          padding 0 10px
          &.active
            border-bottom 6px solid #b4282d
            color #b4282d
    .headerTop
      width 100%
      height 88px
      display flex
      padding 0 8px
      align-items center
      .icon
        i
          font-size 46px
          margin-right 24px
      .iconHome
        font-size 51px
        line-height 0px
        margin-left 24px
      .text
        width 72%
        margin-left 36px
        display flex
        height 47px
        line-height 47px
        text-align center
        justify-content center
        align-items center
        h2
          font-size 28px
          margin-left 36px
          margin-right 16px
          &:nth-child(2)
            margin-right 0px
          &.active
            color #b4282d
            font-size 36px
            font-weight bold

</style>
