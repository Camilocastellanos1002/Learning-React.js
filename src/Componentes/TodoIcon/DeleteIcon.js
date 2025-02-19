import React from "react";
import {TodoIcon } from './index';

function DeleteIcon ({onDelete}){
    return (
        <TodoIcon
            type="delete"
            color="black"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };