import React,{useState,useEffect}  from 'react'

const UseEffect = () => {


    
  const [num, setnum] = useState(0)
  const [nums , setnums] = useState(0)
  useEffect(()=>{
    alert('clicked')
    console.log('button clicked')
  },[num])


  return (
    <div>

      <button onClick={()=>setnum(num+1)}>click me{num}</button>
      <button onClick={()=>setnums(nums+1)}>click me{nums}</button>
      
    </div>
  )
}

export default UseEffect
