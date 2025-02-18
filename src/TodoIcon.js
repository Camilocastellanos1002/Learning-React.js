//forma de anexar un archivo svg como un elemento a utilizar
import { ReactComponent as CheckSVG } from './check.svg'   
import { ReactComponent as DeleteSVG } from './delete.svg'
import './TodoIcon.css';

//tipos escoger el icono de forma dinamica
const iconTypes = {
    "check" : (color) =>
        <CheckSVG  
            className='Icon-svg'
            fill={color}/>,
    "delete" : (color) =>
        <DeleteSVG 
            className='Icon-svg' 
            fill={color}/>

}
function TodoIcon( { type, color, onClick }){
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {/* dependiendo del typo que se reciba, se le anexa el color y el evento onClick */}
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};

