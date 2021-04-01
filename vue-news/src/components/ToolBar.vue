<template>
  <div class="header">
    <!-- <router-link to='이동할 URL'> 버튼 텍스트명 </router-link> -->
    <router-link to = '/news'>NEWS</router-link> |
    <router-link to = '/ask'>ASK</router-link> |
    <router-link to = '/jobs'>JOBS</router-link> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>  
/* 현재 컴포넌트에만 적용되도록 scoped를 이용해 범위를 제한함. 하위컴포넌트로 상속 안된다. */
.header{
    color: white;
    background-color: #42B883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active{
    /* 활성화 된 부분을 색 변경 */
    color: #35495e;
}
.header a{
    /* 활성화 안된 부분은 흰색 */
    color: white;
}
</style>