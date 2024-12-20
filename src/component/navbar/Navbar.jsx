import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header className="header" data-header>
        <div className="container">

          <a href="#" className="logos">
            <ion-icon name="business-outline"></ion-icon> Devcons
          </a>

          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link" data-nav-link>Home</Link>
              </li>
              <li>
                <a href="#" className="navbar-link" data-nav-link>Buy</a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>Sell</a>
              </li>

              <li>
                <a href="#" className="navbar-link" data-nav-link>Listing</a>
              </li>

              <li>
                <Link to="/aboutus" className="navbar-link" data-nav-link>About Us</Link>
              </li>
              <li>
                <a href="#" className="navbar-link" data-nav-link>Contact</a>
              </li>

            </ul>
            <a href="#" className="btn btn-secondary">Signup</a>
          </nav>

          <button
            className={`nav-toggle-btn ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={handleToggleMenu}
          >
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              className={`menu-icon ${isMenuOpen ? 'hidden' : ''}`}
            ></ion-icon>
            {/* <ion-icon
            name="close-outline"
            aria-hidden="true"
            className={`close-icon ${!isMenuOpen ? 'hidden' : ''}`}
          ></ion-icon> */}
          </button>

        </div>
      </header>


    </div>
  )
}

export default Navbar