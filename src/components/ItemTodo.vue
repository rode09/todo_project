<template>
    <li class="todo-item">
        <span
            :class="{ done: todo.done }"
            class="todo-text"
        >{{ todo.text }}</span>
        <input
            type="checkbox"
            :checked="todo.done"
            @change="toggleDone"
            class="todo-checkbox"
        >
        <button
            @click="deleteTodo"
            class="delete-button"
        >Delete
        </button>
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

<style scoped></style>
