import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav>
          <ul className="header__content">
            <li className="header__item">
              <Link className="header__link" to="/">Home</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="/about">About</Link>
            </li>
            <li className="header__item">
              <Link className="header__link" to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
