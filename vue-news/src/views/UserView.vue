<template>
  <div>
    <p>사용자: {{userInfo.id}}</p>
    <p>활동점수: {{userInfo.karma}}</p>
    <p>개설일: {{userInfo.created}}</p>
  </div>
</template>

<script>

export default {
  computed:{
    userInfo(){
      return this.$store.state.user
    }
  },
  created(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER',userName);
  }

}
</script>

<style>

</style>