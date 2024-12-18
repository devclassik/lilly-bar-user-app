import React from "react";
import { Link } from "react-router-dom";

function Navigation({ lang = false }) {
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <a href="/about-us">About us</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Navigation;
