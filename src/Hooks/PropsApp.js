import React from 'react'
import './App.css'
import PropsHooks from './Hooks/PropsHooks'

const App = () => {
  const data= {
    name: 'Mohammad',
    profession: 'engineer',
    city: 'Dhaka',
    country: 'Bangladesh'
  }

  return (
    <div>
      <h1>hello</h1>
      <PropsHooks data={data} />
      

      
     
     
      
    </div>
  )
}

export default App
