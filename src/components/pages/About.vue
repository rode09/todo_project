<script>
import ItemTodo from "@/components/ItemTodo.vue";

export default {
    name: "About",
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
}
</script>

<template>
    <h1>ABOUT</h1>
    <div>
        reprehenderit saepe velit voluptate voluptates, voluptatum! Accusamus aliquam dolorem nostrum
        tempora voluptas! A dignissimos praesentium veritatis voluptas? Deleniti dolores ducimus, eaque enim excepturi
        expedita modi mollitia placeat quas repellat repellendus ullam, veritatis! Adipisci aspernatur cupiditate eius,
        eligendi eum illum inventore laborum omnis reiciendis, saepe sit ullam, vel! Ab adipisci aliquam, atque eius
        eveniet fugit ipsa ipsum molestias natus nemo placeat quod voluptatem voluptatibus. Ab accusantium asperiores
        eaque et iure magnam mollitia odio rem soluta suscipit! At!
    </div>

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

<style scoped></style>