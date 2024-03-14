import React, { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Form() {
    const [inputValue, setInputValue] = useState("")

    function handleChange(e){
        setInputValue(e.target.value)

    }

function handleSubmit(event){
    event.preventDefault();
    
}


  return (
    <form>
        <label>
            Please enter your name
            <input type="text" value={inputValue} onChange={handleChange}/>
        </label>
        <button type="submit">
            Create to-do list
        <FontAwesomeIcon icon={faArrowRight} className='next'/>
      </button>
    </form>
    
  )
}

export default Form;