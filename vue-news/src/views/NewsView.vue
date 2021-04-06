<template>
  <div>
      <p v-for="item in this.$store.state.news">  
        <a v-bind:href="item.url" class="">
          {{item.title}}
        </a>
        <small>{{item.time_ago}} by {{item.user}}</small>
      </p>
  </div>
</template>


<script>
// import axios from 'axios'; 안 해도 됨!!
// api폴더 내 index.js만 import해도 됨.
// import { fetchNewsList } from '../api/index.js'

export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
    // src/store/index.js 안에 있는 FETCH_NEWS 함수가 실행된다.
  }
}
</script>

<style>

</style>