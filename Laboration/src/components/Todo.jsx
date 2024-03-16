import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, toggleComplete, removeTodo}) => {

    const {id, text, completed} = todo;

    const handleToggleComplete = () => {
        toggleComplete(id);
    }

    const handleRemove = () => {
        removeTodo(id);
    }


       const styleCompleted = () => {
        return {
            textDecoration: completed ? 'line-through' : 'none',
            backgroundColor: completed ? '#c3a95e' : '#ffdd78'
        };
    };

    return (

        <div>
            <div className='tasks'>
                <li style={styleCompleted()}>
                    <span onClick={handleToggleComplete} style={styleCompleted()}>{text}
                    </span>
                    <i onClick={handleRemove}><FontAwesomeIcon icon={faTrash}/></i>
                    </li>

            </div>
            </div>

        
    )
};

export default Todo;