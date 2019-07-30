<template>
    <nav>
        <router-link to="/">Home</router-link> | <router-link to="/sea">The Sea</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style lang="scss">
    nav {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
    }
</style>