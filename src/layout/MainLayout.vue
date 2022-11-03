<template>

    <the-nav-bar></the-nav-bar>
<div class="container with-nav">
    <app-message/>
    <router-view/>
    <div class="card">

    </div>
</div>


</template>

<script>
    import AppMessage from '../components/ui/AppMessage'
    import TheNavBar from '../components/TheNavBar'

    export default {
        name: "MainLayout.vue",
        components: {TheNavBar,AppMessage}
    }
</script>

<style scoped>

</style>