import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import './navbar.css'

function Navbar() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <link href="./home.js" />
      </Helmet>
      <nav className="navbar">
        <h1>Welcome!</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter App 1</Link>
          <Link to="/useReducer">Counter App 2</Link>
        </div>
        <div className="menu">
          MENU
          <div className="menu-box">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/counter">Counter App 1</Link>
              </li>
              <li>
                <Link to="/useReducer">Counter App 2</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
