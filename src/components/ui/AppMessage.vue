<template>
    <div v-if="message" :class="['alert',message.type]">
       <pre>{{message}}</pre>
  <p class="alert-title" v-if="title">{{title}}</p>
        <p>{{message.value}}</p>
        <span class="alert-close" @click="close">&times;</span>
    </div>
</template>

<script>

    import {computed} from 'vue'
    import {useStore} from 'vuex'

    export default {
        setup(){
            const store = useStore()

            const TITLE_MESSAGE = {
                primary : 'Примари ошибка',
                danger: 'данжер огибка',
                warning : 'варниг ошибка'
            }
            const message = computed( ()=> store.state.message)
            const title = computed(()=> store.state.message.value ? TITLE_MESSAGE[store.state.message.type] : null)

            return {
                message,
                title,
                close: ()=>  store.commit('clearMessage')
            }
        }


    }
</script>

<style scoped>

</style>