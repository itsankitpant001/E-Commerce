import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    data:[],
    error:''
}

export var fetchproduct=createAsyncThunk('product/fetchproduct',()=>{
    return axios.get('https://dummyjson.com/products').then((success)=>{
        return success.data.products 
    })
})
const productslice=createSlice({
    name:'product',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchproduct.pending,(state,action)=>{
            state.loading=true;
        }),
        builder.addCase(fetchproduct.fulfilled,(state,action)=>{
            state.data=action.payload;
        }),builder.addCase(fetchproduct.rejected,(state,action)=>{
            state.error=action.payload;
        })
    }

})
export default productslice;