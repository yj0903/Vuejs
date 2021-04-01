import Vue from 'vue'
import App from './App.vue'

//라우터만 모아놓은 js파일을 추가한다.
import { router } from './routes/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // 화면에 그리는 함수
  // 앞뒤가 같을 땐 축약해서 router라고만 써도 됨.
  router: router
}).$mount('#app')
