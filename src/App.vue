<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import PageList from './components/PageList.vue'
import { useStore } from './store'
//import { ActionTypes } from './store/modules/page/Action'
export default defineComponent({
  components: { PageList },
  setup () {
    const store = useStore()
  //  const loading = computed(() => store.state.loading)
   // onMounted(() => store.dispatch(ActionTypes.GetPageItems))
   // const totalCount = computed(() => store.getters.totalPageCount)
    //return { loading, totalCount }
  }
})
</script>

<template>
  <div class="container mx-auto mt-4">
    <h1 class="is-size-3 has-text-centered p-2 has-text-weight-bold">
      FRONTMEZ - UN FRONT QUI PLM
    </h1>

    <div v-if="loading">
      <h3 class="has-text-centered mt-4">Loading...</h3>
    </div>
    <div v-else>
      <p class="has-text-centered mt-2">
        {{ totalCount }} Crées.
      </p>
      <PageList/>
    </div>
  </div>
</template>
<style>
@import '~bulma/css/bulma.css';
</style>
