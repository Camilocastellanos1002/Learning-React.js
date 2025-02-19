
import { TodoItem } from '../Componentes/TodoItem';
import { TodoCounter } from '../Componentes/TodoCounter';
import { TodoSearch } from '../Componentes/TodoSearch';
import { TodoList} from '../Componentes/TodoList';
import { CreateTodoButton } from '../Componentes/CreateTodoButton';

function AppUI ({
  completedToDos,
  totalToDos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeTodo,
  deleteTodo
}){
    return (
        //forma de recrear un solo objeto HTML para retornar
        <>
        {/* <React.Fragment> */}
    
          <TodoCounter
            completed={completedToDos} 
            total={totalToDos}/>
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

export { AppUI };