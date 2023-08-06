import React, { useContext, useEffect, useState } from "react";
import "../../style/Shop.css";
import axios from "axios";
import { Link } from "react-router-dom";
import light from "../../assets/light.png";
import medium from "../../assets/medium.png";
import strong from "../../assets/strong.png";
import { UserContext } from "../../context/UserContext";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthContext";
import Toast from "react-bootstrap/Toast";

export const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [isWishListed, setIsWishListed] = useState(false);
  const [categoryPressed, setCategoryPressed] = useState(false);
  const [perfumeNumber, setPerfumeNumber] = useState();
  const [search, setSearch] = useState("");
  const { user } = useContext(UserContext);
  const { auth } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allPerfumes")
      .then((response) => {
        setPerfumes(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error, "error fetching perfumes in react");
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/perfumeNumber")
      .then((response) => {
        setPerfumeNumber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleWishList = (perfumeId) => {
    console.log(perfumeId);
    console.log(user._id);
    setIsWishListed((prevState) => !prevState);
    axios
      .post(`http://localhost:3000/wishList/${user._id}`, { perfumeId })
      .then((response) => {
        // Handle the response data if needed
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleGenderCategory = (name) => {
    console.log(name);
    axios
      .get(`http://localhost:3000/genderCategory/${name}`)
      .then((response) => {
        setFilteredPerfumes(response.data);
        console.log(response.data);
        setCategoryPressed(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCategory = (name) => {
    console.log(name);
    axios
      .get(`http://localhost:3000/category/${name}`)
      .then((response) => {
        setFilteredPerfumes(response.data);
        console.log(response.data);
        setCategoryPressed(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <main className="perfume">
        <Toast
          className="position-fixed top-0 end-0 m-5 z-3"
          bg="warning"
          onClose={() => setShow(false)}
          show={show}
          delay={7000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">added successfully to wishList </strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-black">
            You can check your wishList from profile
          </Toast.Body>
        </Toast>
        <header
          className="bannerimg  py-5 shadow-6-strong mb-4 d-flex flex-col  "
          style={{ height: 244 }}
        >
          <div className="container px-4 px-lg-5 my-sm-4 my-5">
            <div className="text-center text-black">
              <h1 className="display-4 fw-bolder">Perfume Shop </h1>
              <p className="lead fw-normal text-white-50 mb-0">
                find your favorite perfume with ease{" "}
              </p>
            </div>
          </div>
        </header>
        <div className="row mx-3">
          {/* SHOP SIDEBAR*/}
          <div className="col-lg-3 order-2 order-lg-1">
            <div className="sticky-top ">
              <h5 className="text-uppercase mb-4">Categories</h5>
              <div className="py-2 px-4 bg-dark text-white mb-3">
                <strong className="small text-uppercase fw-bold">
                  Fashion &amp; Acc
                </strong>
              </div>
              <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                <li className="mb-2">
                  <button
                    onClick={(e) => handleGenderCategory(e.target.name)}
                    name="Women"
                    className="reset-anchor w-100 text-start border-0 bg-transparent text-muted"
                  >
                    Women's Perfumes
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={(e) => handleGenderCategory(e.target.name)}
                    name="Men"
                    className="reset-anchor w-100 text-start border-0 bg-transparent text-muted"
                  >
                    Men's Perfumes
                  </button>
                </li>
              </ul>
              <div
                className="py-2 px-4  mb-3"
                style={{ backgroundColor: "#faf2da" }}
              >
                <strong className="small text-uppercase fw-bold">
                  Perfume Concentration
                </strong>
              </div>
              <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                <li className="mb-2">
                  <button
                    onClick={(e) => handleCategory(e.target.name)}
                    name="Strong"
                    className="reset-anchor w-100 text-start border-0 bg-transparent text-muted"
                    href="#!"
                  >
                    Strong
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={(e) => handleCategory(e.target.name)}
                    name="Medium"
                    className="reset-anchor w-100 text-start border-0 bg-transparent text-muted"
                    href="#!"
                  >
                    Medium
                  </button>
                </li>
                <li className="mb-2">
                  <button
                    onClick={(e) => handleCategory(e.target.name)}
                    name="Light"
                    className="reset-anchor w-100 text-start border-0 bg-transparent text-muted"
                    href="#!"
                  >
                    Light
                  </button>
                </li>
              </ul>
            </div>
            {/* <h6 className="text-uppercase mb-3">Show only</h6>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_1"
              />
              <label className="form-check-label" htmlFor="checkbox_1">
                Returns Accepted
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_2"
              />
              <label className="form-check-label" htmlFor="checkbox_2">
                Returns Accepted
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_3"
              />
              <label className="form-check-label" htmlFor="checkbox_3">
                Completed Items
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_4"
              />
              <label className="form-check-label" htmlFor="checkbox_4">
                Sold Items
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_5"
              />
              <lab el className="form-check-label" htmlFor="checkbox_5">
                Deals &amp; Savings
              </lab>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox_6"
              />
              <label className="form-check-label" htmlFor="checkbox_6">
                Authorized Seller
              </label>
            </div>
            <h6 className="text-uppercase mb-3">Buying format</h6>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="customRadio"
                id="radio_1"
              />
              <label className="form-check-label" htmlFor="radio_1">
                All Listings
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="customRadio"
                id="radio_2"
              />
              <label className="form-check-label" htmlFor="radio_2">
                Best Offer
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="customRadio"
                id="radio_3"
              />
              <label className="form-check-label" htmlFor="radio_3">
                Auction
              </label>
            </div>
            <div className="form-check mb-1">
              <input
                className="form-check-input"
                type="radio"
                name="customRadio"
                id="radio_4"
              />
              <label className="form-check-label" htmlFor="radio_4">
                Buy It Now
              </label>
            </div> */}
          </div>
          {/* SHOP LISTING*/}
          <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0 ">
            <div className="row mb-3 align-items-center">
              <div className="col-lg-6 mb-2 mb-lg-0">
                <p className="text-sm text-muted mb-0">
                  Showing{" "}
                  {categoryPressed === false
                    ? perfumes.length
                    : filteredPerfumes.length}{" "}
                  of {perfumeNumber} results
                </p>
              </div>
              <div className="col-lg-6">
                <ul className="list-inline d-flex align-items-center justify-content-lg-end me-5 mb-0">
                  <li className="list-inline-item text-muted me-3">
                    <a className="reset-anchor text-muted p-0" href="#!">
                      <i className="fas fa-th-large text-warning-emphasis" />
                    </a>
                  </li>
                  <li className="list-inline-item text-muted me-3">
                    <a className="reset-anchor text-muted p-0" href="#!">
                      <i className="fas fa-th text-warning-emphasis" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    {/* Light */}
                    <div className="btn-group shadow-4 border border-dark-subtle">
                      <button
                        type="button"
                        className="btn btn-sm btn-light "
                        onClick={() => setCategoryPressed(false)}
                        // data-mdb-toggle="dropdown"
                        // aria-expanded="false"
                      >
                        Show all{" "}
                      </button>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Separated link
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </li>
                  <li className="list-inline-item text-muted me-3">
                    <div className="input-group rounded">
                      <input
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                      />
                      <span
                        className="input-group-text border-0"
                        id="search-addon"
                      >
                        <i className="fas fa-search" />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* First Row [Prosucts]*/}
            <h2 className="font-weight-bold mb-2">From the Shop</h2>
            <p className="font-italic text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="row gap-y-3 shopGap pb-5 mb-4">
              {categoryPressed === false
                ? perfumes
                    .filter((perfume) => {
                      const searchLowerCase = search.toLowerCase();
                      const searchUpperCase = search.toUpperCase();
                      const titleLowerCase = perfume.perfume_name.toLowerCase();
                      const titleUpperCase = perfume.perfume_name.toUpperCase();

                      return searchLowerCase === ""
                        ? perfume
                        : titleLowerCase.includes(searchLowerCase) ||
                            titleUpperCase.includes(searchUpperCase);
                    })
                    .map((data) => {
                      return (
                        <div
                          key={data._id}
                          className="col-lg-3 col-md-6 mb-4 mb-lg-0"
                        >
                          {/* Card*/}
                          <div className="card rounded cardshadow border-0 ">
                            <div className="card-body p-3">
                              <Link to={`/productDetails/${data._id}`}>
                                {" "}
                                <img
                                  src={`http://localhost:4000/${data.perfume_picture}`}
                                  alt="test"
                                  className="img-fluid d-block rounded mx-auto mb-3"
                                />
                              </Link>
                              <div className="d-flex  justify-content-between align-items-center">
                                <div className="d-flex flex-column">
                                  <h6 className="m-1">
                                    {" "}
                                    <a
                                      href="../product page/productPage.html"
                                      className="text-dark"
                                    >
                                      {data.perfume_name}
                                    </a>
                                  </h6>
                                  <div className="m-1">
                                    <div>
                                      <span className="fw-bold h4">
                                        {" "}
                                        {data.price}
                                      </span>{" "}
                                      <span className="text-warning">JD</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  {data.perfume_category == "Light" && (
                                    <img height="35vh" src={light} alt="" />
                                  )}
                                  {data.perfume_category == "Medium" && (
                                    <img height="35vh" src={medium} alt="" />
                                  )}
                                  {data.perfume_category == "Strong" && (
                                    <img height="35vh" src={strong} alt="" />
                                  )}
                                </div>
                                {auth && (
                                  <div>
                                    <label className="wishList">
                                      <input
                                        type="checkbox"
                                        onClick={() => {
                                          setShow(true),
                                            handleWishList(data._id);
                                        }}
                                      />
                                      <svg
                                        id="Layer_1"
                                        version={1.0}
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
                                      </svg>
                                    </label>
                                  </div>
                                )}
                              </div>
                              {/* <p className="small text-muted font-italic">
                            {data.description}
                          </p> */}
                              {/* <ul className="list-inline small">
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star-o text-warning" />
                            </li>
                          </ul> */}
                            </div>
                          </div>
                        </div>
                      );
                    })
                : filteredPerfumes
                    .filter((perfume) => {
                      const searchLowerCase = search.toLowerCase();
                      const searchUpperCase = search.toUpperCase();
                      const titleLowerCase = perfume.perfume_name.toLowerCase();
                      const titleUpperCase = perfume.perfume_name.toUpperCase();

                      return searchLowerCase === ""
                        ? perfume
                        : titleLowerCase.includes(searchLowerCase) ||
                            titleUpperCase.includes(searchUpperCase);
                    })
                    .map((data) => {
                      return (
                        <div
                          key={data._id}
                          className="col-lg-3 col-md-6 mb-4 mb-lg-0"
                        >
                          {/* Card*/}
                          <div className="card rounded cardshadow border-0 ">
                            <div className="card-body p-3">
                              <Link to={`/productDetails/${data._id}`}>
                                {" "}
                                <img
                                  src={`http://localhost:4000/${data.perfume_picture}`}
                                  alt="test"
                                  className="img-fluid d-block rounded mx-auto mb-3"
                                />
                              </Link>
                              <div className="d-flex  justify-content-between align-items-center">
                                <div className="d-flex flex-column">
                                  <h6 className="m-1">
                                    {" "}
                                    <a
                                      href="../product page/productPage.html"
                                      className="text-dark"
                                    >
                                      {data.perfume_name}
                                    </a>
                                  </h6>
                                  <div className="m-1">
                                    <div>
                                      <span className="fw-bold h4">
                                        {" "}
                                        {data.price}
                                      </span>{" "}
                                      <span className="text-warning">JD</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  {data.perfume_category == "Light" && (
                                    <img height="35vh" src={light} alt="" />
                                  )}
                                  {data.perfume_category == "Medium" && (
                                    <img height="35vh" src={medium} alt="" />
                                  )}
                                  {data.perfume_category == "Strong" && (
                                    <img height="35vh" src={strong} alt="" />
                                  )}
                                </div>
                                {auth && (
                                  <div>
                                    <label className="wishList">
                                      <input
                                        type="checkbox"
                                        onClick={() => handleWishList(data._id)}
                                      />
                                      <svg
                                        id="Layer_1"
                                        version={1.0}
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                      >
                                        <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
                                      </svg>
                                    </label>
                                  </div>
                                )}
                              </div>
                              {/* <p className="small text-muted font-italic">
                            {data.description}
                          </p> */}
                              {/* <ul className="list-inline small">
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star text-warning" />
                            </li>
                            <li className="list-inline-item m-0">
                              <i className="fa fa-star-o text-warning" />
                            </li>
                          </ul> */}
                            </div>
                          </div>
                        </div>
                      );
                    })}
            </div>

            {/* PAGINATION*/}
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center justify-content-lg-center ">
                <li className="page-item mx-1">
                  <a className="page-link" href="#!" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item mx-1 active text-danger">
                  <a className="page-link" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item mx-1">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item mx-1">
                  <a className="page-link" href="#!">
                    3
                  </a>
                </li>
                <li className="page-item ms-1">
                  <a className="page-link" href="#!" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
};
