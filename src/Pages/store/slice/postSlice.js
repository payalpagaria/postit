import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {getRequestedHeader} from '../../../utils/util'
const headers = getRequestedHeader()

export const Allposts =createAsyncThunk("Allposts",
    async (id) => {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts${
              id ? "?userId=" + id : ""
            }`
          );
         console.log("res:",response.data)
          return response.data;
        } catch (error) {
          throw error;
        }
      }
)
export const deletePost = createAsyncThunk("deletePost", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`) 
  return id
})

export const updatePost = createAsyncThunk("updatePost", async(payload)=>{
  await axios.put(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, payload, headers)
})

export const createPost = createAsyncThunk("createPost", async (payload) => {
  await axios.post(`https://jsonplaceholder.typicode.com/posts`, payload, headers)
})
const postSlice = createSlice({
    name:"postSlice",
    initialState:{
        isLoading:false,
        data:[],
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(Allposts.pending,(state,action)=>{
            state.isLoading=true
        });
        builder.addCase(Allposts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        });
        builder.addCase(Allposts.rejected,(state,action)=>{
            console.log("Error",action.payload);
            state.isError=true;
          });
          builder.addCase(deletePost.fulfilled, (state, action)=> {
            const newData = state.data.filter((element)=> element.id !== action.payload)
            state.data = newData
        });
        
        
    }

})

export default postSlice.reducer