<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuild v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuild from './components/FooterGuild/index.vue'
  export default{
    components:{
      FooterGuild
    },
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  #app
    position relative
    width 100%
    height 100%
    overflow hidden
</style>
