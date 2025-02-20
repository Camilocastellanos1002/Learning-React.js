import React from 'react';
import './TodosError.css'
import { BiSolidCommentError } from "react-icons/bi";

function TodosError(
){

    return(
        <>
            <section className='error-message'>
                <BiSolidCommentError/>
                <p>!Hubo un error¡</p>
            </section>
        </>
    );
}

export { TodosError}; 