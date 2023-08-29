import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container py-5">
          <hr />
          <div className="row py-4 text-sm-start text-center">
            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 ">
              <h3 className="mb-3">perfume garden</h3>
              <p className="font-italic text-muted">
                Discover enchanting fragrance oils that awaken your senses. Dive
                into a world of exquisite scents at perfume garden, where each
                drop tells a unique story.{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 ">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0 ">
                <li className="mb-2 ">
                  <Link to="/shop" className="text-muted ">
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
            <div className="col-lg-3 col-md-6 mb-lg-0">
              <h6 className="text-uppercase text-center  font-weight-bold mb-4">
                Social accounts
              </h6>

              <ul className="list-inline mt-4 gap-2 d-flex justify-content-center ">
                <li className="list-inline-item ">
                  <a
                    href="https://twitter.com/MajdFoudeh29"
                    target="_blank"
                    title="twitter"
                  >
                    <i className="fa fa-twitter text-dark fa-lg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://web.facebook.com/majd.foudeh.1/"
                    target="_blank"
                    title="facebook"
                  >
                    <i className="fa fa-facebook text-dark fa-lg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/majd.foudeh.1/"
                    target="_blank"
                    title="instagram"
                  >
                    <i className="fa fa-instagram  text-dark fa-lg" />
                  </a>
                </li>

                <li className="list-inline-item">
                  <a
                    href="https://github.com/Majd-Foudeh"
                    target="_blank"
                    title="vimeo"
                  >
                    <i className="fa fa-github text-dark fa-lg" />
                  </a>
                </li>
              </ul>
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
  );
};
