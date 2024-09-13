import {createSlice} from '@reduxjs/toolkit'

const initialState={cart:[]};

const cartslice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        additemtocart:(state,action)=>{
            const cartproduct=action.payload;
            let obj=state.cart.find(e=>e.product.id==cartproduct.product.id)
            if(obj){
                obj.quantity++;
            }
            else{
                state.cart.push(cartproduct);
            }
        },
        increasequantity:(state,action)=>{
            const cartproduct=action.payload;
            const obj=state.cart.find(e=>e.product.id==cartproduct.product.id)
            if(obj){
                obj.quantity++
            }
            else{
               
            }


        },
        decreasequantity:(state,action)=>{
            const cartproduct=action.payload;
            const obj=state.cart.find(e=>e.product.id==cartproduct.product.id)
            if(obj.quantity>1){
                obj.quantity--;
            }
            else{
               let index=state.cart.findIndex(e=>e.product.id==cartproduct.product.id)
               state.cart.splice(index,1)
            }

        },
        removeitemfromcart:(state,action)=>{
            const cartproduct=action.payload;
            const index = state.cart.findIndex(e=>e.product.id==cartproduct.product.id)
            state.cart.splice(index,1);
        }
    }
})

export default cartslice;