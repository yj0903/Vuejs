<template>
  <div id="app">

    <!-- header용 tool-bar  컴포넌트를 하나 만든 다음 여기에 띄움. -->
    <tool-bar></tool-bar>
    <!-- URL이 news이면 NewsView 컴포넌트가 실행 될 것. -->
    <router-view></router-view>
  </div>
</template>

<script>
// 외부 컴포넌트를 쓰려면 무조건 js에 import를 해줘야 한다.
import ToolBar  from './components/ToolBar.vue'

export default {
  components: { ToolBar },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
