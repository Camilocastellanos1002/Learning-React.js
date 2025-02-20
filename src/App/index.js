import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {

  return (
    //  <AppUI/>
    <TodoProvider>  {/* Esta manera AppUI y sus hijos heredaran los valores del contexto TodoProvider */}
      <AppUI/>
    </TodoProvider>
  );
}

export default App;


//forma de utilizar componentes con props sin uso del contexto

    // <AppUI
    //   // loading={loading}
    //   // error={error}
    //   // completedToDos={completedToDos}
    //   // totalToDos={totalToDos}
    //   // searchValue={searchValue}
    //   // setSearchValue={setSearchValue}
    //   // searchedToDos={searchedToDos}
    //   // completeTodo={completeTodo}
    //   // deleteTodo={deleteTodo}
    // />