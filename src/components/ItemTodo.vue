
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

<template>
    <li>
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <input type="checkbox" :checked="todo.done" @change="toggleDone">
        <button @click="deleteTodo">Delete</button>
    </li>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>