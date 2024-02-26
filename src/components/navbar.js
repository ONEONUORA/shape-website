
import { Link } from 'react-router-dom';

const Navbar = () =>{

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <i class="bi bi-geo-alt-fill"style={{ color: 'white', padding: '1rem' }}></i>
        SHAPE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
           <div className="collapse navbar-collapse head" id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                     <li className="nav-item">
                       <Link to="/" className="nav-link"href="#">HOME</Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/about"className="nav-link"href="#">ABOUT US</Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/Services"className="nav-link"href="#">SERVICES</Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/GALLERY"className="nav-link"href="#">GALLERY</Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/PRICING"className="nav-link"href="#">PRICING</Link>
                     </li>
                     <li className="nav-item">
                       <Link to="/CONTACT"className="nav-link"href="#">CONTACT</Link>
                     </li>
                   </ul>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
