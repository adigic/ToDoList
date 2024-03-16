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
        const newTodo = {
            id: Date.now(),
            text: todoText,
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
        <h2 className='welcome'>Welcome {name}</h2>
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
                <p>No tasks available.</p>
            )}
        </div>
    
</div>



  )
}

export default TodoPage;