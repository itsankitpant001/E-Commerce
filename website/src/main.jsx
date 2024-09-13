import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Shop from './pages/shop'
import { Provider } from 'react-redux'
import store from './apps/store'
import Cart from './pages/cart'
import Help from './pages/help'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/help' element={<Help/>}/>

</Routes>
</BrowserRouter>
</Provider>
    
 
)
