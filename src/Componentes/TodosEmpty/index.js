import React from 'react';
import './TodosEmpty.css'
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

function TodosEmpty(
){

    return(
       <>
        <section className='empty-message'>
            <HiOutlineClipboardDocumentList />
            <p>Crea tu nueva tarea ...</p>
        </section>
       </>
    );
}

export { TodosEmpty}; 