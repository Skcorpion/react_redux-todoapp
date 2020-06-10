export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IById {
  [key: string]: ITodo;
}

export interface RootState {
  byId: IById;
  listByFilter: {
    [key: string]: string[];
  };
}
