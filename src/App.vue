<script>
export default {
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
        <li v-for="(todo, index) in todos" :key="index">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <input type="checkbox" :checked="todo.done" @change="toggleDone(index)">
            <button @click="deleteTodo(index)">Delete</button>
        </li>
    </ul>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
