import React from 'react'
import Productcontext from './Productcontext'

const Productstate= (Props) => {

   
    const state ={
        name: 'Mohammad Nazim Hossain',
        age: 22,
        height: 5.8,
        city: 'Dhaka',
        country: 'Bangladesh',
       
    }


   
  return (
      <Productcontext.Provider value={state}>
          {Props.children}

      </Productcontext.Provider>
  
      
  )
}

export default Productstate
