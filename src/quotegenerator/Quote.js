import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Quote = () => {
    const [quote, setquote] = useState('')

   
    useEffect(()=>{
        const fetchdata=async()=>{
            const data= await axios.get('https://api.quotable.io/random')
           // console.log(data.data)
            setquote(data.data)
        }
       
        fetchdata()
    },[])

    const handleClick=async()=>{
        const data= await axios.get('https://api.quotable.io/random')
       // console.log(data.data)
       setquote(data.data)


       
    }
  return (
    <div>


<div className="card w-75">
  <div className="card-body">
    <h5 className="card-title">{quote.author}</h5>
    <p className="card-text">{quote.content}</p>
    <button type='submit' className='btn btn-primary' onClick={handleClick}>Button</button>
  </div>
</div>
    
    </div>
  )
}

export default Quote
