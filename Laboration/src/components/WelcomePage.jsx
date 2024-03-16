import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function WelcomePage() {
    const [name, setName] = useState("")
    const navigate = useNavigate();

    const handleWelcome = (event) => {
        event.preventDefault();
        navigate('/Todo', { state: { name } });
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };
    
    
    return (
<div>
    <form onSubmit={handleWelcome}>
        <h3 className='yellow'>TO<span className='do'>DO</span>LIST</h3>
        <label>
            <input type="text" value={name} onChange={handleChange} placeholder='Please enter a name' className='nameInput' required/>
        </label>
        <button type="submit">
            Create to-do list
            <FontAwesomeIcon icon={faArrowRight} className='next'/>
        </button>
    </form>
    <h4>Made by Adis Hegic</h4>
</div>
        
      )

}

export default WelcomePage;
