import { createSlice } from "@reduxjs/toolkit";
const cartlsice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addtocart(state, action){
            state.push(action.payload)

        },
        removetocart(state, action){
            return state.filter((item)=>item.id !==action.payload)
        }

    }
    
     
})


export const{addtocart, removetocart} = cartlsice.actions
export default cartlsice.reducer