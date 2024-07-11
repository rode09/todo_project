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
    <div class="todo-list">
        <h1>List of Todos</h1>
        <div class="input-container">
            <input
                v-model="newTodoText"
                type="text"
                placeholder="Enter your Todo"
                class="todo-input"
            >
            <button
                @click="addTodo"
                class="add-button"
            >Add
            </button>
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
        <p
            v-if="todos.length === 0"
            class="no-todos"
        >No todos yet!</p>
    </div>

    <div class="todo-list">
        <h1>List of Todos</h1>
        <div class="input-container">
            <input
                v-model="newTodoText"
                type="text"
                placeholder="Enter your Todo"
                class="todo-input"
            >
            <button
                @click="addTodo"
                class="add-button"
            >Add
            </button>
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
        <p
            v-if="todos.length === 0"
            class="no-todos"
        >No todos yet!</p>
    </div>

    <div class="todo-list">
        <h1>List of Todos</h1>
        <div class="input-container">
            <input
                v-model="newTodoText"
                type="text"
                placeholder="Enter your Todo"
                class="todo-input"
            >
            <button
                @click="addTodo"
                class="add-button"
            >Add
            </button>
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
        <p
            v-if="todos.length === 0"
            class="no-todos"
        >No todos yet!</p>
    </div>

    <div class="todo-list">
        <h1>List of Todos</h1>
        <div class="input-container">
            <input
                v-model="newTodoText"
                type="text"
                placeholder="Enter your Todo"
                class="todo-input"
            >
            <button
                @click="addTodo"
                class="add-button"
            >Add
            </button>
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
        <p
            v-if="todos.length === 0"
            class="no-todos"
        >No todos yet!</p>
    </div>

</template>

<style scoped></style>
