import React from "react";
import { useSelector } from "react-redux";

function Counter() {
    const itemsCount = useSelector(store => store.todos.items.length);

    return (
        <div>Items count: {itemsCount}</div>
    )
}

export default Counter;
