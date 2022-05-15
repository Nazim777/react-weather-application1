import React from 'react'
import Home from './Componets/Home'
import Cartstate from './Hooks/Context/Cartstate'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Cartstate>
        <Home/>
      </Cartstate>
      
    </div>
  )
}

export default App
