import React from 'react'
import Cartcontext from './Cartcontext'
const Cartstate = (Props) => {
    const state ={
        name: 'Mohammad Nazim Hossain',
        age: 22,
        height: 5.8
    }
  return (
    <Cartcontext.Provider value={state}>
       {Props.children}

    </Cartcontext.Provider>
  )
}

export default Cartstate
