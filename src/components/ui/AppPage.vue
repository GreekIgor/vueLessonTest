<template>
    <div class="card">
        <h1 class="card-title">

            {{title}}
            <slot name="header"/>

        </h1>

        <slot />
    </div>
</template>

<script>
    export default {
        name: "AppPage",
        props: {
            title: {
                type: String,
                required: true
            }
        },
        setup(){

        }
    }
</script>

<style scoped>

</style>