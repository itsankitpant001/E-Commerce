import {configureStore} from '@reduxjs/toolkit'
import categoryslice from '../features/categoryslice'
import productslice from '../features/productslice';
import cartslice from '../features/cartslice';
const store=configureStore({
    reducer:{
        category:categoryslice.reducer,
        product:productslice.reducer,
        cart:cartslice.reducer
    }
    
})
export default store;
