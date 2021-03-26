<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    // 1. data속성:
    // v-model 디렉티브를 사용하면 폼 input과 textarea 엘리먼트(newTodoItem)에 양방향 데이터 바인딩을 생성할 수 있다.
    data() {
        return {
            newTodoItem: ''
        }
    },
    // 2. 메소드 속성
    // addTodo메소드가 호출되면 메소드 addTodo가 실행된다.
    methods:{
        addTodo(){
                // 텍스트가 입력됐을 때만 실행하도록 예외처리.
            if(this.newTodoItem !== ""){
                // 텍스트의 앞, 뒤에 공백이 있으면 공백을 제거함.
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo',value);
                // 인풋박스 초기화하는 메서드
                this.clearInput();
            }
        },
        // 인풋박스 초기화하는 메서드
        clearInput(){
            this.newTodoItem = "";
        }
    }
} 
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    /* 입력창의 스타일 */
    .inputBox {
        background: white;
        height:50px;
        line-height: 50px;
        border-radius: 5px;
    }
    /* 텍스트의 스타일 */
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    } 
    /* + 모양 아이콘이 담긴 컨테이너 */
    .addContainer{
        /* 오른쪽 끝으로 배치 */
        float: right;
        /* 그라데이션 효과 */
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    /* + 모양의 아이콘 */
    .addBtn{
        color: white;
        vertical-align: middle;
    }

</style>