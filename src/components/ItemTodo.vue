<template>
    <li class="todo-item">
        <span :class="{ done: todo.done }" class="todo-text">{{ todo.text }}</span>
        <input type="checkbox" :checked="todo.done" @change="toggleDone" class="todo-checkbox">
        <button @click="deleteTodo" class="delete-button">Delete</button>
    </li>
</template>

<script>
export default {
    name: "ItemTodo",
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    emits: ["toggle-done", "delete-todo"],
    methods: {
        toggleDone() {
            this.$emit("toggle-done", this.index);
        },
        deleteTodo() {
            this.$emit("delete-todo", this.index);
        }
    }
};
</script>

<style scoped>
.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.todo-item:hover {
    background-color: #f1f1f1;
}

.todo-text {
    flex: 1;
    margin-right: 10px;
}

.todo-text.done {
    text-decoration: line-through;
    color: #888;
}

.todo-checkbox {
    margin-right: 10px;
}

.delete-button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Century Gothic', sans-serif;
}

.delete-button:hover {
    background-color: #cc0000;

}
</style>
