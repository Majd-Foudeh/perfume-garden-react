import { Link } from "react-router-dom";
import "../../src/style/navbar.css";
import { ProfileDropdown } from "../components/profileDropdown/profileDropdown";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const Navbar = ({ hideNav, setHideNav }) => {
  const { auth } = useContext(AuthContext);

  const [cartItemsNumber, setCartItemsNumber] = useState(
    JSON.parse(localStorage.getItem("cartCount")) || 0
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const count = JSON.parse(localStorage.getItem("cartCount")) || 0;
      setCartItemsNumber(count);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black navbar-dark ">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Perfume Garden
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse collapse show"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="d-flex gap-3 align-items-center">
              <div className="d-flex">
                <Link to="/cart">
                  <button type="button" className="btn btn-outline-light">
                    <i className="fa fa-cart-shopping me-1" />
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                      {cartItemsNumber}
                    </span>
                  </button>
                </Link>
              </div>
              {auth === true ? (
                <ProfileDropdown />
              ) : (
                <Link to="/login">
                  <button type="button" className="btn btn-outline-light">
                    login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
