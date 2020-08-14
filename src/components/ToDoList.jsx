import React from "react";

function ToDoList({ items, onDelete, onToggle }) {
    if (items.length === 0) {
        return <span>List is empty</span>;
    }

    return (
        <table>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>
                            <input type="checkbox" checked={item.done} onChange={() => onToggle(item.id)} />
                        </td>
                        <td>{item.name}</td>
                        <td>
                            <button type="button" onClick={() => onDelete(item.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ToDoList;
