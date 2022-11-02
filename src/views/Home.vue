<template>
  <app-page title="Заявки">

    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>

    <request-table :request="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать Заявку" @close="modal =false"></app-modal>
    </teleport>

  </app-page>
</template>

<script>
  import {ref} from 'vue'
  import AppPage from '../components/ui/AppPage'
  import RequestTable from '../components/request/RequestTable'
  import AppModal from '../components/ui/AppModal'
export default {
  name: 'Home',
   components: {AppPage, RequestTable, AppModal},
    setup() {
      const modal =ref(false)

        return { modal}

    }
}
</script>
