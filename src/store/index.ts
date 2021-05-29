import { createLogger, createStore } from 'vuex';

import { store as admins, AdminsStore, State as AdminsState } from '@/store/modules/admin';
import { store as pages, PagesStore, State as PagesState } from '@/store/modules/page';
export type RootState = {
  admins: AdminsState;
  pages: PagesState;
};

export type Store = AdminsStore<Pick<RootState, 'admins'>> & PagesStore<Pick<RootState, 'pages'>>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];


// Plug in session storage based persistence
//plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({ 
  plugins,
  modules: {
    admins,
    pages,
  },
});

export function useStore(): Store {
  return store as Store;
}
