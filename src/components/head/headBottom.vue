<template>
    <div id="all">
        <div class="head-bottom-left">
          <span>
            管理菜单
          </span>
        </div>
        <div class="head-bottom-right">
          <ul class="breadcrumb">

            <li>
              <span class="divider">当前位置：</span>
            </li>
            <li v-for="(item, index) in breadcrumbArr">
              <span>{{item}}</span>
              <span class="divider" v-show="(index+1 !== breadcrumbArr.length)">></span>
            </li>
          </ul>
        </div>
    </div>
</template>
<style scoped>
  #all{
    width:100%;
    height:100%;
    background:linear-gradient(top,#fff,#E0E0E0);
  }
  .head-bottom-left{
    width:20%;
    height:100%;
    float: left;
    display: table;
  }
  .head-bottom-left span{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color:#40A2D7;
    font-family: "Microsoft YaHei UI";
    font-size: 1.1vw;
    font-weight: bold;
  }
  .head-bottom-right{
    width:80%;
    height:100%;
    float:left;
    position:relative;
    display: table;
  }
  .breadcrumb{
    display: table-cell;
    vertical-align: middle;
    background:none;
  }
  .breadcrumb>li+li:before {
    padding: 0 5px;
    color: #ccc;
    content: "";
  }
</style>
<script>
  import Bus from '../../util/eventBus.js';
    export default{
        data(){
            return{
              breadcrumbArr: []
            }
        },
      mounted () {
        let self = this;
        Bus.$on('breadcrumbNavChange', function (value) {
          self.breadcrumbArr = value;
        })
      }
    }
</script>
