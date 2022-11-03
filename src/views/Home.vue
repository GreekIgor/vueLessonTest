<template>
  <app-loader v-if="loading"/>
  <app-page title="Заявки" v-else>

    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>

    <request-table :request="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать Заявку" @close="modal =false">
      <request-modal @created="modal = false"></request-modal>

      </app-modal>
    </teleport>

  </app-page>
</template>

<script>
  import {ref, computed, onMounted} from 'vue'
  import AppPage from '../components/ui/AppPage'
  import RequestTable from '../components/request/RequestTable'
  import AppModal from '../components/ui/AppModal'
  import RequestModal from '../components/request/RequestModal'
  import AppLoader from '../components/ui/AppLoader'
  import {useStore} from "vuex";
export default {
  name: 'Home',
   components: {AppPage, RequestTable, AppModal, RequestModal,AppLoader},
    setup() {
      const modal =ref(false)
      const store = useStore()
        const loading = ref(false)

        onMounted( async () => {
            loading.value = true
            await store.dispatch('request/load')
            loading.value = false
        })

        const requests = computed( () => store.getters['request/requests'])

        return { modal, requests,loading}

    }
}
</script>
