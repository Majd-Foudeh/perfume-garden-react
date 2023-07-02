import React, { useEffect, useState } from "react";
import "../../style/Shop.css";
import axios from "axios";
import { Link } from "react-router-dom";
import light from "../../assets/light.png";
import medium from "../../assets/medium.png";
import strong from "../../assets/strong.png";
export const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);

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

  return (
    <>
      <main className="perfume">
        <header
          className="bannerimg  py-5 shadow-6-strong mb-4"
          style={{ height: 280 }}
        >
          <div className="container px-4 px-lg-5 my-5">
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
            <h5 className="text-uppercase mb-4">Categories</h5>
            <div className="py-2 px-4 bg-dark text-white mb-3">
              <strong className="small text-uppercase fw-bold">
                Fashion &amp; Acc
              </strong>
            </div>
            <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Women's T-Shirts
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Men's T-Shirts
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Dresses
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Novelty socks
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Women's sunglasses
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Men's sunglasses
                </a>
              </li>
            </ul>
            <div
              className="py-2 px-4  mb-3"
              style={{ backgroundColor: "#faf2da" }}
            >
              <strong className="small text-uppercase fw-bold">
                Health &amp; Beauty
              </strong>
            </div>
            <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Shavers
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  bags
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Cosmetic
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Nail Art
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Skin Masks &amp; Peels
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Korean cosmetics
                </a>
              </li>
            </ul>
            <div
              className="py-2 px-4  mb-3"
              style={{ backgroundColor: "#faf2da" }}
            >
              <strong className="small text-uppercase fw-bold">
                Electronics
              </strong>
            </div>
            <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5">
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Electronics
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  USB Flash drives
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Headphones
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Portable speakers
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Cell Phone bluetooth headsets
                </a>
              </li>
              <li className="mb-2">
                <a className="reset-anchor text-muted" href="#!">
                  Keyboards
                </a>
              </li>
            </ul>
            <h6 className="text-uppercase mb-3">Show only</h6>
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
              <label className="form-check-label" htmlFor="checkbox_5">
                Deals &amp; Savings
              </label>
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
            </div>
          </div>
          {/* SHOP LISTING*/}
          <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0 ">
            <div className="row mb-3 align-items-center">
              <div className="col-lg-6 mb-2 mb-lg-0">
                <p className="text-sm text-muted mb-0">
                  Showing 1–12 of 53 results
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
                        className="btn btn-light dropdown-toggle"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sort By
                      </button>
                      <ul className="dropdown-menu">
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
                      </ul>
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
              {perfumes &&
                perfumes.map((data) => {
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
                                <img height="45vh" src={light} alt="" />
                              )}
                              {data.perfume_category == "Medium" && (
                                <img height="45vh" src={medium} alt="" />
                              )}
                              {data.perfume_category == "Strong" && (
                                <img height="45vh" src={strong} alt="" />
                              )}
                            </div>
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
