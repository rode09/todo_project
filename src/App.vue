<script>
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: { Header },
};
</script>

<template>
    <Header />

    <main>
        <div class="kunteynir">
            <RouterView />
        </div>
    </main>

    <footer style="height: 50px; background: rosybrown"></footer>
</template>

<style>

</style>
