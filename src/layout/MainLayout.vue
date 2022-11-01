<template>

    <the-nav-bar></the-nav-bar>
<div class="container with-nav">

    <router-view/>
    <div class="card">

    </div>
</div>


</template>

<script>

    import TheNavBar from '../components/TheNavBar'

    export default {
        name: "MainLayout.vue",
        components: {TheNavBar}
    }
</script>

<style scoped>

</style>