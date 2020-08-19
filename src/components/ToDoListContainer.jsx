import React, { useEffect, useCallback } from "react";
import ToDoList from "./ToDoList";
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, deleteTodo, toggleTodo, loadTodos } from "../store/todos/todos.slice";

function ToDoListContainer() {
    const dispatch = useDispatch();
    const items = useSelector(selectTodos);
  
    useEffect(() => {
      dispatch(loadTodos());
    }, [dispatch]);
  
    const handleDelete = useCallback(id => {
      dispatch(deleteTodo(id));
    }, [dispatch]);
  
    const handleToggle = useCallback(id => {
      dispatch(toggleTodo(id));
    }, [dispatch]);

    return <ToDoList items={items} onToggle={handleToggle} onDelete={handleDelete} />;
}

export default ToDoListContainer;
