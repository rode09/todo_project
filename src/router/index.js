// vue router
import Home from "@/components/pages/Home.vue";
import TodoList from "@/components/pages/TodoList.vue";
import About from "@/components/pages/About.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/todo-list",
        name: "Todo List",
        component: TodoList,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export { router, routes };