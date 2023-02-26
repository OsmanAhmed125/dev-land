// import {  NavLink } from "react-router-dom";

export default function Navbar(){
    return(
           
<nav className="navbar navbar-expand-sm navbar-light fixed-top">
    
    <div className="container-fluid">
      <a  className="navbar-brand" href="/" >
        <img className="logo" width="100" src={require("../imgs/company.jpg")} />
    </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <i className='bx bx-menu-alt-right'></i>
        </button> 
        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link"  href='/about' activeClassName='navbar__link--active'>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href='contact' activeClassName='navbar__link--active'>Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/comments" activeClassName='navbar__link--active'>Comments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/shop" activeClassName='navbar__link--active'>Store</a>
              </li>
            </ul>
          </div>

      </div>

   
  
    
  
</nav>
    )
}