import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // 화면에 그리는 함수
  // 앞뒤가 같을 땐 축약해서 router라고만 써도 됨.
  router,
  store,
}).$mount('#app')