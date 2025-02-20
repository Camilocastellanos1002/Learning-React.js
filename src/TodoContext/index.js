import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

/**
 * El contexto permite utiliar los siguientes componentes
    * <TodoContext.Provider></TodoContext.Provider>
    * <TodoContext.Consumer></TodoContext.Consumer>

    pero se generan de la siguiente manera para tener mas beneficios:
        * forma mas personalizada
        * se podra encapsular su propia logica
 */
function  TodoProvider( {children}){


  //forma de que toDo's sean un estado, y se ingresara el array como valor por defecto
  // const [todos,setTodos] = React.useState(parsedTodos);
    //const [todos,saveTodos] = useLocalStorage('ToDos',[]);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('ToDos',[]);

  // forma de generar un estado, cuyo valor inicial seran los valores agregados en el localstorage
  const [searchValue, setSearchValue] = React.useState('');
//   console.log('Los usuarios buscan ToDos de '+ searchValue);

 
  //se genera filtrado de estados completados por medio de filter 
  const completedToDos = todos.filter(
    todo => !!todo.completed 
  ).length;
  const totalToDos = todos.length;

  //forma de encapsular codigo y estar condicionado al cambio de un estado
  React.useEffect(()=>{
    console.log(`el total de tareas son: ${totalToDos}`);
  },[totalToDos]);
  //estado que filtrara si coincida el valor ingresado en el input con alguna tarea por hacer
  const searchedToDos = todos.filter(
    toDo => {
      const toDoText = toDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      //inclues es un metodo de los strings y se retorna todos los 
      return toDoText.includes(searchText)
    }
  );

  const completeTodo =
    (text) => {  //se tiene en cuenta que en el todoItem, el key es generado por el texto del ToDo
                //Se debe tener en cuenta que esta funcion necesita un texto de ingreso para poder realizar la operacion

      console.log("Texto buscado:", text); // Verifica el texto que estás buscando
      console.log("Todos:", todos); // Verifica el contenido de `todos`


      const newTodos = [...todos] //se crea una copia del arraylist
      // console.log(newTodos);
      
      
      const todoIndex = newTodos.findIndex( //se busca el ToDo por medio del index
        (todo)  => {
          console.log("Texto del toDo:", todo.text); // Verifica cada texto en `todos`
          return todo.text ===  text         
          
        } 
      );
      console.log("Índice encontrado:", todoIndex); // Verifica el índice encontrado

      if (todoIndex !== -1) {
          newTodos[todoIndex].completed = true;
          saveTodos(newTodos);
      } else {
          console.error("Todo no encontrado");
      }
  };

  const deleteTodo =
    (text) => { 
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex( 
        (todo)  => {
          return todo.text ===  text         
        } 
      );
      newTodos.splice(todoIndex,1); //metodo de arrays que permite eliminar desde la posicion index, 1 elemento despues de este
      saveTodos(newTodos);
  };

    return(
        /* Se exporta y encapsula la informacion o props deseadas al componente que los requiera enviandola por por medio de la propiedad value,
            por medio de un objeto con la informacion */
        <TodoContext.Provider 
            value={{
                loading,
                error,
                completedToDos,
                totalToDos,
                searchValue,
                setSearchValue,
                searchedToDos,
                completeTodo,
                deleteTodo
            }}>
            {children}  {/* el componente dentro del componente TodoContext, heredara los valores por medio de las props functions */}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };