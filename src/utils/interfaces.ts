export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IById {
  [key: string]: ITodo;
}

export interface IFilter {
  ids: string[];
  isFetching: boolean;
  errorMessage: string | null;
}

export interface RootState {
  byId: IById;
  listByFilter: {
    [key: string]: IFilter;
  };
}
