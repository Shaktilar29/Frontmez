export type PageItem = {
  id: number;
  name: string;  
};

export type State = {
  pages: PageItem[] | null;
  showPageModal: boolean;
  editModalPageId: number | undefined;
  showPageId: number | undefined;
}

export const state: State = {
  pages: [],
  showPageModal: false,
  editModalPageId: undefined,
  showPageId: undefined,
}