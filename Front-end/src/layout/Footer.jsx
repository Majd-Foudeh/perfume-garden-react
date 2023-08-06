import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <>
            <footer className="bg-white">
                <div className="container py-5">
                <hr />
                    <div className="row py-4">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h3 className="mb-3">perfume garden</h3>
                            <p className="font-italic text-muted">
                            Explore fragrances that elevate your senses.
                            </p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item">
                                    <a href="https://twitter.com/MajdFoudeh29" target="_blank" title="twitter">
                                        <i className="fa fa-twitter text-dark"  />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://web.facebook.com/majd.foudeh.1/" target="_blank" title="facebook">
                                        <i className="fa fa-facebook text-dark"  />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/majd.foudeh.1/" target="_blank" title="instagram">
                                        <i className="fa fa-instagram  text-dark"  />
                                    </a>
                                </li>
                                
                                
                                <li className="list-inline-item">
                                    <a href="https://github.com/Majd-Foudeh" target="_blank" title="vimeo">
                                        <i className="fa fa-github text-dark"  />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <Link to="/shop" className="text-muted">
                                        For Women
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/shop" className="text-muted">
                                        For Men
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/shop" className="text-muted">
                                        Stores
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/shop" className="text-muted">
                                        Our Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <Link to="/" className="text-muted">
                                        Login
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/" className="text-muted">
                                        Register
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/userprofile" className="text-muted">
                                        Wishlist
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/userprofile" className="text-muted">
                                        Orders History
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                            <p className="text-muted mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque
                                temporibus.
                            </p>
                            <div className="p-1 rounded border">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        aria-describedby="button-addon1"
                                        className="form-control border-0 shadow-0"
                                    />
                                    <div className="input-group-append">
                                        <button id="button-addon1" type="submit" className="btn btn-link">
                                            <i className="fa fa-paper-plane text-dark"  />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyrights */}
                <div className=" py-4 bg-black">
                    <div className="container text-center">
                        <p className="text-light mb-0 py-2">
                            © 2023 MajdFoudeh All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
