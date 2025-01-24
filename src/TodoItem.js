
import './TodoItem.css'
function TodoItem(props){
    return (
      <li id='li'>
        <>
        <span id={`chulo_item ${props.completed && "chulo_item--active"}`}>
          <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
        </span>
        <p id={`item_content ${props.completed && "item_content-complete"}`}>{props.text}</p>
        </>
        <span id={`item_close ${props.completed && "item_close-complete"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </span>
      </li>
    );
}

export {TodoItem}
