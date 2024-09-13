import React from 'react'
import Singleproduct from './singleproduct'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { fetchproduct } from '../features/productslice'

function Product() {
  const dispatch=useDispatch()

  const product=useSelector(state=>state.product)
  const slectedcategory=useSelector(state=>state.category.selectedcategory)
  useEffect(()=>{
dispatch(fetchproduct())
  },[])

    return (
        <>
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Featured Products</span>
    </h2>
    <div className="row px-xl-5">
    {product.data.filter(e=>e.category==slectedcategory).map((e,index)=>(<Singleproduct key={index} product={e}/>))}
    </div> 
  </div>
  {/* Products End */}
</>
    )
}

export default Product
