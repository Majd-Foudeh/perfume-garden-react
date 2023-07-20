import React, { useContext, useEffect, useState } from "react";
import "../../style/cart.css";
import Swal from "sweetalert2";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
export const Cart = () => {
  const navigate = useNavigate();
  const [existingCartItems, setExistingCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const { auth } = useContext(AuthContext);

  // console.log(existingCartItems);
  const handleAlert = () => {
    Swal.fire({
      title: "You are not loged in !! ",
      text: "please login or signup to continue",
      icon: "error",
    });
  };
  const handleDelete = (itemId) => {
    console.log(itemId);
    const updatedCartItems = existingCartItems.filter(
      (item) => item.id !== itemId
    );

    setExistingCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    let count = JSON.parse(localStorage.getItem("cartCount"));
    count--;
    localStorage.setItem("cartCount", count);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    axios
      .get(`http://localhost:3000/onePerfume/${itemId}`)
      .then((response) => {
        const perfumePrice = response.data.price;
        const updatedCartItems = existingCartItems.map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              quantity: newQuantity,
              price: perfumePrice * newQuantity,
            };
          }
          return item;
        });

        setExistingCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  let subTotal = 0;
  const handleSubTotal = () => {
    for (let i = 0; i < existingCartItems.length; i++) {
      const element = existingCartItems[i];
      // console.log(element.price);

      subTotal = subTotal + element.price;
    }

    localStorage.setItem("subTotal", JSON.stringify(subTotal));
    return subTotal;
  };
  useEffect(() => {
    handleSubTotal;
  }, []);

  return (
    <>
      <div>
        <>
          <header
            className="bannerimg  py-5 shadow-6-strong "
            style={{ height: 280 }}
          >
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-black d-flex justify-content-between">
                <div>
                  <h1 className="display-4 fw-bolder">Cart</h1>
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <main className="main">
            <div className="px-4 px-lg-0">
              <div className="pb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 p-5 bg-white bg-opacity-75 rounded shadow-3-strong my-5">
                      {/* Shopping cart table */}
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr
                              className=""
                              style={{ backgroundColor: "#F4D87B" }}
                            >
                              <th scope="col" className="border-0 ">
                                <div className="p-2 px-3 text-uppercase">
                                  Product
                                </div>
                              </th>
                              <th scope="col" className="border-0 ">
                                <div className="py-2 text-uppercase">Price</div>
                              </th>
                              <th scope="col" className="border-0 ">
                                <div className="py-2 text-uppercase text-center">
                                  Quantity
                                </div>
                              </th>
                              <th scope="col" className="border-0 ">
                                <div className="py-2 text-uppercase">
                                  Remove
                                </div>
                              </th>
                            </tr>
                          </thead>
                          {existingCartItems.length !== 0 ? (
                            existingCartItems.map((item) => {
                              return (
                                <tbody>
                                  <tr className="">
                                    <th scope="row" className="border-0">
                                      <div className="p-2">
                                        <img
                                          src={`http://localhost:4000/${item.img}`}
                                          alt=""
                                          width={70}
                                          className="img-fluid rounded shadow-sm me-3"
                                        />
                                        <div className="ml-3 d-inline-block align-middle">
                                          <h5 className="mb-0">
                                            {" "}
                                            <a
                                              href="#"
                                              className="text-dark d-inline-block align-middle"
                                            >
                                              {item.name}
                                            </a>
                                          </h5>
                                          <span className="text-muted font-weight-normal font-italic d-block">
                                            Category:{item.category}
                                          </span>
                                        </div>
                                      </div>
                                    </th>
                                    <td className="border-0 align-middle">
                                      <strong>{`${item.price}JD`}</strong>
                                    </td>
                                    <td className="border-0 align-middle align-self-end mt-4 text-center justify-content-evenly align-items-end">
                                      <input
                                        className=" form-control m-0 p-2 d-inline text-center"
                                        id="inputQuantity"
                                        type="number"
                                        defaultValue={item.quantity}
                                        style={{ maxWidth: "4rem" }}
                                        onChange={(e) =>
                                          handleUpdateQuantity(
                                            item.id,
                                            e.target.value
                                          )
                                        }
                                      />
                                      <strong className="m-2">{`ml`}</strong>
                                    </td>
                                    <td className="border-0 align-middle">
                                      <div className=" text-dark">
                                        <i
                                          onClick={() => handleDelete(item.id)}
                                          style={{ cursor: "pointer" }}
                                          className=" fa fa-trash"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              );
                            })
                          ) : (
                            <tbody className="w-100">
                              <tr className=" align-items-center text-center">
                                <div className="mb-2">
                                  There is nothing in the cart
                                </div>
                                <Link to="/shop">
                                  <div className="btn btn-outline-dark">
                                    Back to shop
                                  </div>
                                </Link>
                              </tr>
                            </tbody>
                          )}
                        </table>
                      </div>
                      {/* End */}
                      <div className="mt-4 d-flex flex-column align-items-end">
                        <p
                          className="mb-0 me-2 fs-4 "
                          style={{ color: "#E38B29" }}
                        >
                          Subtotal{" "}
                          <span className=" text-black fw-bolder">
                            {handleSubTotal()} JD
                          </span>
                        </p>
                        <p className="text-muted">
                          Taxes and shipping are calculated at checkout
                        </p>
                        {auth ? (
                          <Link
                            to="/checkout"
                            role="button"
                            className="btn checkoutbtn bg-black text-light "
                          >
                            <span className="fs-6">Go to checkout</span>{" "}
                          </Link>
                        ) : (
                          <Link
                            onClick={handleAlert}
                            to="/login"
                            role="button"
                            className="btn checkoutbtn bg-black text-light "
                          >
                            <span className="fs-6">Go to checkout</span>{" "}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      </div>
    </>
  );
};
