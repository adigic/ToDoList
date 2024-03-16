import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import TodoInput from './TodoInput';
import Todo from './Todo';


function TodoPage() {

    const location = useLocation()
    const {name} = location.state
    const navigate = useNavigate();

    const [todos,setTodos] = useState ([]);


    const handleReturn = () => {
        navigate("/");
    }

    const addTodo = (todoText) => {
        // För att första bokstaven i meningen ska vara stor.
        const capitalLetter = todoText.charAt(0).toUpperCase() + todoText.slice(1);
        const newTodo = {
            id: Math.random(),
            text: capitalLetter,
            completed: false
    };
    setTodos([...todos, newTodo]);
    }

    const removeTodo =(id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id? { ...todo, completed: !todo.completed } : todo ));
    };

  return (
    <div className='todo-page'>
        <div className="return">
        <button onClick={handleReturn}><FontAwesomeIcon icon={faArrowLeft} className='returnBtn'/></button>
        </div>
        <div className="header">
        <h2 className='welcome'>{name}</h2>
        </div>
        <TodoInput addTodo={addTodo}/>
        <div>
            
            {todos.length > 0 ? (
                <ul>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            removeTodo={removeTodo}
                        />
                    ))}
                </ul>
            ) : (
                <p className='notask'>No tasks available.</p>
            )}
        </div>
    
</div>



  )
}

export default TodoPage;