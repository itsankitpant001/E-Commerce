import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const initialstate={
    loading:false,
    data:[],
    error:'',
    selectedcategory:"beauty"
}
export var fetchcategory=createAsyncThunk('category/fetchcategory',()=>{
    return axios.get('https://dummyjson.com/products/category-list').then((success)=>{
        return success.data;     
    })
})
const categoryslice=createSlice({
    name:'category',
    initialState:initialstate,
    reducers:{
        changecategory:(state,action)=>{
            state.selectedcategory=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchcategory.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchcategory.fulfilled,(state,action)=>{
            state.data=action.payload;        
        })
        builder.addCase(fetchcategory.rejected,(state,action)=>{
            state.error=action.payload;
        })
    }
})
export default categoryslice;