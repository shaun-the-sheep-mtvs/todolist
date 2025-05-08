import React from "react";

function DeleteItem({ onClick }) {
    return (
        <button onClick={onClick} style={{ color: 'red'}}>
            Delete
        </button>
    );
}

export default DeleteItem;
