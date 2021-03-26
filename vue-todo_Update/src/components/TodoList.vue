<template>
    <section>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
    export default {  
        props: ['propsdata'],
        methods:{
            removeTodo(todoItem, index){
                // removeTodo 이벤트가 발생하면, 상위컴포넌트로 todoItem과 index 데이터를 전달한다.
                this.$emit('removeTodo', todoItem, index);
            }
        }
    } 
</script>

<style scoped>

/* 뷰 애니메이션 추가 */
    .list-enter-active, list-leave-active{
        transition: all 1s;
    }
    .list-enter, list-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
    ul{
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn{
        margin-left: auto;  /*여백이 남지 않도록  */
        color: #de4343;
    }
</style>