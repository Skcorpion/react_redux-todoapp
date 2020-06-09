export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

// export interface RootState {
//   todos: ITodo[];
// }

export interface IById {
  [key: string]: ITodo;
}

export interface ITodos {
  byId: IById;
  allIds: string[];
}

export interface RootState {
  todos: ITodos;
}
