<template>
  <div>
      <div v-for="url in URLS"> {{ url.title }} </div>
  </div>
</template>


<script>
// import axios from 'axios'; 안 해도 됨!!
// api폴더 내 index.js만 import해도 됨.
import { fetchNewsList } from '../api/index.js'

export default {

  data(){
    return {
      URLS: []
    }
  },

  created(){
    var vm = this; 
    // axios로 들어가면 콜백이 현재 NewsView컴포넌트를 바라보지 않는다. 즉  this가 컴포넌트를 향하지 않음.
    // var vm으로 연결해줘야 함.
    // binding 문제를 해결하기 위해 화살표 함수를 쓰는게 낫다. (중급 강의)


    // 해당 URL 주소에 대해 HTTP GET 요청을 보낸다.
    // axios.get('https://api.hnpwa.com/v0/news/1.json') 
    // 안 해도 됨!!! api폴더 index.js에서 정의한 함수 불러다가 쓰면 됨.

    fetchNewsList() // return new Promise 따라서 then 사용 가능함.
      .then( 
        //서버에서 보낸 데이터를 정상적으로 받으면 then() 안에 정의한 로직을 실행.
        function(response)  
        {
          console.log(response);
          vm.URLS = response.data
        }
      )
      .catch(
        // 오류가 발생하면 catch()에 정의한 로직이 수행된다.
        function(error) 
        {
          console.log(error);
        }
      )
  }
}
</script>

<style>

</style>