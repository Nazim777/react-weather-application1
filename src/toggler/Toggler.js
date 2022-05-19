import React,{useState} from 'react'

const Toggler = () => {
    const [color,setcolor] = useState(true)

    const changeColor= ()=>{
        setcolor(!color)
      }
  return (
    <div className='container mt-2'>
        <div className={(color) ?'divcolor1':'divcolor2'}>
    </div>
<button onClick={changeColor} className='btn btn-primary mt-3 ' style={{textAlign:'center'}}>Button</button>
  
      
    </div>
  )
}

export default Toggler






