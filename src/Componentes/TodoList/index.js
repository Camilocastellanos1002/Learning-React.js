import './TodoList.css'

function TodoList({children}){
    return (
        <ul id='ul'>
            {children}
        </ul>
    );
}

export {TodoList}