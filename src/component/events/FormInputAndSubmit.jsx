import React from "react";

function FormEvent({ value, onChange, onSubmit, done, total }) {
    return (
        <>
            <div>
                <h1>Jake's Todo App "Toodly"</h1>
                <h2> Done : {done} / Total : {total}</h2>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder="Todo here . . ."
                    />
                    <button type="submit">
                        ENTER
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormEvent;