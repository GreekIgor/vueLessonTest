<template>
  <app-loader v-if="loading"></app-loader>
<app-page back :title="'Заявка'" v-else-if="request">
  {{request}}
  <p><strong>{{request.fio}}</strong></p>
  <p><strong>{{request.amount}}</strong></p>
  <p><strong>{{request.phone}}</strong></p>
  <p><strong>{{request.status}}</strong></p>
</app-page>
  <h3 v-else >
    Заявки с аиди {{ $route.params.id}}
  </h3>
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import AppPage from "@/components/ui/AppPage";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader";
export default {
  name: "Request",
  components: {AppLoader, AppPage},
  setup() {
    const route = useRoute()
    const store = useStore()
    const loading = ref(false)
    const request = ref({})

    onMounted(async ()=>{
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      loading.value = false
    })

    return {
      loading, request, id: route.params.id
    }

    console.log(route.params.id)
  }
}
</script>

<style scoped>

</style>