<!-- TodoList.vue -->
<script>
import ItemTodo from '@/components/ItemTodo.vue';

export default {
    name: 'TodoList',
    components: { ItemTodo },
    data() {
        return {
            todos: [],
            newTodoText: '',
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim()) {
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = '';
            }
        },
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    }
};
</script>

<template>
    <h1>List of Todos</h1>
    <input v-model="newTodoText" type="text" placeholder="Enter your Todo">
    <button @click="addTodo">Add</button>
    <ul>
        <ItemTodo
            v-for="(todo, index) in todos"
            :key="index"
            :todo="todo"
            :index="index"
            @toggle-done="toggleDone"
            @delete-todo="deleteTodo"
        />
    </ul>
</template>

<style scoped>
</style>