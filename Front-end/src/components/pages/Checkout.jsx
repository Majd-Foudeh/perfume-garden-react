import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/Checkout.css";

export const Checkout = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [existingCartItems, setExistingCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem("total")) || 0
  );

  let cartCount = JSON.parse(localStorage.getItem("cartCount"));
  let count = cartCount ? JSON.parse(cartCount) : 0;
  const [cartItemsNumber, setCartItemsNumber] = useState();

  useEffect(() => {
    setCartItemsNumber(count);
  }, [cartCount]);

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    console.log(value);
    const formattedValue = value.replace(/[^\d]/g, "").slice(0, 16);
    const spacedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(spacedValue);
  };
  const subTotal = JSON.parse(localStorage.getItem("subTotal"));
  let total0 = subTotal + 5;

  JSON.stringify(localStorage.setItem("total", total));
  console.log(total);

  console.log(cartItemsNumber);
  console.log(existingCartItems);
  return (
    <>
      <>
        <header
          className="bannerimg  py-5 shadow-6-strong "
          style={{ height: 280 }}
        >
          <div className="container container1 px-4 px-lg-5 my-5">
            <div className="text-black d-flex justify-content-between">
              <div>
                <h1 className="display-4 fw-bolder">Checkout</h1>
              </div>
              <div>
                <nav aria-label="breadcrumb">
                  <ol
                    className="breadcrumb fw-bolder fs-4"
                    style={{ lineHeight: 4 }}
                  >
                    <li className="breadcrumb-item ">
                      <Link className="text-black" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li className="breadcrumb-item ">
                      <Link className="text-black" to="/cart">
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
                  <span className="badge badge-dark badge-pill">
                    {cartItemsNumber}
                  </span>
                </h4>
                <ul className="list-group mb-3 sticky-top">
                  {existingCartItems.map((item) => (
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-muted">
                          Quantity : {item.quantity} ml
                        </small>
                      </div>
                      <span className="text-muted"> {item.price} JD</span>
                    </li>
                  ))}

                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Sub total </h6>
                    </div>
                    <span className="text-success"> {subTotal} JD</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Shipping </h6>
                    </div>
                    <span className="text-success"> 3 JD</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Taxes</h6>
                    </div>
                    <span className="text-success"> 2 JD</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (JOD)</span>
                    <strong>{subTotal + 5} JD</strong>
                  </li>
                </ul>
              </div>
              <div className="col-md-8 order-md-1">
                {/* <h4 className="mb-3">Billing address</h4> */}
                <form className="needs-validation" noValidate="">
                  {/* <div className="row">
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
                      <div
                        className="invalid-feedback"
                        style={{ width: "100%" }}
                      >
                        {" "}
                        Your username is required.{" "}
                      </div>
                    </div>
                  </div>
                  <>
  <div className="mb-3">
    <label htmlFor="email">
      Email <span className="text-muted">(Optional)</span>
    </label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="you@example.com"
    />
    <div className="invalid-feedback">
      {" "}
      Please enter a valid email address for shipping updates.{" "}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="address">Address</label>
    <input
      type="text"
      className="form-control"
      id="address"
      placeholder="1234 Main St"
      required=""
    />
    <div className="invalid-feedback">
      {" "}
      Please enter your shipping address.{" "}
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="address2">
      Address 2 <span className="text-muted">(Optional)</span>
    </label>
    <input
      type="text"
      className="form-control"
      id="address2"
      placeholder="Apartment or suite"
    />
  </div>
</>

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
                      <div className="invalid-feedback">
                        {" "}
                        Zip code required.{" "}
                        </div>
                        </div>
                    </div> */}
                  <>
                    <h4 className="mb-3 mt-1">Payment Info</h4>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required=""
                        />
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          {" "}
                          Name on card is required{" "}
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder="1234 5678 9012 3456"
                          required=""
                          maxLength="19"
                          onChange={handleCardNumberChange}
                        />
                        <div className="invalid-feedback">
                          {" "}
                          Credit card number is required{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>

                        <input
                          type="text"
                          className="form-control "
                          size="sm"
                          id="cc-expiration"
                          placeholder=""
                          required=""
                        />
                        <div className="invalid-feedback">
                          {" "}
                          Expiration date required{" "}
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required=""
                        />
                        <div className="invalid-feedback">
                          {" "}
                          Security code required{" "}
                        </div>
                      </div>
                    </div>
                  </>
                  <h4 className="mb-3 mt-3">Shipping Address</h4>
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
                      <label
                        className="ms-2 custom-control-label"
                        htmlFor="credit"
                      >
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
                      <label
                        className="ms-2 custom-control-label"
                        htmlFor="debit"
                      >
                        Second Address
                      </label>
                    </div>
                  </div>

                  {/* <button class="btn col-4 btn-dark submitbtn btn-lg btn-block" type="submit">Continue to checkout</button> */}
                  <Link to="/thankyou">
                    <button className="checkoutbtn2">
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
  );
};
