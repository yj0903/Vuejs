
// store.js
// 뷰엑스를 등록할 자바스크립트

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions: {
        getServerData: function (context) {
            return axios.get("sample.json").then(function() {
                // ...
            });
        },
        delayFewMinutes: function (context) {
            return setTimeout(function () {
                commit('addCounter');
            }, 1000);
        }
        // 위처럼 HTTP get 요청이나 setTimeout 과 같은 비동기 처리 로직들은 actions 에 선언해준다.
    },
    
    // state는 컴포넌트 간에 공유할 data 속성을 의미
    state:{
        counter: 0
        // state에 정의된 counter 속성은 
        // Parent 컴포넌트에서 사용하던 data 속성 counter 와 동일한 역할을 한다.
    },

    getters: {
        getCounter: function (state) {
          return state.counter;
        }
    },

    // setter과 동일한 역할을 한다.
    mutations: {
        addCounter: function (state, payload) {
          return state.counter++;
        },
        subCounter: function (state, payload) {
            return state.counter--;
          }
    },
    // Mutations 에는 순차적인 로직들만 선언하고 Actions 에는 비 순차적 또는 비동기 처리 로직들을 선언한다.
    // Mutations 에 비동기 처리 로직들이 포함되면 같은 값에 대해 여러 개의 컴포넌트에서 변경을 요청했을 때, 그 변경 순서 파악이 어렵기 때문이다.
    
 
    actions: {
        addCounter: function (context) {
        // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
        // 상태가 변화하는 걸 추적하기 위해 actions 는 결국 mutations 의 메서드를 호출(commit) 하는 구조가 된다.
          return context.commit('addCounter');
        },
        subCounter: function (context) {
            return context.commit('subCounter');
        }
    }
});