import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/ProductDetails.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

export const ProductDetails = () => {
  const { id } = useParams();
  const [perfumeDetails, setPerfumeDetails] = useState([]);
  const [quantity1, setQuantity] = useState(1);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [existingCartItems, setExistingCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [relatedPerfumes, setRelatedPerfumes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getFourPerfumes")
      .then((response) => {
        setRelatedPerfumes(response.data);
      })
      .catch((error) => {
        console.error("error in fetching perfume details", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/onePerfume/${id}`)

      .then((response) => {
        console.log(response.data);
        setPerfumeDetails(response.data);
      })
      .catch((error) => {
        console.error("error in fetching perfume details", error);
      });
  }, [id]);
  const handleAddToCart = () => {
    let existingCartCount = localStorage.getItem("cartCount");
    let count = existingCartCount ? JSON.parse(existingCartCount) : 0;

    const item = {
      id: perfumeDetails._id,
      name: perfumeDetails.perfume_name,
      price: perfumeDetails.price * quantity1,
      quantity: quantity1,
      img: perfumeDetails.perfume_picture,
      category: perfumeDetails.perfume_category,
    };

    // Retrieve existing cart items from local storage
    const existingCartItems = localStorage.getItem("cartItems");
    let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
    for (let i = 0; i < cartItems.length; i++) {
      const element = cartItems[i];
      if (element.id === perfumeDetails._id) {
        setShow2(true);
        return;
      }
    }
    // Add the new item to the cart
    cartItems.push(item);

    // Save the updated cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setShow(true);
    count++;
    localStorage.setItem("cartCount", JSON.stringify(count));
  };

  return (
    <>
      <main>
        <Toast
          className="position-fixed top-0 end-0 m-5 z-3"
          bg="danger"
          onClose={() => setShow2(false)}
          show={show2}
          delay={7000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">
              This item is already in your cart
            </strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-black">
            You can check your items from the cart
          </Toast.Body>
        </Toast>
        <Toast
          className="position-fixed top-0 end-0 m-5 z-3"
          bg="success"
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
            <strong className="me-auto">Added to cart successfully</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className="text-black">
            You can check your items from the cart
          </Toast.Body>
        </Toast>
        <section className="pb-5">
          {perfumeDetails && (
            <div
              key={perfumeDetails._id}
              className="container px-4 px-lg-5 my-5"
            >
              <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6 ">
                  <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Perfume Details
                      </li>
                    </ol>
                  </nav>

                  <img
                    className="productimg card-img-top mb-5 mb-md-0"
                    src={`http://localhost:4000/${perfumeDetails.perfume_picture}`}
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="small mb-1">SKU: {perfumeDetails._id}</div>
                  <h1 className="display-5 fw-bolder">
                    {perfumeDetails.perfume_name}
                  </h1>
                  <div className="fs-5 mb-4">
                    {/* <span className="text-decoration-line-through">$45.00</span> */}
                    <span>
                      Price For ml{" "}
                      <span className="text-warning fw-bolder fs-4">
                        {perfumeDetails.price} JD
                      </span>
                    </span>
                  </div>
                  <p className="lead">{perfumeDetails.description}</p>

                  <p className="fw-semibold">
                    Select the quantity you want in ml :
                  </p>
                  <div className="d-flex">
                    <input
                      className="form-control text-center me-3"
                      id="inputQuantity"
                      type="number"
                      defaultValue={1}
                      // value={1}
                      style={{ maxWidth: "5rem" }}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                      onClick={() => handleAddToCart()}
                    >
                      <i className="bi-cart-fill me-1" />
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <section className="py-5 bg-light related sectionback">
          <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Related products</h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {relatedPerfumes &&
                relatedPerfumes.map((perfume) => (
                  <div key={perfume._id} className="col  mb-5">
                    <div className="card h-100 bg-light bg-opacity-75">
                      {/* Product image*/}
                      <img
                        className=" card-img-top"
                        src={`http://localhost:4000/${perfume.perfume_picture}`}
                        alt="..."
                      />
                      {/* Product details*/}
                      <div className="card-body p-4">
                        <div className="text-center">
                          {/* Product name*/}
                          <h5 className="fw-bolder">{perfume.perfume_name}</h5>
                          {/* Product price*/}
                          price for ml: {perfume.price}
                        </div>
                      </div>
                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <Link
                            to={`/productDetails/${perfume._id}`}
                            className="btn btn-sm btn-outline-dark mt-auto"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
