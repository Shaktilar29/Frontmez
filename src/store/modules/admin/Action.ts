import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from '../admin/Mutation'
import { State } from '../admin/State'
import { RootState } from '@/store';

export enum ActionTypes {
    SetCreateModal = 'SET_CREATE_MODAL'
  }
  type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1],
    ): ReturnType<Mutations[K]>;
  } & Omit<ActionContext<State, RootState>, 'context'>

 /*type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
  }*/

  export interface Actions {
    [ActionTypes.SetCreateModal]({ commit }: AugmentedActionContext,payload: boolean): void;
  }

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.SetCreateModal]({ commit }) {
    commit(MutationType.SetCreateModal, true)
  }
}