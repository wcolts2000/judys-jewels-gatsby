import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

// =============================================
// ===============   STYLES     ================
// =============================================

const HeaderContainer = styled.header`
  padding: 0 0 16px 0;
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: ; */

  nav {
    font-size: 1.5em;
    width: 100%;
  }

  .navbar {
    display: flex;
    background: linear-gradient(to right, #00c4cc, hsl(266, 78%, 64%));
    height: 110px;
    align-items: center;
    justify-content: center;
    list-style: none;
    transition: 500ms ease-in-out;
  }

  .navbar button {
    background: none;
    border: none;
    font-family: "Acme", sans-serif;
  }

  @media screen and (max-width: 750px) {
    .navbar {
      display: none;
    }
  }

  .navbar a {
    text-decoration: none;
    color: gold;
    padding: 0 20px;
    font-size: inherit;
  }

  .navbar button {
    text-decoration: none;
    color: gold;
    padding: 0 20px;
    font-size: inherit;
  }

  .dropdown a {
    float: left;
  }

  .navbar a::after {
    content: "";
    display: block;
    width: 0;
    height: 4px;
    background: gold;
    transition: width 0.4s;
  }

  .navbar a:hover::after {
    width: 100%;
  }

  a.active::after {
    width: 100%;
  }

  .dropdown {
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    border-radius: 6px 6px 0 0;
  }

  .dropdown:hover .dropbtn {
    background: linear-gradient(to right, #00c4cc, hsl(266, 78%, 64%));
  }

  /* Dropdown content (hidden by default) */

  .dropdown-content {
    /* display: none; */
    opacity: 0;
    transition: all 0.6s ease-in-out;
    position: absolute;
    background: linear-gradient(to right, #00c4cc, hsl(266, 78%, 64%));
    min-width: 200px;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    pointer-events: none;
    z-index: 9999;
  }

  /* Links inside the dropdown */

  .dropdown-content a {
    float: none;
    color: gold;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    transition: all 0.6s ease-in-out;
  }

  /* Add a grey background color to dropdown links on hover */

  .dropdown-content a:hover {
    background-color: #00c4cc;
  }

  /* Show the dropdown menu on hover */

  .dropdown:hover .dropdown-content {
    display: block;
    pointer-events: initial;
    opacity: 1;
  }

  .logo {
    width: 150px;
  }

  .fas {
    position: relative;
    top: 4px;
    left: 4px;
  }

  /* ******************************** */

  /* **********mobile nav************ */

  /* ******************************** */

  /* Style the navigation menu */

  .topnav {
    overflow: hidden;
    background: linear-gradient(to right, #00c4cc, hsl(266, 78%, 64%));
    position: relative;
  }

  /* Hide the links inside the navigation menu (except for logo/home) */

  .topnav #myLinks {
    display: none;
  }

  .topnav #myLinks.hidden {
    display: block;
  }

  /* Style navigation menu links */

  .topnav a {
    color: gold;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 1.5em;
    display: block;
  }

  .smLogo {
    height: 40px;
  }

  .shop-subcats {
    padding: 0;
    margin: 0 0 0 40px;
  }

  .shop-subcats a {
    font-size: 1.25em;
  }

  .shop-subcats hr {
    width: 80%;
    margin: 0 auto;
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(210, 223, 31, 0),
      rgba(210, 223, 31, 0.75),
      rgba(210, 223, 31, 0)
    );
  }

  .topnav .icon {
    display: block;
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 1.5em;
    color: gold;
  }

  .topnav a:hover {
    color: #fff;
  }

  @media screen and (min-width: 750px) {
    .topnav {
      display: none;
    }
  }
`

// =============================================
// ===============   Component  ================
// =============================================
class Header extends Component {
  constructor({ siteTitle }) {
    super({ siteTitle })
    this.state = {
      hidden: true,
    }
  }

  hamburgerMenuToggle = () => {
    this.setState({ hidden: !this.state.hidden })
    console.log("yeo")
  }

  render() {
    return (
      <HeaderContainer>
        <nav className="navbar">
          <Link to="/" className="active">
            Home
          </Link>
          <div className="dropdown">
            <button className="dropbtn">
              Shop
              <i className="fas fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/shop/">Show Room</Link>
              <Link to="/shop/necklaces/">Necklaces</Link>
              <Link to="/shop/pendants/">Pendants</Link>
              <Link to="/shop/bracelets/">Bracelets</Link>
              <Link to="/shop/earrings/">Earrings</Link>
              <Link to="/shop/rings/">Rings</Link>
              <Link to="/shop/sets/">Sets</Link>
              <Link to="/shop/metals/">Fine Metals</Link>
            </div>
          </div>
          <img src={logo} alt="Mike and Judys Jewels Logo" className="logo" />
          <Link to="/about_us/">About Us</Link>
          <Link to="/contact/">Contact</Link>
        </nav>
        <div className="topnav">
          <Link to="/" className="active">
            <img
              src={logo}
              alt="mike and judys jewels logo"
              className="smLogo"
            />
          </Link>
          <div id="myLinks" className={this.state.hidden && "hidden"}>
            <Link to="/">Home</Link>
            <Link to="/shop/">Shop</Link>
            <div className="shop-subcats">
              <Link to="/shop/necklaces/">Necklaces</Link>
              <hr />
              <Link to="/shop/pendants/">Pendants</Link>
              <hr />
              <Link to="/shop/bracelets/">Bracelets</Link>
              <hr />
              <Link to="/shop/earrings/">Earrings</Link>
              <hr />
              <Link to="/shop/rings/">Rings</Link>
              <hr />
              <Link to="/shop/sets/">Sets</Link>
              <hr />
              <Link to="/shop/metals/">Fine Metals</Link>
              <hr />
            </div>
            <Link to="/about_us/">About Us</Link>
            <Link to="/contact/">Contact</Link>
          </div>
          <p className="icon" onClick={this.hamburgerMenuToggle}>
            <i className="fa fa-bars"></i>
          </p>
        </div>
      </HeaderContainer>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
