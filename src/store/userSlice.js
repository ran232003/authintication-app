import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{user:{},loggedIn:false},
    reducers:{
        setUser(state,action){
            state.user = action.payload
        },
        loogedIn(state,action){
            state.loggedIn = action.payload;
        }
    
    }
})

export const userAction = userSlice.actions;
export default userSlice; 