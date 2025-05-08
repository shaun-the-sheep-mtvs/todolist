"use client";

import React, { useState } from "react";
import FormEvent from "./events/FormInputAndSubmit";
import ShowAllList from "./events/ShowAllList";

function EventAll() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState([]);

    const handleInputChange = (e) => setInput(e.target.value);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        setTodos([...todos, input.trim()]);
        setChecked([...checked, false]);
        setInput("");
    };

    const handleDelete = (idx) => {
        setTodos(todos.filter((_, i) => i !== idx));
        setChecked(checked.filter((_, i) => i !== idx));
    };

    const handleCheck = (idx) => {
        setChecked(checked.map((c, i) => (i === idx ? !c : c)));
    };

    const done = checked.filter(Boolean).length;
    const total = todos.length;

    return (
        <div>
            <FormEvent value={input} onChange={handleInputChange} onSubmit={handleAddTodo} done={done} total={total} />
            <ShowAllList todos={todos} checked={checked} onCheck={handleCheck} onDelete={handleDelete} />
        </div>
    );
}

export default EventAll;