<template>
  <div>
    <p v-for="item in ask">  
      <router-link v-bind:to="`/item/${item.id}`">{{item.title}}</router-link>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      ask: state => state.ask
    })
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>