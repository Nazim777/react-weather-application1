import React from 'react'
import { useContext } from 'react'
import Cartcontext from '../Hooks/Context/Cartcontext'

const Home = () => {
   const data = useContext(Cartcontext)
  return (
    <div>
        hello this is {data.name} and i am {data.age} years old ,my height is {data.height} 
      
    </div>
  )
}

export default Home
