
import { Link } from 'react-router-dom';
import logo from '../imgs/company.jpg'
export default function Navbar(){
    return(
           
<nav className="navbar navbar-expand-sm navbar-light fixed-top">
    
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" >
        <img className="logo" width="90" src={logo} />
    </Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <i className="bi bi-three-dots-vertical menuicon" ></i>
        </button> 
        <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/About' className="nav-link text-white" >About</Link>
              </li>
              <li className="nav-item">
                <Link to='' className="nav-link text-white"  >Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white"  >Comments</Link>
              </li>
              <li className="nav-item">
                <Link to='/Serves' className="nav-link text-white"  >Store</Link>
              </li>
            </ul>
          </div>

      </div>

   
  
    
  
</nav>
    )
}