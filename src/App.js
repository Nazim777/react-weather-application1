import React from 'react'
import './App.css'
import Post from './post/Post'
import CreatePost from './post/CreatePost'
import { Route, Routes } from 'react-router-dom'

const App = () => {



  return (
   <div >
     <Routes>

       <Route path='/' element={<Post/>} />
       <Route path='/createpost' element={<CreatePost/>}/>
     </Routes>
 

   
   
   </div>
  )
}

export default App

