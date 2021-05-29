import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './Mutation'
import { PageItem, State } from './State'
import axios from 'axios'
import PageService from '@/services/PageService'
import { RootState } from '@/store'

export enum PageTypes {
  AddPage = 'ADD_PAGE',
  GetOnePage = 'GET_PAGE',
  GetPageItems = "GET_PAGE_ITEMS"
}

type PageAugments = Omit<ActionContext<State, RootState>, 'commit'> & {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
  }

  export type Actions = {
    [PageTypes.GetPageItems](context: PageAugments): void
   // [PageTypes.AddPage](context: PageAugments, page: PageItem): void
  }

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, RootState> & Actions = {
  async [PageTypes.GetPageItems]({ commit }) {
    PageService.getPageList()
    await sleep(1000)
  },
  /*async [PageTypes.AddPage]({ commit } , //{ page } ) {
    /*try {
      commit(MutationType.SetLoading, true)
      await axios.post(API_URL, page, { headers }).then(response =>{
        commit(MutationType.SetPages, response.data)
      })
    await sleep(1000)
    commit(MutationType.SetLoading, false)
        } catch (err) {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            console.log("Server Error:", err)
          } else if (err.request) {
            // client never received a response, or request never left
            console.log("Network Error:", err)
          } else {
            console.log("Client Error:", err)
          }
        }

  }*/
}