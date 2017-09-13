import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import homePage from '@/components/homePage'
import store from '../store/store'
import * as types from '../store/types'

Vue.use(Router)

const routes = [
  {
    path:'/',
    component:login
  },
  {
    path: '/homePage',
    meta: {
      requireAuth: true,
    },
    component: homePage
  }
];

// 页面刷新时，重新赋值token,用户名也在界面上展示
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'));
}
if(window.localStorage.getItem('userName')){
  store.commit(types.USERNAME, window.localStorage.getItem('userName'));
}

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/'
      })
    }
  }
  else {
    next();
  }
})

export default router;





