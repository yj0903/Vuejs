// main.js
import Vue from 'vue'
import App from './App.vue'
// store.js를 불러오는 코드
import { store } from "./store";

new Vue({
  el: '#app',
  // 뷰인스턴스의 store 속성에 store컴포넌트를 연결
  store: store,
  render: h => h(App)
})
