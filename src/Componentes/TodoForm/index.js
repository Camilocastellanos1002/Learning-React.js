import React from 'react';
import {TodoContext} from '../../TodoContext'

import './TodoForm.css'
function TodoForm (){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState(''); //estado local

    const onSubmit = (ev)=>{
        ev.preventDefault(); //metodo que permite evitar que se dispare el evento y la pag se recargue por defecto
        if (!newTodoValue == false) {
            addTodo(newTodoValue);
        }
        setOpenModal(false); //solo necesito cerrar el formulario
    }
    const onCancel = ()=>{
        setOpenModal(false); //solo necesito cerrar el formulario
    }
    const onChange = (ev)=>{    //evento que captura el cambio
        // console.log('nueva tarea para agregar: '+ ev.target.value);
        setNewTodoValue(ev.target.value);
    }   
    return(
        <form onSubmit={onSubmit}>

            <label>Escribe la tarea que deseas anexar: </label>
            <textarea 
                placeholder='Despertar 6 am a subir el cerro'
                value={newTodoValue}    /* el value se guarda en newTodoValue */
                onChange={onChange}
                required/>   {/* evento */}
            <section className='TodoForm-buttonContainer'>
                <button
                    type='button' 
                    className='TodoForm-button TodoForm-button--cancelar'
                    onClick={onCancel}>
                        Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--añadir'>
                        Añadir
                </button>   
            </section>
        </form>
    );
}

export {TodoForm};