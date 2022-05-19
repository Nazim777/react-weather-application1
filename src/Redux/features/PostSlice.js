import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPost= createAsyncThunk('/post/getpost',async(id)=>{
    const{data}= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //console.log(data)
    return data
  
})

export const deletePost= createAsyncThunk('/post/deletepost',async(id)=>{
  return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
})

export const createPost= createAsyncThunk('/post/createpost',async(inputs)=>{
    const {data}= await axios.post('https://jsonplaceholder.typicode.com/posts', inputs)
   // console.log(data)
    return data  
})
export const updatePost= createAsyncThunk('/post/updatepost',async({id, title, body})=>{
   const {data} =  await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{title,body})
 // console.log(data)
  return data

})

const postSlice=createSlice ({
    name:'post',
    initialState:{
        loading: false,
        post:[],
        error:null,
        body:'',
        edit:false
    },
    reducers:{
        setEdit:(state,action)=>{
            state.body= action.payload.body;
            state.edit= action.payload.edit
        }

    },
     extraReducers:{
         [getPost.pending]:(state, action)=>{
             state.loading= true
         },
         [getPost.fulfilled]:(state, action)=>{
             state.loading=false;
             state.post= [action.payload]

         },
         [getPost.rejected]:(state, action)=>{
             state.error= action.payload
         },
         [deletePost.pending]:(state,action)=>{
             state.loading= true;
         },
         [deletePost.fulfilled]:(state,action)=>{
            state.loading= false;
            state.post= action.payload
         },
         [deletePost.rejected]:(state,action)=>{
             state.loading= false;
             state.error= action.payload
         },
         [createPost.pending]:(state,action)=>{
            state.loading= true;
        },
        [createPost.fulfilled]:(state,action)=>{
           state.loading= false;
           state.post= [action.payload]
        },
        [createPost.rejected]:(state,action)=>{
            state.loading= false;
            state.error= action.payload
        },
        [updatePost.pending]:(state,action)=>{
            state.loading= true;
        },
        [updatePost.fulfilled]:(state,action)=>{
           state.loading= false;
           state.post= [action.payload]
        },
        [updatePost.rejected]:(state,action)=>{
            state.loading= false;
            state.error= action.payload
        }

     }
})
export const {setEdit} = postSlice.actions
export default postSlice.reducer
