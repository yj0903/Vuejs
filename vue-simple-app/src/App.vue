<template>
  <!-- App.vue(Parent) -->
  <div id="app">
    Parent counter : {{ parentCounter }} <br />
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- 기존 코드 -->
    <!-- <child v-bind:num="counter"></child> -->
    <child></child>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex' // getter
  import { mapMutations } from 'vuex' //setter

  import Child from "./Child.vue";
  export default {
    components:{
      child:Child
    },

    // data () {
    //   return {
    //     counter: 0
    //   }
    // },

    methods:{
    // ***중요***
    // 각 컴포넌트에서 Vuex 의 state 를 조작하는데 필요한 특정 값들을 넘기고 싶을 때는 commit() 에 두 번째 인자를 추가한다.
      addCounter(){
        this.$store.commit('addCounter');
        // this.$store.mutations.addCounter; 로 접근이 불가능하다. 꼭 commit을 이용해서 mutations이벤트를 호출해야 한다.
      },
      subCounter(){
        this.$store.commit('subCounter');
      },
        // Vuex 의 Mutations 메서드 명과 App.vue 메서드 명이 동일할 때 [] 사용
      ...mapMutations([
        'addCounter'
      ]),
      // Vuex 의 Mutations 메서드 명과 App.vue 메서드 명을 다르게 매칭할 때 {} 사용
      ...mapMutations({
        addCounter: 'addCounter' // 앞 addCounter 는 해당 컴포넌트의 메서드를, 뒤 addCounter 는 Vuex 의 Mutations 를 의미
      })
    },
    // computed 속성을 활용함으로써 Template 코드가 더 간결해지고, 가독성이 좋아졌다.
    computed: mapGetters({
      parentCounter : 'getCounter' // getCounter 는 Vuex 의 getters 에 선언된 속성 이름
      // 또는 parentCounter: 없이 'getCounter'만 선언해도 됨.
    })
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
