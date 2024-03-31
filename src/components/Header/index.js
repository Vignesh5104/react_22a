// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header">
    <div className="logo-con">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="wave">Wave</h1>
    </div>
    <ul className="nav-links-con">
      <li>
        <Link to="/" className="nav-links">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-links">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-links">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
