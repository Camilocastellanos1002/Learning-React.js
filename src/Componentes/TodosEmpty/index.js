import React from 'react';
import './TodosEmpty.css'

function TodosEmpty(
){

    return(
       <>
        <section className='empty-message'>
            <p className='paragraph-content'>Crea tu nueva tarea ...</p>
        </section>
       </>
    );
}

export { TodosEmpty}; 