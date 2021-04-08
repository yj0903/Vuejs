// 뷰 라이브러리, 뷰라우터 라이브러리를 추가함.
import Vue from 'vue'
import VueRouter from 'vue-router'
// 라우터에 사용할 컴포넌트는 추가되어야 함.
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

// router라는 변수 안에 모든 경로가 들어있기에 
// main.js 등 다른 파일에서 이것만 import하면 된다.
export const router = new VueRouter({
    mode: 'history', //URL 주소에 #해시값 제거
    routes:[
        //{path: 'URL 주소', component: 표시될 컴포넌트 명 },
        { path: '/', redirect: NewsView }, // 첫 페이지를 지정하기 위해 redirect 속성을 이용
        { path: '/news', component: NewsView },
        { path: '/ask', component: AskView },
        { path: '/jobs', component: JobsView },
        
        { path: '/user/:id', component: UserView },
        { path: '/item/:id', component: ItemView },
    ]
})