import React, { useState } from "react";

function NewItem({ onAdd }) {
    const [name, setName] = useState('');

    const handleChange = e => setName(e.target.value);
    const handleAddition = () => {
        onAdd(name);
        setName('');
    }

    return (
        <form style={{ display: "flex" }}>
            <input type="text" value={name} onChange={handleChange} />
            <button type="button" onClick={handleAddition} disabled={!name.trim()}>Add</button>
        </form>
    );
}

export default NewItem;
