<template>
    <!-- Child.vue(Child) -->
    <div>
        <hr />
        Child counter : {{ childCounter }} <br />
        <button>+</button>
        <button>-</button>
    </div>
</template>

<script>
    export default {
    // v-bind:num="counter"를 통해
    // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
    // props: ["num"]

    // computed 속성을 활용함으로써 Template 코드가 더 간결해지고, 가독성이 좋아졌다.
        computed: {
            childCounter() {
                return this.$store.getters.getCounter;
            }
        }
    };
</script>

<style>

</style>
