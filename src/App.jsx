import './App.css'
import React from 'react'
import SignUp from './components/SignUp'

import NavBar from './components/NavBar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Login from './components/login'
function App() {

  return (
    <div className='h-[100vh]'>
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<SignUp/>}/>

      </Routes>
      </Router>
    </div>
  )
}

export default App
