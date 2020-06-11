import { v4 } from 'node-uuid';
import { FilterTypes } from '../utils/actionTypes';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [
    { id: v4(), text: 'hey', completed: true },
    { id: v4(), text: 'ho', completed: true },
    { id: v4(), text: `let's go`, completed: false },
  ],
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTodos = (filter: string) =>
  delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Boom!');
    // }

    switch (filter) {
      case FilterTypes.SHOW_ALL:
        return fakeDatabase.todos;
      case FilterTypes.SHOW_COMPLETED:
        return fakeDatabase.todos.filter((t) => t.completed);
      case FilterTypes.SHOW_ACTIVE:
        return fakeDatabase.todos.filter((t) => !t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = (text: string) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id: string) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find((todo) => todo.id === id);
    todo!.completed = !todo!.completed;
    return todo;
  });
