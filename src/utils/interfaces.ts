export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IById {
  [key: string]: ITodo;
}

export interface ITodos {
  byId: IById;
  idsByFilter: {
    [key: string]: string[];
  };
}

export interface RootState {
  todos: ITodos;
}
