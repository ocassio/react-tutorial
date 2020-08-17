import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ToDoList from './components/ToDoList';
import NewItem from './components/NewItem';
import MouseCoordinates from './components/MouseCoordinates';

let idCounter = 3;

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const response = await fetch('/api/todos');
      const todos = await response.json();
      setItems(todos); 
    };

    loadItems();
  }, [setItems]);

  useEffect(() => {
    console.log(`Items count: ${items.length}`);
    return () => console.log(`Destructor: ${items.length}`);
  }, [items]);

  const handleAddition = name => {
    setItems(items => [
      {
        id: idCounter++,
        name,
        done: false
      },
      ...items
    ]);
  };

  const handleDelete = useCallback(id => {
    setItems(items => items.filter(item => item.id !== id));
  }, [setItems]);

  const handleToggle = useCallback(id => {
    setItems(items => items.map(item => ({
      id: item.id,
      name: item.name,
      done: item.id === id ? !item.done : item.done
    })));
  }, [setItems]);

  const nonCompletedItemsCount = useMemo(
    () => items.filter(item => !item.done).length,
    [items]
  );

  return (
    <main>
      <span>Count: {nonCompletedItemsCount}</span>
      <MouseCoordinates />
      <NewItem onAdd={handleAddition} />
      <ToDoList items={items} onDelete={handleDelete} onToggle={handleToggle} />
    </main>
  );
}

export default App;
