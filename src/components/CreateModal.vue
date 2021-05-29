<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <form @submit.prevent="createPage">
        <div class="field">
          <label class="label">Nom de la Page</label>
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Ta Page de Daube"
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">Creer</button>
          </div>
          <div class="control" @click="closeModal">
            <button class="button is-link is-light">Annuler</button>
          </div>
        </div>
      </form>
    </div>
    <button
      class="modal-close is-large"
      @click="closeModal"
      aria-label="close"
    ></button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from '@/store'
import { PageItem } from '@/store/modules/page/State'
import { MutationType } from '@/store/modules/page/Mutation'
export default {
  name: 'CreateModal',
  setup() {
    const state = reactive({
      name: ''
    })
    const store = useStore()
    const createPage = () => {
      if (
        state.name === ''
      )
        return

      const page: PageItem = {
        id: Date.now(),
        name: state.name
      }
      store.commit(MutationType.CreatePage, page)
      state.name = ''
    }
    const closeModal = () => {
     // store.commit(MutationType.SetCreateModal, false)
    }
    return { closeModal, ...toRefs(state), createPage }
  }
}
</script>
