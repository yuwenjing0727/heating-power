<template>
  <div id="all">
    <div class="head">
      <div class="head-top">
        <head-top></head-top>
      </div>
      <div class="head-bottom">
        <head-bottom></head-bottom>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <left-navigation></left-navigation>
      </div>
      <div class="right">
        <!--<router-view></router-view>-->
        <report></report>
      </div>
    </div>
  </div>
</template>
<style scoped>
  #all{
    width:100%;
    height:100%;
  }
  .head{
    width:100%;
    height:16%;
  }
  .main{
    width:100%;
    height:84%;
  }
  .head-top{
    width:100%;
    height:60%;
  }
  .head-bottom{
    width:100%;
    height:40%;
  }
  .left{
    width:20%;
    height:100%;
    float:left;
  }
  .right{
    width:80%;
    height:100%;
    float:left;
  }
</style>

<script>
import headTop from './head/headTop.vue'
import headBottom from './head/headBottom.vue'
import leftNavigation from './left/leftNavigation.vue'
import Report from './right/report.vue'
export default {
  data () {
    return {

    }
  },
  components:{
    headTop,
    headBottom,
    leftNavigation,
    Report
  }
}
</script>
