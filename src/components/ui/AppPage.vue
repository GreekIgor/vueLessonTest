<template>
  <div class="breadcrumbs" v-if="back">
    <router-link to="/">Вернуться с списку заявок</router-link>
  </div>
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
            },
          back: {
              type: Boolean,
              default: true
          }
        },
        setup(){

        }
    }
</script>

<style scoped>

</style>