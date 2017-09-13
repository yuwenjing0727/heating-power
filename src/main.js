// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import * as types from './store/types'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
//创建axios实例
var $http = axios.create({});

// http request 拦截器
$http.interceptors.request.use(
  config => {
    if(config.url.indexOf('loginCheck')>=0){
      return config;
    }else{
      if (store.state.token) {
        config.headers.authorization = store.state.token;
      }
      return config;
    }

  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
$http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.data.message) {
        case "false":
          // 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: '/'
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });

Vue.prototype.$http = $http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  $http,
  template: '<App/>',
  components: { App }
})
