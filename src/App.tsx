import React, { FC } from 'react';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';
import { FilterTypes } from './utils/actionTypes';
import { useParams } from 'react-router-dom';

const App: FC = () => {
  const { filter } = useParams();
  return (
    <div>
      <AddTodo />
      <VisibleTodoList filter={filter || FilterTypes.SHOW_ALL} />
      <Footer />
    </div>
  );
};

export default App;
