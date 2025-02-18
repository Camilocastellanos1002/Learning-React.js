import logo from './platzi.webp';
import './App.css';
import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

//crear una lista de objetos
const arrayToDoList =[
  {
    text: "Pagar el arriendo",
    completed: true
  },
  {
    text: "Pagar los servicios ",
    completed: false
  },
  {
    text: "Comprar el Alimento para los animales ",
    completed: false
  },
  {
    text: "Estudiar para luego poder ganar mucha plata",
    completed: true
  },
  {
    text: "Hacer el inmobrable",
    completed: false
  },
  {
    text: "Dormir como bebé",
    completed: false
  }
];


function App() {

  // forma de generar un estado
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan ToDos de '+ searchValue);

  //forma de que toDo's sean un estado, y se ingresara el array como valor por defecto
  const [todos,setTodos] = React.useState(arrayToDoList);

  //se genera filtrado de estados completados por medio de filter 
  const completedToDos = todos.filter(
    todo => !!todo.completed 
  ).length;
  const totalToDos = todos.length;
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
          return todo.text ==  text         
          
        } 
      );
      console.log("Índice encontrado:", todoIndex); // Verifica el índice encontrado

      if (todoIndex !== -1) {
          newTodos[todoIndex].completed = true;
          setTodos(newTodos);
      } else {
          console.error("Todo no encontrado");
      }
  };

  const deleteTodo =
    (text) => { 
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex( 
        (todo)  => {
          return todo.text ==  text         
        } 
      );
      newTodos.splice(todoIndex,1); //metodo de arrays que permite eliminar desde la posicion index, 1 elemento despues de este
      setTodos(newTodos);
  };
  


  return (
    //forma de recrear un solo objeto HTML para retornar
    <>
    {/* <React.Fragment> */}

      <TodoCounter completed={completedToDos} total={totalToDos} id="TodoCounter"/>
      {/* <TodoCounter completed={3} total={5}/>
      <TodoCounter completed={1} total={8}/> */}


      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      {/* antes de crear los estados se tenia lo siguiente: 
           {arrayToDoList.map(todo => ( */}
      <TodoList>
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

      <CreateTodoButton/>



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
      </header> */}


    {/* </React.Fragment> */}
    </>
  );
}

export default App;
