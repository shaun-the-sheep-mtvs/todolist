import React from "react";
import DeleteItem from "./DeleteItem";
import CheckItem from "./CheckItem";

function ShowAllList({ todos, checked, onCheck, onDelete }) {
    return (
        <div style={{ textAlign: 'center' }}>
            {todos.length === 0 ? (
                <p>No todos yet.</p>
            ) : (
                todos.map((todo, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                        <div>
                            <CheckItem checked={checked[idx]} onClick={() => onCheck(idx)} />
                        </div>
                        <div style={{ flex: 1, textAlign: 'left' }}>
                            <span style={{ textDecoration: checked[idx] ? 'line-through' : 'none', color: checked[idx] ? 'gray' : 'black' }}>{todo}</span>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <DeleteItem onClick={() => onDelete(idx)} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default ShowAllList;