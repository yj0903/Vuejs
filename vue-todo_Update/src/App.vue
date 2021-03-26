<template>
  <div id ="app"> 
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <!-- v-on을 @으로 대체 할 수 있으며 @click="함수명"를 이용하면 된다. -->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// App.vue에서 다른 컴포넌트 파일내용을 불러오는 코드.
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
      data(){
        return {
          todoItems: []
        }
      },
      created(){
          if( localStorage.length > 0){
              for(var i=0; i < localStorage.length; i++){
                  this.todoItems.push(localStorage.key(i));
              }
          }
      },
      methods:{
        // Input컴포넌트로부터 가져온 메서드
        addTodo(todoItem){
          localStorage.setItem(todoItem, todoItem);
          this.todoItems.push(todoItem);
        },
        // Footer컴포넌트로부터 가져온 메서드
        clearAll(){
          localStorage.clear(); // 스토리지 전체삭제
          this.todoItems = [];  // 배열 전체삭제 => 화면에 자동 반영됨(?)
        },
        removeTodo(todoItem, index){
          localStorage.removeItem(todoItem);  //스토리지 1개 삭제
          this.todoItems.splice(index,1);     // 배열 내 1개 삭제
        }
      },
      components: {
        'TodoHeader' : TodoHeader,
        'TodoInput' : TodoInput,
        'TodoList' : TodoList,
        'TodoFooter' : TodoFooter     
      }
    } 
</script>

<style>
    body{
        text-align: center;
        background-color: #F6F6F8;
    }
    input{
      border-style: groove;
      width:200px;
    }
    button{
      border-style: groove;
    }
    .shadow{
      box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    }
</style>