import React, { useEffect, useState, } from 'react'

const Useeffect = () => {
    const [name,setname] = useState('Rahim')
    const [age, setage] = useState(0)
     useEffect(()=>{
         console.log(name)

     },[age])
     const ChangeName=()=>{
         setname('Nazim')
     }
     const ChangeAge=()=>{
         setage(22)
     }
  return (
    <div>
        <h1>hello {name} and age: {age}</h1>
        <button onClick={ChangeName} >Button</button>
        <button onClick={ChangeAge} style={{marginLeft:20}}> Button</button>
      
    </div>
  )
}

export default Useeffect
