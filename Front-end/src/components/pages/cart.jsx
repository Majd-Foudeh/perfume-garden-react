import React, { useEffect, useState } from "react";
import "../../style/cart.css";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Cart = () => {
  const navigate = useNavigate();
  const [existingCartItems, setExistingCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [perfumePrice, setPerfumePrice] = useState();
  console.log(existingCartItems);
  // useEffect(() => {
  //   setexistingCartItems(JSON.parse(localStorage.getItem("cartItems")));
  //   console.log(JSON.parse(localStorage.getItem("cartItems")));
  // }, []);

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
    axios.get(`http://localhost:3000/onePerfume/${itemId}`).then((response) => {
      setPerfumePrice(response.data.price);
      console.log(perfumePrice);
    });

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
  };

  let subTotal = 0;
  const handleSubTotal = () => {
    for (let i = 0; i < existingCartItems.length; i++) {
      const element = existingCartItems[i];
      console.log(element.price);

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
                        <Link
                          to="/checkout"
                          role="button"
                          className="btn checkoutbtn bg-black text-light "
                        >
                          <span className="fs-6">Go to checkout</span>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row py-5 p-4 bg-white rounded shadow-sm">
                    <div className="col-lg-6">
                      <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                        Coupon code
                      </div>
                      <div className="p-4">
                        <p className="font-italic mb-4">
                          If you have a coupon code, please enter it in the box
                          below
                        </p>
                        <div className="input-group mb-4 border rounded-pill p-2">
                          <input
                            type="text"
                            placeholder="Apply coupon"
                            aria-describedby="button-addon3"
                            className="form-control border-0"
                          />
                          <div className="input-group-append border-0">
                            <button
                              id="button-addon3"
                              type="button"
                              className="btn btn-dark px-4 rounded-pill"
                            >
                              <i className="fa fa-gift mr-2" />
                              Apply coupon
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                        Instructions for seller
                      </div>
                      <div className="p-4">
                        <p className="font-italic mb-4">
                          If you have some information for the seller you can
                          leave them in the box below
                        </p>
                        <textarea
                          name=""
                          cols={30}
                          rows={2}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                        Order summary
                      </div>
                      <div className="p-4">
                        <p className="font-italic mb-4">
                          Shipping and additional costs are calculated based on
                          values you have entered.
                        </p>
                        <ul className="list-unstyled mb-4">
                          <li className="d-flex justify-content-between py-3 border-bottom">
                            <strong className="text-muted">
                              Order Subtotal{" "}
                            </strong>
                            <strong>$390.00</strong>
                          </li>
                          <li className="d-flex justify-content-between py-3 border-bottom">
                            <strong className="text-muted">
                              Shipping and handling
                            </strong>
                            <strong>$10.00</strong>
                          </li>
                          <li className="d-flex justify-content-between py-3 border-bottom">
                            <strong className="text-muted">Tax</strong>
                            <strong>$0.00</strong>
                          </li>
                          <li className="d-flex justify-content-between py-3 border-bottom">
                            <strong className="text-muted">Total</strong>
                            <h5 className="font-weight-bold">$400.00</h5>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="btn btn-dark rounded-pill py-2 btn-block"
                        >
                          Procceed to checkout
                        </a>
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
