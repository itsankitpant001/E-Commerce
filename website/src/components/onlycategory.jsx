import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import categoryslice, { fetchcategory } from '../features/categoryslice';


function Onlycategory() {

  const category=useSelector(state=>state.category)

    const dispatch=useDispatch();
    function category_clicked(e)
    {
      dispatch(categoryslice.actions.changecategory(e.target.innerText))
    }
    useEffect(()=>{
      dispatch(fetchcategory())
    },[])
    return (
        <>
        <div className="col-lg-3 d-none d-lg-block">
      <a
        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
        data-toggle="collapse"
        href="#navbar-vertical"
        style={{ height: 65, padding: "0 30px" }}
      >
        <h6 className="text-dark m-0">
          <i className="fa fa-bars mr-2" />
          {category.selectedcategory}
        </h6>
        <i className="fa fa-angle-down text-dark" />
      </a>
      <nav
        className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
        id="navbar-vertical"
        style={{ width: "calc(100% - 30px)", zIndex: 999 }}
      >
        <div  className="navbar-nav w-100"> 
          {category.data.map((e,index)=>(<a onClick={category_clicked}  data-toggle="collapse"
        href="#navbar-vertical" className="nav-item nav-link" key={index}>{e}</a>))}
        </div>
      </nav>
    </div>
        </>
    )
}

export default Onlycategory
