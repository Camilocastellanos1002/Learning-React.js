
import { TodoItem } from '../Componentes/TodoItem';
import { TodoCounter } from '../Componentes/TodoCounter';
import { TodoSearch } from '../Componentes/TodoSearch';
import { TodoList} from '../Componentes/TodoList';
import { CreateTodoButton } from '../Componentes/CreateTodoButton';
import { TodosLoading} from '../Componentes/TodosLoading'
import { TodosError} from '../Componentes/TodosError'
import { TodosEmpty} from '../Componentes/TodosEmpty'

//importar el contexto
import { TodoContext } from '../TodoContext';
import React from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../Componentes/TodoForm';

function AppUI (){
  const {
    loading,
    error,
    searchedToDos,
    completeTodo,
    deleteTodo,
    openModal,     //modal
    setOpenModal
  } = React.useContext(TodoContext);
    return (
        //forma de recrear un solo objeto HTML para retornar
        <>
        {/* <React.Fragment> */}

          <TodoCounter/>  {/* Uso del contexto */}
    
          {/* <TodoCounter              //uso de props
            completed={completedToDos} 
            total={totalToDos}/> */}
          {/* <TodoCounter completed={3} total={5}/>
          <TodoCounter completed={1} total={8}/> */}
    
    
          <TodoSearch/>
          {/* <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          /> */}
          
          {/* antes de crear los estados se tenia lo siguiente: 
               {arrayToDoList.map(todo => ( */}
          
          {/* Es necesario utilizar las render props por lo que necesita una render funcion en este caso una arrow function que contiene valor explicito por eso se agrega todo dentro de un parentesis*/} 
          <TodoList>
            {/* si loading es true, es decir si estamos cargando algo ENTONCES (&&) mostrar el parrafo de carga*/}
            {loading && <TodosLoading/>} 
          
            {/* si error es true, es decir si existe error ENTONCES (&&) mostrar el parrafo de error */}
            {error && <TodosError/>}

            {/* Para el caso en que no existan ToDo's en el array
                si loading es false, es decir si no estamos cargando  Y (&&) no existen ToDo's ENTONCES (&&) mostrar el parrafo de crear un ToDo */}
            {(!loading && searchedToDos.length === 0) && <TodosEmpty/>}

            {/* Como se sabe que el estado siempre tendra el estado vacio, Este caso permite de que si no esta vacio 
              iterar el array con lod ToDo's */}
            {searchedToDos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                // onCompleted={completeTodo} //forma de utilizar una funcion en un evento
                // onCompleted={completeTodo.text} //TODO CRASHEAAA por que los eventos en react
    
                onComplete={
                  () => completeTodo(todo.text) //forma en que react genere el evento sin esperar una funcion ya ejecutada
                }
                onDelete={
                  () => deleteTodo(todo.text)
                }
              />
            ))}
          </TodoList>
    
          <CreateTodoButton setOpenModal={setOpenModal}/>


          {/* Logica para disparar el modal*/}
          {openModal &&(
            <Modal>
              <TodoForm/>
            </Modal>
          )}
    
    
        {/* </React.Fragment> */}
        </>
    );
}

export { AppUI };


{/* sin uso del contexto, TodoList seria asi: 
    
  <TodoList>

            {/* si loading es true, es decir si estamos cargando algo ENTONCES (&&) mostrar el parrafo de carga }
            {loading && <TodosLoading/>} 
          
            {/* si error es true, es decir si existe error ENTONCES (&&) mostrar el parrafo de error }
            {error && <TodosError/>}

            {/* Para el caso en que no existan ToDo's en el array
                si loading es false, es decir si no estamos cargando  Y (&&) no existen ToDo's ENTONCES (&&) mostrar el parrafo de crear un ToDo }
            {(!loading && searchedToDos.length === 0) && <TodosEmpty/>}

            {/* Como se sabe que el estado siempre tendra el estado vacio, Este caso permite de que si no esta vacio 
              iterar el array con lod ToDo's }
            {searchedToDos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                // onCompleted={completeTodo} //forma de utilizar una funcion en un evento
                // onCompleted={completeTodo.text} //TODO CRASHEAAA por que los eventos en react
    
                onComplete={
                  () => completeTodo(todo.text) //forma en que react genere el evento sin esperar una funcion ya ejecutada
                }
                onDelete={
                  () => deleteTodo(todo.text)
                }
              />
            ))}
  </TodoList>
    
    
{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edita el archivo <code>src/App.js</code> y guarda para recargar.
  </p>
  <a
    className="App-link"
    href="https://platzi.com/reactjs"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */

/* 
   {/* Es necesario utilizar    las render props por lo que necesita una render funcion en este caso una arrow function que contiene valor explicito por eso se agrega todo dentro de un parentesis}
   <TodoContext.Consumer> 
   {({
     loading,
     error,
     searchedToDos,
     completeTodo,
     deleteTodo
   })=> ( 
       <TodoList>

       {/* si loading es true, es decir si estamos cargando algo ENTONCES (&&) mostrar el parrafo de carga}
       {loading && <TodosLoading/>} 
     
       {/* si error es true, es decir si existe error ENTONCES (&&) mostrar el parrafo de error }
       {error && <TodosError/>}

       {/* Para el caso en que no existan ToDo's en el array
           si loading es false, es decir si no estamos cargando  Y (&&) no existen ToDo's ENTONCES (&&) mostrar el parrafo de crear un ToDo }
       {(!loading && searchedToDos.length === 0) && <TodosEmpty/>}

       {/* Como se sabe que el estado siempre tendra el estado vacio, Este caso permite de que si no esta vacio 
         iterar el array con lod ToDo's }
       {searchedToDos.map(todo => (
         <TodoItem 
           key={todo.text} 
           text={todo.text} 
           completed={todo.completed}
           // onCompleted={completeTodo} //forma de utilizar una funcion en un evento
           // onCompleted={completeTodo.text} //TODO CRASHEAAA por que los eventos en react

           onComplete={
             () => completeTodo(todo.text) //forma en que react genere el evento sin esperar una funcion ya ejecutada
           }
           onDelete={
             () => deleteTodo(todo.text)
           }
         />
       ))}
     </TodoList>
   )}
 </TodoContext.Consumer>
*/

}