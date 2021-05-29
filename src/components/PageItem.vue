<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <h1>VIEW PAGE</h1>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Title: {{ page.title }}</p>
              <p class="subtitle is-6"> <b>Assigned To:</b>  {{ page.assignedTo }}</p>
              <p class="subtitle is-6"> <b>Created By:</b>  {{ page.createdBy }}</p>
            </div>
          </div>
          <div class="content">
            <p class="subtitle is-6">Description: {{ page.description }}</p>
          </div>
        </div>
      </div>
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
  setup (props: any) {
    const store = useStore()
    const page = computed(() => store.getters.getPageById(Number(props.id)))
    const closeModal = () => {
     // store.commit(MutationType.SetPageModal, { showModal: false, pageId: undefined })
    }
    return { closeModal, page }
  }
}
</script>
