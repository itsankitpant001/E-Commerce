import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

function Cartcount() {
    const cart=useSelector(state=>state.cart.cart)
    return (
       
        <>
          <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
            <a href="" className="btn px-0">
              <i className="fas fa-heart text-primary" />
              <span
                className="badge text-secondary border border-secondary rounded-circle"
                style={{ paddingBottom: 2 }}
              >
                
              </span>
            </a>
            <NavLink to="/cart" className="btn px-0 ml-3">
              <i className="fas fa-shopping-cart text-primary" />
              <span
                className="badge text-secondary border border-secondary rounded-circle"
                style={{ paddingBottom: 2 }}
              >
               {cart.length}
              </span>
            </NavLink>
          </div>
        </>
    )
}

export default Cartcount;
