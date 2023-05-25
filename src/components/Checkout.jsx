import React from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../style/Checkout.css'

export const Checkout = () => {
    const navigate = useNavigate()
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
            'use strict'

            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation')

                // Loop over them and prevent submission
                Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        form.classList.add('was-validated')
                    }, false)
                })
            }, false)
        }())
    return (
        <>
            <>
                <header className="bannerimg  py-5 shadow-6-strong " style={{ height: 280 }}>
                    <div className="container container1 px-4 px-lg-5 my-5">
                        <div className="text-black d-flex justify-content-between">
                            <div>
                                <h1 className="display-4 fw-bolder">Checkout</h1>
                            </div>
                            <div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb fw-bolder fs-4" style={{ lineHeight: 4 }}>
                                        <li className="breadcrumb-item ">
                                            <a className="text-black" href="" onclick="history.go(-2) ">
                                                Shop
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item ">
                                            <Link className="text-black" onClick={() => { navigate(-1) }}>
                                                Cart
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Checkout
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="mb-10">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4 order-md-2 mb-4">
                                <h4 className="d-flex justify-content-between align-items-center mb-3">
                                    <span className="text-muted">Your cart</span>
                                    <span className="badge badge-dark badge-pill">3</span>
                                </h4>
                                <ul className="list-group mb-3 sticky-top">
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Product name</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted"> 12 JD</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Second product</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted"> 8 JD</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">Third item</h6>
                                            <small className="text-muted">Brief description</small>
                                        </div>
                                        <span className="text-muted"> 5 JD</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between bg-light">
                                        <div className="text-success">
                                            <h6 className="my-0">Promo code</h6>
                                            <small>EXAMPLECODE</small>
                                        </div>
                                        <span className="text-success">-5 JD</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span>Total (JOD)</span>
                                        <strong>20 JD</strong>
                                    </li>
                                </ul>
                                <form className="card p-2">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Promo code"
                                        />
                                        <div className="input-group-append">
                                            <button type="button" className=" redeembtn ">
                                                Redeem
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-8 order-md-1">
                                <h4 className="mb-3">Billing address</h4>
                                <form className="needs-validation" noValidate="">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName">Full name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder=""
                                                defaultValue=""
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                {" "}
                                                Valid first name is required.{" "}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName">Phone number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder=""
                                                defaultValue=""
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                {" "}
                                                Valid last name is required.{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="username">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">@</span>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="Username"
                                                required=""
                                            />
                                            <div className="invalid-feedback" style={{ width: "100%" }}>
                                                {" "}
                                                Your username is required.{" "}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="mb-3">
                      <label for="email">Email <span class="text-muted">(Optional)</span></label>
                      <input type="email" class="form-control" id="email" placeholder="you@example.com">
                      <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                  </div>
                  <div class="mb-3">
                      <label for="address">Address</label>
                      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
                      <div class="invalid-feedback"> Please enter your shipping address. </div>
                  </div>
                  <div class="mb-3">
                      <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                      <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
                  </div> */}
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-5 col-lg-5  mb-3">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-outline-dark dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Select Your City{" "}
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
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="state">State</label>
                                            <select
                                                className="custom-select d-block w-100"
                                                id="state"
                                                required=""
                                            >
                                                <option value="">Choose...</option>
                                                <option>California</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {" "}
                                                Please provide a valid state.{" "}
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="zip">Zip</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zip"
                                                placeholder=""
                                                required=""
                                            />
                                            <div className="invalid-feedback"> Zip code required. </div>
                                        </div>
                                    </div>
                                    <h4 className="mb-3">Shipping Address</h4>
                                    <div className="d-block my-3">
                                        <div className="custom-control custom-radio">
                                            <input
                                                id="credit"
                                                name="paymentMethod"
                                                type="radio"
                                                className="custom-control-input"
                                                defaultChecked=""
                                                required=""
                                            />
                                            <label className="custom-control-label" htmlFor="credit">
                                                Main Address
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input
                                                id="debit"
                                                name="paymentMethod"
                                                type="radio"
                                                className="custom-control-input"
                                                required=""
                                            />
                                            <label className="custom-control-label" htmlFor="debit">
                                                Second Address
                                            </label>
                                        </div>
                                    </div>
                                    {/* <div class="row">
                      <div class="col-md-6 mb-3">
                          <label for="cc-name">Name on card</label>
                          <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                          <small class="text-muted">Full name as displayed on card</small>
                          <div class="invalid-feedback"> Name on card is required </div>
                      </div>
                      <div class="col-md-6 mb-3">
                          <label for="cc-number">Credit card number</label>
                          <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                          <div class="invalid-feedback"> Credit card number is required </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-3 mb-3">
                          <label for="cc-expiration">Expiration</label>
                          <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                          <div class="invalid-feedback"> Expiration date required </div>
                      </div>
                      <div class="col-md-3 mb-3">
                          <label for="cc-cvv">CVV</label>
                          <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                          <div class="invalid-feedback"> Security code required </div>
                      </div>
                  </div> */}
                                    <hr className="mb-4" />
                                    {/* <button class="btn col-4 btn-dark submitbtn btn-lg btn-block" type="submit">Continue to checkout</button> */}
                                    <Link to="/thankyou">
                                        <button className="checkoutbtn">
                                            <span className="circle1" />
                                            <span className="circle2" />
                                            <span className="circle3" />
                                            <span className="circle4" />
                                            <span className="circle5" />
                                            <span className="text">Submit</span>
                                        </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </>

        </>
    )


}
