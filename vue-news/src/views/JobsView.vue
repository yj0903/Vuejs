<template>
  <div>
    <div v-for="url in URLS">{{url.title}}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
  data(){
    return { 
      URLS: [] //vm으로 연결된 현재 컴포넌트로 부터 데이터를 저장받는다.
    }
  },
  created(){
    fetchJobsList()
      .then(response => this.URLS = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>