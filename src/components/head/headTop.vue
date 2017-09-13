<template>
    <div id="all">
      <div class="top-left">
        <p>
          <img src="../../../static/img/BJRLLOGO.png">
          <span>北京热力面积投停管理系统</span>
        </p>
      </div>
      <div class="top-right">

          <div>
            <ul class="first-ul">
              <li class="first-li">
                <img src="../../../static/img/index.png" class="base-img">
                <span class="nav-span">首页</span>
              </li>
              <li class="dropdown">
                <img src="../../../static/img/user.png">
                <span class="dropdown-toggle nav-span" data-toggle="dropdown">
                  {{userName}}
                  <!--<b class="caret"></b>-->
                  <img src="../../../static/img/userxiala.png">
                </span>
                <ul class="dropdown-menu">
                  <li>
                    <img src="../../../static/img/qiehuan.png">
                    <span>切换账号</span>
                  </li>
                  <li>
                    <img src="../../../static/img/xiugai.png">
                    <span>修改密码</span>
                  </li>

                  <li>
                    <img src="../../../static/img/tuichu.png">
                    <span @click="logout">退出登录</span>
                  </li>

                </ul>
              </li>
            </ul>
          </div>


      </div>

    </div>
</template>
<style scoped>
  #all{
    width:100%;
    height:100%;
    background: #0A86C0;
  }
  .top-left{
    width:50%;
    height:100%;
    float:left;
    display: table;
  }
  .top-left p{
    display: table-cell;
    vertical-align: middle;
  }
  .top-left img{
    width:auto;
    height:auto;
    max-width: 100%;
    max-height: 100%;
    margin-left: 2%;
  }
  .top-left span{
    display: inline-block;
    color:#fff;
    font-size: 1.3vw;
    font-weight: bold;
    font-family: "Microsoft YaHei UI";
  }
  .top-right{
    width:50%;
    height:100%;
    float:left;
  }
  .top-right div{
    width:100%;
    height:100%;
    position: relative;
    display: table;
  }
  .first-ul{
    list-style: none;
    position: absolute;
    right:2%;
    top:36%;
    width:27%;
  }
  .first-ul>li{
    display: inline;
  }
  .dropdown-menu li{
    text-align: center;
  }
  .nav-span{
    color:#fff;
    font-size: 0.8vw;
    font-family: "Microsoft YaHei UI";
    cursor: pointer;
  }
  .dropdown-menu{
    min-width: 98px;
  }
  .dropdown-menu li{
    margin-top:6%;
  }
  .dropdown-menu span{
    font-size: 0.6vw;
    font-family: "Microsoft YaHei UI";
    cursor: pointer;
    color:#121212;
  }
  .first-li{
    margin-right: 20%;
  }
  .base-img{
    vertical-align: text-top;
  }
</style>
<script>
  import * as types from '../../store/types'
  import {mapState} from 'vuex'
    export default{
        data(){
            return{

            }
        },
        methods:{
          logout(){
            var self = this;
            self.$store.commit(types.LOGOUT)
            self.$router.push({
              path: '/'
            })

          }

        },
        computed: mapState({
            userName: state => state.userName
        })

    }
</script>
