import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=" d-flex justify-content-around background-image">
            <nav className=" mt-4 mb-4 navbar navbar-expand-lg ">
                <div className=" container">
                    <div className="d-flex">
                        <div >
                        <NavLink exact activeClassName="active" className=" Nav-font Large-text p-5 brand-font nav-links navbar-brand" to="/">E-commerce</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
    <div className=" collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <div className="">
            <NavLink exact activeClassName="active" className=" Nav-font Small-text p-5 brand-font nav-links navbar-brand" to="/Products">Products</NavLink>
        </div>  
            <div>  
                <NavLink exact activeClassName="active " className="Nav-font Small-text p-5 brand-font nav-links navbar-brand" to="/AddProduct">Add Product</NavLink>
            </div>  
            </div>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
