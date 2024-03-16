import React, { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, toggleComplete, removeTodo}) => {

    const {id, text, completed} = todo;

    const handleToggleComplete = () => {
        toggleComplete(id);
    }

    const handleRemoveTodo = () => {
        removeTodo(id);
    }

    return (

        <div>
            <div className='tasks'>
                <li style={{ textDecoration: completed ? 'line-through' : 'none'}}>
                    <span onClick={handleToggleComplete}>{text}
                    </span>
                    <i onClick={handleRemoveTodo}><FontAwesomeIcon icon={faTrash}/></i>
                    </li>

            </div>

            </div>

        
    )
};

export default Todo;