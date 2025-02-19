import React from "react";
import {TodoIcon } from './index';


function CompleteIcon ({completed, onComplete }){
    return (
        <TodoIcon
            type="check"
            color={ completed ? '#15ff00' : 'black'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };