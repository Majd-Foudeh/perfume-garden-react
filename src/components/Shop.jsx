import React from 'react'

export const Shop = () => {
  return (
<>

<main>
  <header
    className="bannerimg  py-5 shadow-6-strong mb-4"
    style={{ height: 280 }}
  >
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-black">
        <h1 className="display-4 fw-bolder">Shop in style</h1>
        <p className="lead fw-normal text-white-50 mb-0">
          With this shop hompeage template
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
      <div className="py-2 px-4  mb-3" style={{ backgroundColor: "#faf2da" }}>
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
      <div className="py-2 px-4  mb-3" style={{ backgroundColor: "#faf2da" }}>
        <strong className="small text-uppercase fw-bold">Electronics</strong>
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
      {/* <h6 class="text-uppercase mb-4">Price range</h6>
          <div class="price-range pt-4 mb-5">
              <div id="range" class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
                  <div class="noUi-base">
                      <div class="noUi-connects">
                          <div class="noUi-connect noUi-draggable"
                              style="transform: translate(5%, 0px) scale(0.45, 1);"></div>
                      </div>
                      <div class="noUi-origin" style="transform: translate(-95%, 0px); z-index: 5;">
                          <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider"
                              aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="700.0"
                              aria-valuenow="100.0" aria-valuetext="$100">
                              <div class="noUi-touch-area"></div>
                              <div class="noUi-tooltip">$100</div>
                          </div>
                      </div>
                      <div class="noUi-origin" style="transform: translate(-50%, 0px); z-index: 6;">
                          <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider"
                              aria-orientation="horizontal" aria-valuemin="400.0" aria-valuemax="2000.0"
                              aria-valuenow="1000.0" aria-valuetext="$1000">
                              <div class="noUi-touch-area"></div>
                              <div class="noUi-tooltip">$1000</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="row pt-2">
                  <div class="col-6"><strong class="small fw-bold text-uppercase">From</strong></div>
                  <div class="col-6 text-end"><strong class="small fw-bold text-uppercase">To</strong></div>
              </div>
          </div> */}
      <h6 className="text-uppercase mb-3">Show only</h6>
      <div className="form-check mb-1">
        <input className="form-check-input" type="checkbox" id="checkbox_1" />
        <label className="form-check-label" htmlFor="checkbox_1">
          Returns Accepted
        </label>
      </div>
      <div className="form-check mb-1">
        <input className="form-check-input" type="checkbox" id="checkbox_2" />
        <label className="form-check-label" htmlFor="checkbox_2">
          Returns Accepted
        </label>
      </div>
      <div className="form-check mb-1">
        <input className="form-check-input" type="checkbox" id="checkbox_3" />
        <label className="form-check-label" htmlFor="checkbox_3">
          Completed Items
        </label>
      </div>
      <div className="form-check mb-1">
        <input className="form-check-input" type="checkbox" id="checkbox_4" />
        <label className="form-check-label" htmlFor="checkbox_4">
          Sold Items
        </label>
      </div>
      <div className="form-check mb-1">
        <input className="form-check-input" type="checkbox" id="checkbox_5" />
        <label className="form-check-label" htmlFor="checkbox_5">
          Deals &amp; Savings
        </label>
      </div>
      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="checkbox_6" />
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
          <p className="text-sm text-muted mb-0">Showing 1–12 of 53 results</p>
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
                  {/* <li>
                                      <hr class="dropdown-divider" />
                                  </li> */}
                  <li>
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div class="choices d-flex " data-type="select-one" tabindex="0" role="listbox"
                              aria-haspopup="true" aria-expanded="false">
                              <div class="choices__inner form-control form-control-sm"><select
                                      class="selectpicker choices__input dropdown"
                                      data-customclass="form-control form-control-sm" hidden="" tabindex="-1"
                                      data-choice="active">
                                      <option value="">Sort By </option>
                                  </select>
                                  <div class="choices__list choices__list--single">
                                      <div class="choices__item choices__placeholder choices__item--selectable"
                                          data-item="" data-id="1" data-value="" data-custom-properties="null"
                                          aria-selected="true">Sort By </div>
                                  </div>
                              </div>
                              <div class="choices__list choices__list--dropdown" aria-expanded="false">
                                  <div class="d-flex choices__list" role="listbox">
                                      <div id="choices--qzwa-item-choice-5"
                                          class="choices__item choices__item--choice is-selected choices__placeholder choices__item--selectable is-highlighted"
                                          role="option" data-choice="" data-id="5" data-value=""
                                          data-select-text="" data-choice-selectable="" aria-selected="true">Sort
                                          By </div>
                                      <div id="choices--qzwa-item-choice-1"
                                          class="choices__item choices__item--choice choices__item--selectable"
                                          role="option" data-choice="" data-id="1" data-value="default"
                                          data-select-text="" data-choice-selectable="">Default sorting </div>
                                      <div id="choices--qzwa-item-choice-2"
                                          class="choices__item choices__item--choice choices__item--selectable"
                                          role="option" data-choice="" data-id="2" data-value="popularity"
                                          data-select-text="" data-choice-selectable="">Popularity </div>
                                      <div id="choices--qzwa-item-choice-3"
                                          class="choices__item choices__item--choice choices__item--selectable"
                                          role="option" data-choice="" data-id="3" data-value="high-low"
                                          data-select-text="" data-choice-selectable="">Price: High to Low </div>
                                      <div id="choices--qzwa-item-choice-4"
                                          class="choices__item choices__item--choice choices__item--selectable"
                                          role="option" data-choice="" data-id="4" data-value="low-high"
                                          data-select-text="" data-choice-selectable="">Price: Low to High </div>
                                  </div>
                              </div>
                          </div> */}
            </li>
          </ul>
        </div>
      </div>
      {/* First Row [Prosucts]*/}
      <h2 className="font-weight-bold mb-2">From the Shop</h2>
      <p className="font-italic text-muted mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="row pb-5 mb-4">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/hugoBoss.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                />
              </a>
              <h5>
                {" "}
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              {" "}
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/eros.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                />
              </a>
              <h5>
                <a href="../product page/productPage.html"> </a>
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
                <li className="list-inline-item m-0">
                  <i className="fa fa-star-o text-warning" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              {" "}
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/gio.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                />
              </a>
              <h5>
                <a href="../product page/productPage.html"> </a>
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
                  <i className="fa fa-star text-warning" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              {" "}
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/amir-2O3NECoCdKw-unsplash.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                />
              </a>
              <h5>
                <a href="../product page/productPage.html"> </a>
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5 mb-4">
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              {" "}
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/rosy-h-nguyen-5HrlEGTsaB4-unsplash.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                />
              </a>
              <h5>
                {" "}
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/laura-chouette-RHMQ4_lmeDM-unsplash.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto  mb-3"
                />
              </a>
              <h5>
                {" "}
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
                <li className="list-inline-item m-0">
                  <i className="fa fa-star-o text-warning" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow  ">
            <div className="card-body p-4">
              {" "}
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/jan-kopriva-nBwdYS1_rgA-unsplash.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3 "
                />
              </a>
              <h5>
                {" "}
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
                  <i className="fa fa-star text-warning" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
          {/* Card*/}
          <div className="card rounded cardshadow border-0 ">
            <div className="card-body p-4">
              {" "}
              <a href="../product page/productPage.html">
                {" "}
                <img
                  src="../images/products/nadia-cortellesi-xBbiOJqd7Mg-unsplash.jpg"
                  alt=""
                  className="img-fluid d-block mx-auto mb-3"
                />
              </a>
              <h5>
                {" "}
                <a
                  href="../product page/productPage.html"
                  className="text-dark"
                >
                  Awesome product
                </a>
              </h5>
              <p className="small text-muted font-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <ul className="list-inline small">
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
              </ul>
            </div>
          </div>
        </div>
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

    )
}