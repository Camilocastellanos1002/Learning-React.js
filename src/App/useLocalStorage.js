import React from "react";

//funcion Custom Hooks
function useLocalStorage(itemName, initialValue){

  //Utilizar localStorage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  //estado de localstorage para manejar su contenido
  const [item, setItem] = React.useState(parsedItem);

  //forma de actualizar el array de ToDo's y actualizar tambien el localstorage
  const saveItem = 
  (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
}

export {useLocalStorage};   