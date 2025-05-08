import React from "react";

function CheckItem({ checked, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                width: 24,
                height: 24,
                border: '2px solid green',
                background: 'white',
                color: 'green',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                cursor: 'pointer',
                padding: 0,
                borderRadius: 4,
            }}
            aria-label={checked ? 'Checked' : 'Unchecked'}
        >
            {checked ? '✔' : ''}
        </button>
    );
}

export default CheckItem;
