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
