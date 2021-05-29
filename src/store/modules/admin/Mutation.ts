import { MutationTree } from 'vuex'
import { State } from './State'

export enum MutationType {
    SetLoading = 'SET_LOADING',
    SetCreateModal = 'SET_CREATE_MODAL',
  }

  export type Mutations<S = State> = {
    [MutationType.SetLoading](state: S, value: boolean): void
    [MutationType.SetCreateModal](state: S, value: boolean): void
  }
  
  export const mutations: MutationTree<State> & Mutations = {
    [MutationType.SetLoading](state, value) {
      state.loading = value
      console.log("I am loading...")
    },
    [MutationType.SetCreateModal](state, value) {
      state.showCreateModal = value
    }
  }