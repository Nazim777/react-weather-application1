import React from 'react'
import Productcontext from './Productcontext'
import { useContext } from 'react'

const Contextcomponents1 = () => {
  const data =useContext(Productcontext)
  return (
    <div>
      hello my name is {data.name}
     
    </div>
  )
}

export default Contextcomponents1
