<script>
export default {
    name: "NavItem",
    emits: ["link-clicked"], // описывает названия кастомных событий которые этот компонент может отправлять в родительский компонент
    props: {
        route: {
            type: Object,
            required: true,
        },
    },
    methods: {
        emitLinkClick() {
            // этот метод вызывает событие link-clicked и отправляет его в родительский компонент
            // второй аргумент метода $emit - это значение, которое будет передано вместе с событием
            this.$emit("link-clicked", this.route.path);
        },
    },
};
</script>

<template>
    <li
        class="nav__item"
        :key="route.path"
    >
        <RouterLink
            @click="emitLinkClick"
            :to="route.path"
        >
            {{ route.name }}
        </RouterLink>
    </li>
</template>

<style scoped>

</style>