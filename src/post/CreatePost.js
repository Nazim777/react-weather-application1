import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../Redux/features/PostSlice'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const [inputs, setinputs] = useState({
        title:'',
        body:''
    })
//const {showPost, setshowPost} =useState(false)
    const handleChange=(e)=>{
        setinputs((prevstate)=>({
            ...prevstate,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const dispatch= useDispatch()
    const handleClick=()=>{
        //console.log(inputs)
        dispatch(createPost(inputs))
        setinputs({title:'',body:''}) // for make empty the input fields
       // setshowPost(true)
    }
    const {post,loading}=useSelector((state)=>state.app)
   // console.log(post,loading)
   const navigate= useNavigate()
  return (
    <div className='container '>


<form className='mt-6 ' onSubmit={handleSubmit}>
  <div className="mb-3 mt-5">
    <label  className="form-label">Title</label> <br />
    <input type="text" name='title' value={inputs.title} onChange={handleChange}  /><br />
   
  </div> 
  <div className="mb-3">
    <label className="form-label">Body</label> <br />
   <textarea name="body" value={inputs.body} onChange={handleChange}  id="" cols="20" rows="10"></textarea> 
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
  <button className='btn btn-info ms-3' onClick={()=>navigate('/')} >Home</button>
</form>

{(loading)?
    <div className="spinner-border text-primary mt-3" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

:(post.length>0)&&


<div className="card w-75 mt-5">
<div className="card-body">
  <h5 className="card-title">{post[0].title}</h5>
  <p className="card-text">{post[0].body}</p>
  
</div>
</div>



}


      
    </div>
  )
}

export default CreatePost
