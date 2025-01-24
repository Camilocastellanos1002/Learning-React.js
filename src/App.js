import logo from './platzi.webp';
import './App.css';
// import React from 'react';
import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList} from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

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
  }
];


function App() {
  return (
    <>
    {/* <React.Fragment> */}

      <TodoCounter completed={16} total={arrayToDoList.length} id="TodoCounter"/>
      {/* <TodoCounter completed={3} total={5}/>
      <TodoCounter completed={1} total={8}/> */}


      <TodoSearch/>
      <TodoList>
        {arrayToDoList.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}/>
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
