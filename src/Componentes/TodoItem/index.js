import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css'


function TodoItem(props){
    return (
      <li className='li'>
        <>
        <CompleteIcon 
          completed = {props.completed}
          onComplete={props.onComplete}
          />

        {/* <span className={`Icon Icon-check  ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}>
          
        </span> */}

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}</p>
        </>

        <DeleteIcon 
          onDelete={props.onDelete}
        />

        {/* <span className={`Icon Icon-delete`}
        </span> */}

      </li>
    );
}

export {TodoItem}
