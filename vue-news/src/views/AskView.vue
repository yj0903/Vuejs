<template>
  <div>
    <div v-for="url in URLS">{{url.title}}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'

export default {
  data(){
    return { 
      //vm으로 연결된 현재 컴포넌트로 부터 데이터를 저장받는다.
      URLS: [] 
    }
  },
  created(){
    var vm = this;
    fetchAskList()
      .then(
        //response는 서버에서 보낸 데이터
        function(response){ 
          vm.URLS = response.data
        }
      )
      .catch(
        // 서버와의 통신이 실패
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