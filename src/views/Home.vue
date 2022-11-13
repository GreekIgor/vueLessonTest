<template>
  <app-loader v-if="loading"/>
  <app-page title="Заявки" v-else>

    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
<request-filter v-model="filter"></request-filter>
    <request-table :request="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать Заявку" @close="modal =false">
      <request-modal @created="modal = false"></request-modal>

      </app-modal>
    </teleport>

  </app-page>
</template>

<script>
import {ref, computed, onMounted, watch} from 'vue'
  import AppPage from '../components/ui/AppPage'
  import RequestTable from '../components/request/RequestTable'
  import AppModal from '../components/ui/AppModal'
  import RequestModal from '../components/request/RequestModal'
  import AppLoader from '../components/ui/AppLoader'
  import {useStore} from "vuex";
  import RequestFilter from "@/components/request/RequestFilter";
export default {
  name: 'Home',
   components: {AppPage, RequestTable, AppModal, RequestModal,AppLoader,RequestFilter},
    setup() {
      const modal =ref(false)
      const store = useStore()
        const loading = ref(false)
      const filter = ref({})

      watch([filter], value => console.log(value))

        onMounted( async () => {
            loading.value = true
            await store.dispatch('request/load')
            loading.value = false
        })

        const requests = computed( () => store.getters['request/requests']
        .filter(request => {
          if(filter.value.name){
            return request.fio.includes(filter.value.name)
          }
          return request
        })
            .filter(request =>{
              if(filter.value.status)
              {
                return filter.value.status === request.status
              }
              return  request
              }

            )
        )

        return { modal, requests,loading, filter}

    }
}
</script>
