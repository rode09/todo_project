<script>
import { RouterLink } from "vue-router";
import { routes } from "@/router/index.js";
import NavItem from "@/components/NavItem.vue";

export default {
    name: "Navigation",
    components: { NavItem, RouterLink },
    data() {
        return {
            routes,
        };
    },
    methods: {
        handleLinkClick(routePath) {
            // первый аргумент этого метода это как раз те данные
            // которые были отправлены вместе с событием из дочернего компонента NavItem
            // юзни консоль лог и можешь их наблюдать в косоли
        },
    },
};
</script>

<template>
    <header class="header">
        <nav class="nav">
            <ul class="nav__list">
                <NavItem
                    v-for="route in routes"
                    :route="route"
                    :key="route.path"
                    @link-clicked="handleLinkClick"
                />
            </ul>
        </nav>
    </header>
</template>

<style>
    @import '../assets/header.css';
</style>
