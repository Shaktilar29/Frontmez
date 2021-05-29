import { RootState } from '@/store'
import { GetterTree } from 'vuex'
import { State, PageItem } from './State'
 
export type Getters = {
  totalPageCount(state: State): number
  getPageById(state: State): (id :number) => PageItem | undefined
}
 
export const getters: GetterTree<State, RootState> & Getters = {
  totalPageCount(state) {
    if(state.pages != null)
      return state.pages.length
      else{
        return 0;
      }
  },
  getPageById: (state) => (id: number) => {
    if(state.pages != null)
      return state.pages.find(page => page.id === id)
  }
}