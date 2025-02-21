import React from "react";
import ReactDOM from "react-dom"
import './ModalStyle.css'

function Modal ({children}){
    return ReactDOM.createPortal(   //Magia de esta funcion, describir el contenido que se desea transportar: Contenido que se quiere trasportar & Donde se quiere transportar el contenido
        <section className="Modal-container">
            {children}   
        </section>,
        document.getElementById('modal')
    );
}

export {Modal};