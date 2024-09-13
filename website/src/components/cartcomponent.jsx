import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { discountedprice, subtotalcartprice, total, totalcartprice } from '../utilityfunction/utility'
import cartslice from '../features/cartslice';

function Cartcomponent() {
  const dispatch=useDispatch();
  function quantity_minus(e)
  {
     dispatch(cartslice.actions.decreasequantity(e))
  }
  function quantity_plus(e)
  {
    dispatch(cartslice.actions.increasequantity(e))
  }
  function delete_click(e)
  {
    dispatch(cartslice.actions.removeitemfromcart(e))
  }
  const cartarry=useSelector(state=>state.cart.cart)
    return (
        <>
        <>
  {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <a className="breadcrumb-item text-dark" href="#">
            Home
          </a>
          <a className="breadcrumb-item text-dark" href="#">
            Shop
          </a>
          <span className="breadcrumb-item active">Shopping Cart</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Cart Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-9 table-responsive mb-5">
        <table className="table table-light table-borderless table-hover text-center mb-0">
          <thead className="thead-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Discounted price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
           {cartarry.map((e,index)=>( <tr key={index}>
              <td className="align-middle">
                <img src={e.product.thumbnail} alt="" style={{ width: 50 }} />{" "}
                {e.product.title}
              </td>
              <td className="align-middle">{e.product.price}</td>
              <td className="align-middle">{discountedprice(e.product.price,e.product.discountPercentage)}</td>
              <td className="align-middle">
                <div
                  className="input-group quantity mx-auto"
                  style={{ width: 100 }}
                >
                  <div className="input-group-btn">
                    <button onClick={()=>(quantity_minus(e))} className="btn btn-sm btn-primary btn-minus">
                      <i className="fa fa-minus" />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-secondary border-0 text-center"
                    Value={e.quantity}
                  />
                  <div className="input-group-btn">
                    <button onClick={()=>quantity_plus(e)} className="btn btn-sm btn-primary btn-plus">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </td>
              <td className="align-middle">{total(discountedprice(e.product.price,e.product.discountPercentage),e.quantity)}</td>
              <td className="align-middle">
                <button onClick={()=>delete_click(e)} className="btn btn-sm btn-danger">
                  <i className="fa fa-times" />
                </button>
              </td>
            </tr>))}
          
          </tbody>
        </table>
      </div>
      <div className="col-lg-3">
        <form className="mb-30" action="">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0 p-4"
              placeholder="Coupon Code"
            />
            <div className="input-group-append">
              <button className="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Cart Summary</span>
        </h5>
        <div className="bg-light p-30 mb-5">
          <div className="border-bottom pb-2">
            <div className="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>{subtotalcartprice(cartarry)}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>{totalcartprice(cartarry)}</h5>
            </div>
            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
</>

        </>
    )
}

export default Cartcomponent
