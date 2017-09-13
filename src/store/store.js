/**
 * Created by yuwenjing on 17/9/13.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        token: null,
        userName: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
        [types.USERNAME]: (state, data) => {
            localStorage.userName = data;
            state.userName = data;
        }
    }
})
