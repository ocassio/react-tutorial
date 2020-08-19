import React from "react";
import { useSelector } from "react-redux";
import { selectNonCompletedTodosCount } from "../store/todos/todos.slice";

function Counter() {
    const itemsCount = useSelector(selectNonCompletedTodosCount);

    return (
        <div>Items count: {itemsCount}</div>
    )
}

export default Counter;
