import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../../TodoContext';

function TodoSearch(
    /*forma de descructurar las props
    {
        searchValue,
        setSearchValue
    }*/
){
    const {
        searchValue,
        setSearchValue,
      } = React.useContext(TodoContext);

    return(
        <>
            <input id='search' 
                placeholder=    "Ingresar tarea para buscar: " 
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
            {/*console.log('estas buscando algo');
                        console.log(eve);
                        console.log(eve.target);
                        console.log(eve.target.value);*/}
            
        </>
    );
}

export { TodoSearch}; 

