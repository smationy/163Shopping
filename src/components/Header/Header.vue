<template>
  <div class="header">
    <slot name='top' />
    <slot name='bottom' />
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
    top 0px
    background-color #fff
    width 100%
    left 0px
</style>
