<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <form @submit.prevent="updatePage">
          <h1>Edit Modal</h1>
        <div class="field">
          <label class="label">Page Name</label>
          <div class="control">
            <input
              v-model="name"
              class="input"
              type="text"
              placeholder="Enter page"
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
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
import { defineComponent, reactive, toRefs, computed, onMounted } from 'vue'
import { useStore } from '@/store'
import { PageItem } from '@/store/modules/page/State'
import { MutationType } from '@/store/modules/page/Mutation'
export default {
  name: 'EditModal',
  props: {
      id: { type: Number, required: true }
  },
  setup(props: any) {
    const state = reactive({
      name: '',
    })
    const store = useStore()
    const getPageById = computed(() => store.getters.getPageById(Number(props.id)))
 
    const setFields = () => {
       const page = store.getters.getPageById(Number(props.id))
       if(page) {
           state.name = page.name
       }
    }
    onMounted(() => { setFields() });
    const updatePage = () => {
      if (
        state.name === ''
      )
        return
      const page: PageItem = {
        id: props.id,
        name: props.id
      }
     // store.commit(MutationType.UpdatePage, page)
    }
    const closeModal = () => {
      //store.commit(MutationType.SetEditModal, {showModal: false, pageId: undefined})
    }
    return { closeModal, ...toRefs(state), updatePage }
  }
}
</script>
<style scoped>
label {
    color: #ffffff;
}
h1 {
    color: #ffffff;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
}
</style>