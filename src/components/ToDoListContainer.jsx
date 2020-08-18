import React, { useEffect, useCallback } from "react";
import ToDoList from "./ToDoList";
import { loadTodos } from '../store';
import { useSelector, useDispatch } from 'react-redux';

function ToDoListContainer() {
    const dispatch = useDispatch();
    const items = useSelector(store => store.todos.items);
  
    useEffect(() => {
      dispatch(loadTodos());
    }, [dispatch]);
  
    const handleDelete = useCallback(id => {
      dispatch({
        type: 'deleteTodo',
        payload: id
      });
    }, [dispatch]);
  
    const handleToggle = useCallback(id => {
      dispatch({
        type: 'toggleTodo',
        payload: id
      });
    }, [dispatch]);

    return <ToDoList items={items} onToggle={handleToggle} onDelete={handleDelete} />;
}

export default ToDoListContainer;
