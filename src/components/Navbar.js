import {  NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import logo from '../imgs/company.jpg'
export default function Navbar(){
    return(
           
<nav className="navbar navbar-expand-sm navbar-light fixed-top">
    
    <div className="container-fluid">
      <a  className="navbar-brand" href="/" >
        <img className="logo" width="90" src={require("../imgs/company.jpg")} />
    </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <i class="bi bi-three-dots-vertical menuicon" ></i>
        </button> 
        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white"  href='./About.js' activeClassName='navbar__link--active'>About</a>
              </li>
              <li className="nav-item">
                <Link to={`./About`}className="nav-link text-white"  href='contact' activeClassName='navbar__link--active'>Contact</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/comments" >Comments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/shop" >Store</a>
              </li>
            </ul>
          </div>

      </div>

   
  
    
  
</nav>
    )
}