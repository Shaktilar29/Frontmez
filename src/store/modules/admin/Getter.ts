import { GetterTree } from 'vuex'
import { State} from './State'
import { RootState } from '@/store';
 
export type Getters = {
  showCreateModal(state: State): boolean
}
 
export const getters: GetterTree<State, RootState> & Getters = {
  showCreateModal: (state) => state.showCreateModal,
}