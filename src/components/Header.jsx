import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "../styles/header.css";

const nav_links = [
  { display: "Home", path: "/home" },
  { display: "Foods", path: "/foods" },
  { display: "Cart", path: "/cart" },
  { display: "Contact", path: "/contact" },
];
const Header = () => {
  return (
    <header>
      <div>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link to="/">
              <svg
                aria-hidden="true"
                className="pre-logo-svg"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-4">
              {nav_links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="heart__icon">
              <svg
                aria-hidden="true"
                className="pre-nav-design-icon"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                ></path>
              </svg>
              <span className="heart__badge">2</span>
            </span>
            <span className="cart__icon">
              <svg
                aria-hidden="true"
                className="pre-nav-design-icon"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                ></path>
              </svg>
              <span className="cart__badge">2</span>
            </span>
            <span className="mobile__menu">
              <svg
                aria-hidden="true"
                className="pre-nav-design-icon"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M21 5.25H3M21 12H3m18 6.75H3"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
