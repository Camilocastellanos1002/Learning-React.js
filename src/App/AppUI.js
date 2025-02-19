
import { TodoItem } from '../Componentes/TodoItem';
import { TodoCounter } from '../Componentes/TodoCounter';
import { TodoSearch } from '../Componentes/TodoSearch';
import { TodoList} from '../Componentes/TodoList';
import { CreateTodoButton } from '../Componentes/CreateTodoButton';

function AppUI ({
  loading,
  error,
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

            {/* si loading es true, es decir si estamos cargando algo ENTONCES (&&) mostrar el parrafo de carga*/}
            {loading && <p>Estamos cargando... </p>} 
          
            {/* si error es true, es decir si existe error ENTONCES (&&) mostrar el parrafo de error */}
            {error && <p>Hubo un error!</p>}

            {/* Para el caso en que no existan ToDo's en el array
                si loading es false, es decir si no estamos cargando  Y (&&) no existen ToDo's ENTONCES (&&) mostrar el parrafo de crear un ToDo */}
            {(!loading && searchedToDos.length === 0) && <p>¡Crea tu primera Tarea!</p>}

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