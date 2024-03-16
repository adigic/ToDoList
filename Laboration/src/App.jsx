import './App.css'
import WelcomePage from './components/WelcomePage'
import TodoPage from './components/TodoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route exact path="/" element={<WelcomePage/>}/>
      <Route exact path="/Todo" element={<TodoPage/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
