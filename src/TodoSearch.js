import React from 'react';

import './TodoSearch.css'

function TodoSearch(){
    const [searchValue, setsearchValue] = React.useState('');
    console.log('Los usuarios buscan ToDos de '+searchValue);
    return(
        <>
            <input id='search' 
                placeholder="Ingresa nombre de tarea a buscar: " 
                value={searchValue}
                onChange={(eve)=>{
                    {/*console.log('estas buscando algo');
                    console.log(eve);
                    console.log(eve.target);
                    console.log(eve.target.value);*/}
                    setsearchValue(eve.target.value);
                }}
                
            />
            
        </>
    );
  
}

export { TodoSearch}; 