<template>
    <div class="todo-list">
        <h1>List of Todos</h1>
        <div class="input-container">
            <input v-model="newTodoText" type="text" placeholder="Enter your Todo" class="todo-input">
            <button @click="addTodo" class="add-button">Add</button>
        </div>
        <ul class="todos">
            <ItemTodo
                v-for="(todo, index) in todos"
                :key="index"
                :todo="todo"
                :index="index"
                @toggle-done="toggleDone"
                @delete-todo="deleteTodo"
            />
        </ul>
        <p v-if="todos.length === 0" class="no-todos">No todos yet!</p>
    </div>
</template>

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

<style scoped>
.todo-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Century Gothic', sans-serif;
}

.input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.todo-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.add-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-family: 'Century Gothic', sans-serif;
}

.add-button:hover {
    background-color: #0056b3;
}

.todos {
    list-style-type: none;
    padding: 0;
}

.no-todos {
    text-align: center;
    margin-top: 20px;
    font-family: 'Century Gothic', sans-serif;
}
</style>
