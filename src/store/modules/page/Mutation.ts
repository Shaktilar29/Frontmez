import { MutationTree } from 'vuex'
import { State, PageItem } from './State'
 
export enum MutationType {
  CreatePage = 'CREATE_PAGE',
  SetPages = 'SET_PAGES',
  RemovePage = 'REMOVE_PAGE',
  EditPage = 'EDIT_PAGE',
  UpdatePage = `UPDATE_PAGE`,
  SetLoading = 'SET_LOADING',
  SetCreateModal = 'SET_CREATE_MODAL',
  SetEditModal = 'SET_EDIT_MODAL',
  SetPageModal = 'SET_PAGE_MODAL'
}

export type Mutations = {
  [MutationType.CreatePage](state: State, page: PageItem): void
 /* [MutationType.SetPages](state: State, pages: PageItem[]): void
  [MutationType.RemovePage](
    state: State,
    page: Partial<PageItem> & { id: number }
  ): void
  [MutationType.EditPage](
    state: State,
    page: Partial<PageItem> & { id: number }
  ): void
  [MutationType.UpdatePage](
    state: State,
    page: Partial<PageItem> & { id: number }
  ): void
  [MutationType.SetEditModal](state: State, value: {showModal: boolean, pageId: number|undefined}): void
  [MutationType.SetPageModal](state: State, value: {showModal: boolean, pageId: number|undefined}): void*/
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreatePage](state, page) {
    if(state.pages != null)
      state.pages.unshift(page)
  },
  /*[MutationType.SetPages](state, pages) {
    state.pages = pages
  },
  [MutationType.RemovePage](state, Page) {
    const page = state.pages.findIndex(element => element.id === Page.id)
    if (page === -1) return
    //If Page exist in the state, remove it
    state.pages.splice(page, 1) 
  },
  [MutationType.EditPage](state, Page) {
    const page = state.pages.findIndex(element => element.id === Page.id)
    if (page === -1) return
    //If Page exist in the state, toggle the editing property
    state.pages[page] = { ...state.pages[page]} 
    console.log("pageino", state.pages[page])
  },
  [MutationType.UpdatePage](state, Page) {
    state.pages = state.pages.map(page => {
      if(page.id === Page.id) {
        return {...page, ...Page}
      }
      return page;
    })
  },
  [MutationType.SetEditModal](state, value) {
    state.showEditModal = value.showModal
    state.editModalPageId = value.pageId
  },
  [MutationType.SetPageModal](state, {showModal, pageId}) {
    state.showPageModal = showModal
    state.showPageId = pageId
  }*/
}