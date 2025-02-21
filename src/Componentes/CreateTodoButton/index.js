import './CreateTodoButton.css'
function CreateTodoButton({setOpenModal}){
    return(
        <button 
            id='button' 
            onClick={
                // (event)=>{
                //     console.log('le diste click')
                //     console.log(event)
                //     console.log(event.target)}
                ()=>{
                    setOpenModal(state => !state);
                }
            }>
            +
        </button>
    );
}

export {CreateTodoButton}