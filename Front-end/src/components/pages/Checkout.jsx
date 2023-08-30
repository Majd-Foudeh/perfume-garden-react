import { useContext, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../style/Checkout.css";
import Card from "react-credit-cards-2";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../creditCard/utils";

import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";

export const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [cardNumber, setCardNumber] = useState("");
  const [existingCartItems, setExistingCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [total, setTotal] = useState(
    JSON.parse(localStorage.getItem("total")) || 0
  );

  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  let cartCount = JSON.parse(localStorage.getItem("cartCount"));
  let count = cartCount ? JSON.parse(cartCount) : 0;
  const [cartItemsNumber, setCartItemsNumber] = useState();

  const subTotal = JSON.parse(localStorage.getItem("subTotal"));

  useEffect(() => {
    setCartItemsNumber(count);
    setTotal(subTotal + 5);
  }, [cartCount]);

  JSON.stringify(localStorage.setItem("total", total));

  //! --------------------------------For Credit card------------------------------------
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState(null);
  const [formattedCardNumber, setFormattedCardNumber] = useState();
  const [formattedExpirationDate, setFormattedExpirationDate] = useState();
  const [formattedCvc, setFormattedCvc] = useState();
  const formRef = useRef(null);
  const [address, setAddress] = useState();
  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    setCardData({ ...cardData, [target.name]: target.value });

    let value = target.value;
    const name = target.name;

    if (name === "number") {
      value = formatCreditCardNumber(value);
      setFormattedCardNumber(value);
    } else if (name === "expiry") {
      value = formatExpirationDate(value);
      console.log(value);
      setFormattedExpirationDate(value);
      // console.log(value.slice(3));
    } else if (name === "cvc") {
      value = formatCVC(value);
      setFormattedCvc(value);
    }

    if (name === "number") {
      setNumber(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "expiry") {
      setExpiry(value);
    } else if (name === "cvc") {
      setCvc(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const elements = [...formRef.current.elements];

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form data is valid, proceed with submission
      console.log("Form data is valid:", cardData);
      // Add your submission logic here
      const orderData = {
        userId: user._id,
        products: existingCartItems.map((perfume) => ({
          perfumeId: perfume.id,
          perfumeName: perfume.name,
          quantity: perfume.quantity,
        })),
        total: total, // Calculate the total based on the products if needed
        shippingAddress: address,
      };

      axios
        .post("http://localhost:3000/newOrder", orderData)
        .then((response) => {
          console.log("Order saved successfully");
          console.log(response.data);
          // navigate("/thankYou");
        })
        .catch((error) => {
          console.error(error, "error in save the order");
        });

      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartCount");
      localStorage.removeItem("total");
      localStorage.removeItem("subTotal");

      Swal.fire(
        "Order completed!",
        "You can view your orders in your profile!",
        "success"
      );
      navigate("/");
    } else {
      setValidationErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    const cvcPattern = /^\d{3,4}$/;
    const currentYear = new Date().getFullYear() % 100; // Last two digits of the current year
    const currentMonth = new Date().getMonth() + 1; // Current month (1-12)

    if (!cardData.number) {
      errors.number = "Card number is required";
    }

    if (cardData.name.trim() === "") {
      errors.name = "Name is required";
    }

    let monthValue;
    if (cardData.expiry.slice(0, 1) == 0) {
      monthValue = cardData.expiry.slice(1, 2);
    } else {
      monthValue = cardData.expiry.slice(0, 2);
    }

    if (cardData.expiry.slice(2, 4) < currentYear) {
      errors.expiry = "Invalid expiry date";
    } else if (cardData.expiry.slice(2, 4) >= currentYear) {
      if (Number(monthValue) < currentMonth) {
        errors.expiry = "Invalid expiry date";
      }
    }

    if (!cvcPattern.test(cardData.cvc)) {
      errors.cvc = "Invalid CVC";
    }

    return errors;
  };

  const formatCardNumber = (input) => {
    const trimmedInput = input.replace(/\s+/g, ""); // Remove existing spaces
    let formattedNumber = "";
    for (let i = 0; i < trimmedInput.length; i += 4) {
      formattedNumber += trimmedInput.slice(i, i + 4) + " ";
    }
    return formattedNumber.trim(); // Remove trailing space
  };

  //! ----------------------------------------------------------------------------------------------
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
                <form
                  className="needs-validation"
                  noValidate=""
                  onSubmit={handleSubmit}
                >
                  <>
                    <h4 className="mb-3 mt-1">Payment Info</h4>
                    {/*---------------------------------- Credit Card --------------------------------------------- */}

                    <div key="Payment">
                      <div className="App-payment">
                        <h1>React Credit Cards</h1>
                        <h4 className="mb-5">
                          Beautiful credit cards for your payment forms
                        </h4>
                        <Card
                          number={number}
                          name={name}
                          expiry={expiry}
                          cvc={cvc}
                          focused={focused}
                          callback={handleCallback}
                        />

                        <div className="form-group">
                          <label htmlFor="" className="mt-2 mb-1">
                            Card Number <sup className="text-danger">*</sup>
                          </label>
                          <input
                            type="tel"
                            name="number"
                            className={`form-control ${
                              validationErrors.number ? "is-invalid" : ""
                            } `}
                            placeholder="Card Number"
                            value={formattedCardNumber}
                            // pattern="[\d| ]{16,22}"
                            required
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                          />
                          {validationErrors.number && (
                            <div className="invalid-feedback">
                              {validationErrors.number}
                            </div>
                          )}

                          {/* <small>E.g.: 49..., 51..., 36..., 37...</small> */}
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="mt-2 mb-1">
                            Name on the card{" "}
                            <sup className="text-danger">*</sup>
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            required
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                          />
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <label htmlFor="" className="mt-2 mb-1">
                              Expiry Date
                              <sup className="text-danger">*</sup>
                            </label>
                            <input
                              type="tel"
                              name="expiry"
                              className={`form-control ${
                                validationErrors.expiry ? "is-invalid" : ""
                              } `}
                              placeholder="Valid Thru"
                              value={formattedExpirationDate}
                              pattern="\d\d/\d\d"
                              required
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                            />
                            {validationErrors.expiry && (
                              <div className="invalid-feedback">
                                {validationErrors.expiry}
                              </div>
                            )}
                          </div>
                          <div className="col-6">
                            <label htmlFor="" className="mt-2 mb-1">
                              CVC <sup className="text-danger">*</sup>{" "}
                            </label>
                            <input
                              type="tel"
                              name="cvc"
                              className="form-control"
                              placeholder="CVC"
                              value={formattedCvc}
                              pattern="\d{3,4}"
                              required
                              onChange={handleInputChange}
                              onFocus={handleInputFocus}
                            />
                          </div>
                        </div>
                        <input type="hidden" name="issuer" value={issuer} />

                        <h4 className="mb-3 mt-3">Shipping Address</h4>
                        <div className="d-block my-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="address"
                              className="form-control"
                              placeholder="Enter your address"
                              required
                              onChange={(e) => setAddress(e.target.value)}
                              onFocus={handleInputFocus}
                            />
                          </div>
                        </div>

                        {/* <button class="btn col-4 btn-dark submitbtn btn-lg btn-block" type="submit">Continue to checkout</button> */}

                        <div className="form-actions">
                          <button className="checkoutbtn2 ">
                            <span className="circle1" />
                            <span className="circle2" />
                            <span className="circle3" />
                            <span className="circle4" />
                            <span className="circle5" />
                            <span className="text">Submit</span>
                          </button>
                        </div>

                        {/* {formData && (
                          <div className="App-highlight">
                            {formatFormData(formData).map((d, i) => (
                              <div key={i}>{d}</div>
                            ))}
                          </div>
                        )} */}
                      </div>
                    </div>
                  </>
                </form>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  );
};
