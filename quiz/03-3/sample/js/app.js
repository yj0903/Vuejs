// sibling-component 를 이름으로 갖는 새로운 컴포넌트를 아래에 등록해보세요.
// options : template, props

// 자식컴포넌트 1
Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});
// 자식 컴포넌트 2
Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});


// 이게 루트 컴포넌트 
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',
    // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
    // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
    anotherMessage: 'Hello Vue.js! passed from Parent Component'
  }
});
