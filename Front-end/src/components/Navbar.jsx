import { Link } from "react-router-dom";
import welcome from '../assets/welcome.png'
import '../style/navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark ">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">
                        Start Bootstrap
                    </Link >
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
                    <div className="navbar-collapse collapse show" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
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
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    href="./cartPage/cart.html"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            All Products
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            Popular Items
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            New Arrivals
                                        </a>
                                    </li>
                                </ul>
                            </li>


                        </ul>

                        <div className="d-flex gap-3 align-items-center">
                        <form className="d-flex">
                            <Link to="/cart">
                                <button type="button" className="btn btn-outline-light">
                                    <i className="fa fa-cart-shopping me-1" />
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                                        0
                                    </span>
                                </button>
                            </Link >
                        </form>
                        <Link to="/login">
                        <button type="button" className="btn btn-outline-light">login</button>
                        </Link>
                        {/* login dropdown */}
                        <div className="dropdown  p-0">
                            <button
                                className="btn btn-outline-light dropdown-toggle"
                                type="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Login
                            </button>
                            <div className="dropdown-menu position-absolute end-0" style={{ width: 320 }}>
                                <div className=" " style={{ height: "15vh" }}>
                                    <img
                                        src={welcome}
                                        height="100%"
                                        width="100%"
                                        alt=""
                                        style={{ backgroundSize: "cover" }}
                                    />
                                </div>
                                <form className="px-4 py-3">
                                    {/* Email input */}
                                    <div className="form-outline mb-4" >
                                        <input type="email" id="email" className="form-control" />
                                        <label className="form-label" htmlFor="email">
                                            Email address
                                        </label>
                                    </div>
                                    {/* Password input */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" className="form-control" />
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                    </div>
                                    {/* 2 column grid layout for inline styling */}
                                    <div className="row mb-4">
                                        <div className="col d-flex justify-content-start">
                                            {/* Checkbox */}
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="form2Example3"
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    {" "}
                                                    Remember me{" "}
                                                </label>
                                            </div>
                                        </div>
                                        {/* 
            <div class="col">
              <a href="#!">Forgot password?</a>
            </div> */}
                                    </div>
                                    {/* Submit button */}
                                    <button type="submit" className="btn btn-warning btn-block">
                                        Sign in
                                    </button>
                                    <div className="text-center my-3">
                                        <p>or sign up with:</p>
                                        <div className=" d-flex justify-content-evenly me-3">
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-facebook-f text-warning bg-dark rounded-9" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-google text-warning bg-dark rounded-9" />
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-link btn-floating mx-1"
                                            >
                                                <i className="fab fa-twitter text-warning bg-dark rounded-9" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="pb-2">
                                    <div className="dropdown-divider" />
                                    <Link
                                        className="dropdown-item"
                                        to="/signup"
                                        target="_blank"
                                    >
                                        New around here?{" "}
                                        <strong style={{ color: "#E38B29" }}>Sign up</strong>{" "}
                                    </Link>
                                    <a className="dropdown-item" href="#">
                                        Forgot password?
                                    </a>

                                </div>

                            </div>

                        </div>

                        {/* Avatar */}
                        <div className=" nav-item dropdown" >
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <div className="rounded-circle">
                                <img
                                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                    className="rounded-circle"
                                    height={31}
                                    width={34}
                                    alt="your profile page"
                                    loading="lazy"
                                />
                                </div>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link className="dropdown-item" to="/userprofile">
                                        My profile
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/editprofile">
                                        Edit profile
                                    </Link>
                                </li>
                                <li className="logout">
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>

                    </div>
                </div>
            </nav>




        </>
    )
}