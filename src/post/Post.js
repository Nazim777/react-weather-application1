import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, getPost, setEdit, updatePost } from '../Redux/features/PostSlice'
import { useNavigate } from 'react-router-dom'

const Post = () => {
    const[id,setid]= useState('')
    const dispatch= useDispatch()
    const fetchpostbyid=(e)=>{
        e.preventDefault()
      
        dispatch(getPost(id))
        // setid('')
    }
   
   const{post,loading, body, edit} =useSelector((state)=>state.app)
   //console.log(post,loading)

   const postDelete=()=>{
       //dispatch(deletePost({id:post[0].id}))
       dispatch(deletePost(id))
       window.alert('post deleted')
    
      
   }
  const navigate=useNavigate()

  const handleEdit=()=>{
    dispatch(setEdit({edit:true, body:post[0].body}))
  }
const [bodyText,setbodyText] =useState('')
useEffect(()=>{
if(body){
  setbodyText(body)
}
},[body])
const handleSave=()=>{
  dispatch(updatePost({id:post[0].id,title:post[0].title,body:bodyText}))
  dispatch(setEdit({edit:false,body:''}))
//console.log(post[0].id)
}
const handleCancel=()=>{
  dispatch(setEdit({edit:false,body:''}))

}


  return (
    <div className='container'>
        <h1 className='mt-2 mb-2'> serach post by id</h1>
        <input type="text" className='form-control mt-2' value={id} onChange={(e)=>setid(e.target.value)} placeholder='enter id'  />
        <button type='submit' className='btn btn-info mt-3' onClick={fetchpostbyid}>Fetch Post</button>
        <button className='btn btn-primary mt-3 ms-3' onClick={()=>navigate('/createpost')}>Create Post</button>

{(loading)?


<div className="spinner-border text-primary " role="status">
  <span className="visually-hidden">Loading...</span>
</div>


:(post.length>0)&&


<div className="card w-75 mt-5">
<div className="card-body">
  <h5 className="card-title">{post[0].title}</h5>

  {(edit)? 
  <div>
    <textarea name="" value={bodyText} onChange={(e)=>setbodyText(e.target.value)} id="" cols="15" rows="10"></textarea> <br />
    <button className='btn btn-primary' onClick={handleSave}> Save </button>
  <button className='btn btn-info ms-2'onClick={handleCancel}>Cancel</button>

  </div>
  :
  <>
  
   <p className="card-text">{post[0].body}</p>
   <button className='btn btn-primary' onClick={handleEdit}> Edit </button>
  <button className='btn btn-info ms-2'onClick={postDelete}>Delete</button>
  
  
   </>
  }
 
  
</div>
</div>



}

      
    </div>
  )
}

export default Post
