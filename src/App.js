import React from 'react';
import NewItem from './components/NewItem';
import MouseCoordinates from './components/MouseCoordinates';
import { useDispatch } from 'react-redux';
import Counter from './components/Counter';
import ToDoListContainer from './components/ToDoListContainer';

function App() {
  const dispatch = useDispatch();

  const handleAddition = name => {
    dispatch({
      type: 'addTodo',
      payload: name
    })
  };

  return (
    <main>
      <Counter />
      <MouseCoordinates />
      <NewItem onAdd={handleAddition} />
      <ToDoListContainer />
    </main>
  );
}

export default App;
