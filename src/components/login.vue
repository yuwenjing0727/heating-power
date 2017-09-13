<template>
  <div class="login-wrapper">
    <!--顶部-->
    <div class="top">
      <span class="content">
        <img src="../../static/img/login_logo.png" class="system-logo">
        <span class="system-name">北京热力面积投停管理系统</span>
      </span>
    </div>
    <!--顶部结束-->

    <!--中部-->
    <div class="center">
      <div class="login">

        <!--中部左侧-->
        <div class="left">
          <img src="../../static/img/login_city.png">
        </div>
        <!--中部左侧结束-->

        <!--中部右侧-->
        <div class="right">


          <span class="login-title">用户登录</span>

          <!--用户名输入-->
          <div class="username-wrapper">
            <i class="username-logo"></i>
            <input type="text" class="username" placeholder="用户名" v-model="username" ref="username" @focus="usernameFocus" :class="{'username-focus': isUsernameFocus}">
          </div>
          <!--用户名输入结束-->

          <!--密码输入-->
          <div class="pwd-wrapper">
            <i class="pwd-logo"></i>
            <input type="password" class="pwd" placeholder="密码" v-model="pwd" ref="pwd" @focus="pwdFocus" :class="{'pwd-focus': isPwdFocus}">
          </div>
          <!--密码输入结束-->

          <!--提交按钮-->
          <button class="login-btn" @click="clickLoginBtn">登录</button>
          <!--提交按钮结束-->
        </div>
        <!--中部右侧结束-->
      </div>
    </div>
    <!--中部结束-->

    <!--底部-->
    <div class="bottom"></div>
    <!--底部结束-->

  </div>
</template>

<script type="text/ecmascript-6">
  import * as types from '../store/types'
  import {SWAGGER_CONFIG} from '../config/config'
  export default {
    data() {
      return {
        // 用户名密码
        username: '',
        pwd: '',
        isUsernameFocus: true,
        isPwdFocus: false
      }
    },

    methods: {
      // 点击登录按钮
      clickLoginBtn() {
        if (this.username && this.pwd) {
          this.requestLoginInterface();
        } else {
          alert('用户名或密码不能为空');
        }
      },

      // 请求登录接口数据
      requestLoginInterface () {
        var self = this;
        self.$http.post(SWAGGER_CONFIG+'/Ddaas/userrole/loginCheck',
          {
            "userName":self.username,
            "passWord":self.pwd
          }
        ).then(function (response) {
          if(response.data.data == false){
            alert("用户名或密码不匹配！")
            return;
          }else{
            self.$store.commit(types.USERNAME,self.username);
            self.$store.commit(types.LOGIN, response.data.data);
            self.$router.push({path:"/homePage"});
          }
        })
          .catch(function (error) {
            console.log(error);
          });
      },

      usernameFocus () {
        this.isUsernameFocus = true;
        this.isPwdFocus = false;
      },

      pwdFocus() {
        this.isUsernameFocus = false;
        this.isPwdFocus = true;
      }
    },

    mounted () {
      // 挂在成功就聚焦输入框
      this.$refs.username.focus();
    }
  }

</script>

<style scoped>
  .login-wrapper {
    width: 100%;
    height: 100%;
    min-width: 700px;
    min-height: 750px;
  }

  .login-wrapper .top {
    width: 100%;
    height: 22%;
    display: flex;
    align-items: center;
  }

  .login-wrapper .top .content {
    display: block;
    width: 100%;
    height: 61px;
    text-align: center;
  }

  .login-wrapper .top .content .system-logo {
    vertical-align: top;
  }

  .login-wrapper .top .content .system-name {
    font-size: 30px;
    line-height: 61px;
    color: #077fb7
  }

  .center {
    width: 100%;
    height: 56%;
    background: linear-gradient(to bottom, #057fbf, #1697d4);
    /*text-align: center;*/
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .center .login {
    width: 52%;
    height: 68%;
    background-color: white;
    border-radius: 5px;
    border: 15px solid white;
    box-shadow: 0 0 0 7px rgba(139, 208, 255, 0.5);
  }

  .center .login .left {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    float: left;
  }

  .center .login .right {
    float: right;
    width: 40%;
    height: 100%;
    padding: 22px 8px 30px 22px;
  }

  .center .login .right .login-title {
    display: block;
    width: 100%;
    height: 24px;
    font-size: 24px;
    text-align: center;
    line-height: 24px;
    vertical-align: middle;
  }

  .center .login .right .username-wrapper {
    position: relative;
  }

  .center .login .right .username-logo {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 14px;
    height: 14px;
    background: url('../../static/img/login_user.png') no-repeat;
  }

  .center .login .right .username {
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 25px;
    outline: none;
    padding-left: 34px;
    border: 1px solid #e2e7eb;
    color: #404040;
  }

  .center .login .right .username-focus {
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 25px;
    outline: none;
    padding-left: 34px;
    border: 1px solid #0782bb;
    color: #404040;
  }

  .center .login .right .username::-webkit-input-placeholder {
    color: #d2d2d2;
  }

  .center .login .right .username:-moz-placeholder {
    color: #d2d2d2;
  }

  .center .login .right .username:-ms-input-placeholder {
    color: #d2d2d2;
  }

  .center .login .right .pwd-wrapper {
    position: relative;
  }

  .center .login .right .pwd-logo {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 10px;
    width: 14px;
    height: 15px;
    background: url('../../static/img/login_pwd.png') no-repeat;
  }

  .center .login .right .pwd {
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 25px;
    outline: none;
    padding-left: 34px;
    border: 1px solid #e2e7eb;
    color: #404040;
  }

  .center .login .right .pwd-focus {
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 25px;
    outline: none;
    padding-left: 34px;
    border: 1px solid #0782bb;
    color: #404040;
  }

  .center .login .right .pwd::-webkit-input-placeholder {
    color: #d2d2d2;
  }

  .center .login .right .pwd:-moz-placeholder {
    color: #d2d2d2;
  }

  .center .login .right .pwd:-ms-input-placeholder {
    color: #d2d2d2;
  }

  .center .login .right .login-btn {
    display: block;
    width: 100%;
    height: 40px;
    margin-top: 30px;
    background: linear-gradient(to bottom, #1799d6, #047db5);
    border: none;
    color: white;
    font-size: 20px;
    outline: none;
  }

  .center .login .left img {
    width: 100%;
    height: 100%;
  }

  .bottom {
    width: 100%;
    height: 22%;
  }
</style>
