import React from 'react'
import Productstate from './Hooks/Context1/Productstate'
import Contextcomponents1 from './Hooks/Context1/Contextcomponents1'



const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Productstate>
        <Contextcomponents1/>
        
        </Productstate>      
      
    </div>
  )
}

export default App
