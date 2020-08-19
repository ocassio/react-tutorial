import React from 'react';
import NewItem from './components/NewItem';
import MouseCoordinates from './components/MouseCoordinates';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import ToDoListContainer from './components/ToDoListContainer';
import { addTodo, selectLoading, selectShowError } from './store/todos/todos.slice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const showError = useSelector(selectShowError);

  const handleAddition = name => {
    dispatch(addTodo(name))
  };

  return (
    <main>
      {loading && <span>Loading...</span>}
      {showError && <span>Error</span>}
      <Counter />
      <MouseCoordinates />
      <NewItem onAdd={handleAddition} />
      <ToDoListContainer />
    </main>
  );
}

export default App;
