<template>
  <table class="table">
    <thead>
      <tr>
        <th><abbr title="Position">Id</abbr></th>
        <th>Page</th>
        <th><abbr title="Lost">Actions</abbr></th>
      </tr>
    </thead>
    <tbody v-if="pages">
      <tr v-for="page in pages" :key="page.id">
        <PageListItem  v-bind="page" />
      </tr>
    </tbody>
    <tfoot>
      <CreateModal v-show="showCreateModal"></CreateModal>
      <button class="button is-link" @click="setModal">Ajouter une Page</button>
    </tfoot>
  </table>
  <EditModal v-if="showEditModal" :id="editPageId"></EditModal>
  <PageItem v-if="showPageModal" :id="showPageId"></PageItem>
</template>
<script>
import CreateModal from './CreateModal'
import EditModal from './EditModal'
import PageItem from './PageItem'
import PageListItem from './PageListItem'
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { MutationType } from '@/store/modules/page/Mutation'
export default defineComponent({
  name: 'Table',
  components: {
    CreateModal,
    PageListItem,
    PageItem,
    EditModal
  },
  setup () {
    const store = useStore()
    const setModal = () => {
      store.commit(MutationType.SetCreateModal, true)
    }
    const showCreateModal = computed(() => store.state.showCreateModal)
    const showEditModal = computed(() => store.state.showEditModal)
    const editPageId = computed(() => store.state.editModalPageId)
    const showPageModal = computed(() => store.state.showPageModal)
    const showPageId = computed(() => store.state.showPageId)
    const pages = computed(() => { console.log(store.state.pages); return store.state.pages })
    console.log({ pages })
    return { showCreateModal, setModal, pages, showEditModal, showPageModal, editPageId, showPageId }
  }
})
</script>
<style scoped>
table {
  width: 100%;
}
.fa {
  font-size: 1.2rem;
  margin-left: 15px;
}
.fa:hover {
  font-size: 1.4rem;
}
</style>
