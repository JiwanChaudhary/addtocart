import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Jiwan
          </Link>
        </h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/cart"><AiOutlineShoppingCart /></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
