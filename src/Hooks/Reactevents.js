import React from 'react'

const Reactevents = () => {


    const senddata=(data)=>{
        console.log(data)

    }
const datasent = (data2)=>{
    console.log(data2)
    alert(data2)

}

  return (
    <div>
        <button onClick={()=>{senddata('hello data sent')}}>click me</button>
        <button onClick={()=>datasent('hello data sent 2')}>click me2</button>
      
    </div>
  )
}

export default Reactevents
