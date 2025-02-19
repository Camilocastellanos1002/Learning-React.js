import React from "react";

//funcion Custom Hooks
function useLocalStorage(itemName, initialValue){

  //creacion del estado con un valor inicial, siendo en este caso un array vacio
  const [item, setItem] = React.useState(initialValue); 

  //estado de carga y error que observara si el array vacio es por que esta vacio, estamos esperando un valor o existe un error
  const [loading, setLoading] = React.useState(true); //inicialmente se esta cargando
  const [error, setError] = React.useState(false);  //inicialmente no existe error


  //creacion de efecto o encapsulamiento
  React.useEffect(
    ()=>{
      /* 
        Para eliminar el Warning: Maximum update exceeded
        Causa: se genera en el ciclo infinito por que el EFECTO esta actualizando el estado y el estado causa un nuevo render (volver a ejecutar el efecto) y asi .....
        Solucion: SetTimeout
      */
      //funcion que permite que el bloque de codigo se ejecute una sola vez, despues de cierto tiempo en este caso 2 milisegundos
     setTimeout(
      ()=>{
        try {
          //Utilizar localStorage
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem) //si el initialValue es distinto de vacio y existe algo diferente enviar el parseItem 
          }

          setLoading(false); //si se ejecto el estado, actualizar estado de carga
        } catch (error) {
          setLoading(false); //si hubo error tambien actualizar y cancelar el estado de carga
          setError(true); //si se genere error, actualizar el estado del error
        }
     },2000);
    },[]); //eliminar el error infinito de que se genere el efecto tambien cada 2 segundos, agregar ,[] para que solo se ejecute una vez


  //estado de localstorage para manejar su contenido
  // const [item, setItem] = React.useState(parsedItem);

  //forma de actualizar el array de ToDo's y actualizar tambien el localstorage
  const saveItem = 
  (newItem) =>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };
  //retornar un valor y un estado
    //return [item, saveItem];
  //en caso de retornar mas de dos valores, es preferible retornar un objeto
  return {
    item,
    saveItem,
    loading,
    error
  };
}

export {useLocalStorage};   