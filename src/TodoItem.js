function TodoItem(props){
    return (
      <li>
        <span>Chulo</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
}

export {TodoItem}