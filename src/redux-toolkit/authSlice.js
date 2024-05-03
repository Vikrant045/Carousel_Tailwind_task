import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState ={

}

export const updateUser = createAsyncThunk('updateUser', async(id,userData)=>{
    const  response = await axios.get(`https://fakestoreapi.com/users/${id}`, userData);
    return response;
})

export const authSLice = createSlice({
    name:"auth",
    initialState:{
        isLoading:false,
        isError:false,
        data:null
    },
    reducers:{
    },
    extraReducers:(builder)=>{

        builder.addCase(updateUser.pending,(state,action)=>{

            state.isLoading =true;
            
        })
        builder.addCase(updateUser.fulfilled,(state,action)=>{
             state.isLoading = false;
             state.data= action.payload;
        })

        builder.addCase(updateUser.rejected,(state,action)=>{
            state.isError=false;
      });

    }
   

    
})

export  default authSLice.reducer;