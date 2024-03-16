import { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const[todoText, setTodoText] = useState("");

    const handleChange = (event) => {
        setTodoText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoText.trim() !== "") {
            addTodo(todoText);
            setTodoText("");
        }
    };

  return ( 
    <div className='form'>
    <form className='TodoForm' onSubmit={handleSubmit}>    
    <input 
    type="text"
    className="todo-input"
    placeholder='What would you like to add?'
    value={todoText}
    onChange={handleChange} />

    <button type='submit' className='todo-btn'>Add</button>
</form>

    </div>
  )
}

export default TodoInput;