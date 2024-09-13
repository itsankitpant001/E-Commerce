import React from 'react'
import { useDispatch } from 'react-redux'
import {NavLink} from 'react-router-dom'
import cartslice from '../features/cartslice';


function Singleproduct(props) {
  const dispatch=useDispatch();
  function addtocart()
  {
     dispatch(cartslice.actions.additemtocart({product:props.product,quantity:1}))
  }

    return (
        <>
<div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={props.product.thumbnail} alt="" />
          <div className="product-action">
            <NavLink  onClick={addtocart} className="btn btn-outline-dark btn-square" >
              <i className="fa fa-shopping-cart" />
            </NavLink>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="far fa-heart" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-sync-alt" />
            </a>
            <a className="btn btn-outline-dark btn-square" href="">
              <i className="fa fa-search" />
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href="">
          {props.product.title}
          </a>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <h5>{props.product.price}</h5>
            <h6 className="text-muted ml-2">
              <del>$123.00</del>
            </h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small className="fa fa-star text-primary mr-1" />
            <small>(99)</small>
          </div>
        </div>
      </div>
    </div>


        </>
    )
}

export default Singleproduct
