<template>
  <th>{{ id }}</th>
  <td>{{ name }}</td>
  <td>
    <span class="icon" @click="viewPage()">
      <i class="fa fa-eye"></i>
    </span>
    <span class="icon" @click="editPage()">
      <i class="fa fa-edit"></i>
    </span>
    <span class="icon" @click="removePage()">
      <i class="fa fa-trash">toto</i>
    </span>
  </td>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { MutationType } from '@/store/modules/page/Mutation'
export default defineComponent({
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true }
  },
  setup (props) {
    const store = useStore()
    /*const removePage = () => {
      store.commit(MutationType.RemovePage, {
        id: props.id
      })
    }
    const viewPage = () => {
      store.commit(MutationType.SetPageModal, { showModal: true, pageId: props.id })
    }
    const editPage = () => {
      store.commit(MutationType.SetEditModal, { showModal: true, pageId: props.id })
    }
    return { removePage, editPage, viewPage }*/
  }
})
</script>
