import { useState } from 'react'
import './App.css'
import Signup from "./Components/Signup"
import Login from "./Components/Login"

function App() {

  const [isAuth, setIsAuth] = useState('Signup')

  const toggleForm = (formName) => {
    setIsAuth(formName);
  }

  return (
    <div className="App">
      {isAuth === 'Signup' ? <Signup onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />}
    </div>
  )
}
export default App

