import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../../TodoContext';

function TodoCounter(){
    const {
      completedToDos : completed,
      totalToDos : total,
    } = React.useContext(TodoContext);
    
    return(
      <>
        <h1 id='TodoCounter_title'>
          Tareas
        </h1>
        <h2 id='TodoCounter_message'>
          Has Completado <span>{completed}</span> de <span>{total}</span> Tareas
        </h2>
      </>
    );
  
}

export { TodoCounter}; 