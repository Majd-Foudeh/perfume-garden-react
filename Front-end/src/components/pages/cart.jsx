import React from 'react'
import '../../style/cart.css'

import { Link, useNavigate } from 'react-router-dom'
export const Cart = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>

        <>
          <header className="bannerimg  py-5 shadow-6-strong " style={{ height: 280 }}>
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-black d-flex justify-content-between">
                <div>
                  <h1 className="display-4 fw-bolder">Cart</h1>
                </div>
                <div>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb fw-bolder fs-4" style={{ lineHeight: 4 }}>
                      <li className="breadcrumb-item ">
                        <a className="text-black" href="" onClick={navigate(-1)}>
                          Shop
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Cart
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <main className='main'>
            <div className="px-4 px-lg-0">
              <div className="pb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 p-5 bg-white bg-opacity-75 rounded shadow-3-strong my-5">
                      {/* Shopping cart table */}
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr className="" style={{ backgroundColor: "#F4D87B" }}>
                              <th scope="col" className="border-0 ">
                                <div className="p-2 px-3 text-uppercase">Product</div>
                              </th>
                              <th scope="col" className="border-0 ">
                                <div className="py-2 text-uppercase">Price</div>
                              </th>
                              <th scope="col" className="border-0 ">
                                <div className="py-2 text-uppercase">Quantity</div>
                              </th>
                              <th scope="col" className="border-0 ">
                                <div className="py-2 text-uppercase">Remove</div>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="border-0">
                                <div className="p-2">
                                  <img
                                    src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                                    alt=""
                                    width={70}
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      {" "}
                                      <a
                                        href="#"
                                        className="text-dark d-inline-block align-middle"
                                      >
                                        Timex Unisex Originals
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic d-block">
                                      Category: Watches
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="border-0 align-middle">
                                <strong>$79.00</strong>
                              </td>
                              <td className="border-0 align-middle">
                                <strong>33 K</strong>
                              </td>
                              <td className="border-0 align-middle">
                                <a href="#" className="text-dark">
                                  <i className="fa fa-trash" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="p-2">
                                  <img
                                    src="https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg"
                                    alt=""
                                    width={70}
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      <a href="#" className="text-dark d-inline-block">
                                        Lumix camera lense
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic">
                                      Category: Electronics
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <strong>$79.00</strong>
                              </td>
                              <td className="align-middle ">
                                <strong>300 ml</strong>
                              </td>
                              <td className="align-middle">
                                <a href="#" className="text-dark">
                                  <i className="fa fa-trash" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="p-2">
                                  <img
                                    src="https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg"
                                    alt=""
                                    width={70}
                                    className="img-fluid rounded shadow-sm"
                                  />
                                  <div className="ml-3 d-inline-block align-middle">
                                    <h5 className="mb-0">
                                      {" "}
                                      <a href="#" className="text-dark d-inline-block">
                                        Gray Nike running shoe
                                      </a>
                                    </h5>
                                    <span className="text-muted font-weight-normal font-italic">
                                      Category: Fashion
                                    </span>
                                  </div>
                                </div>
                              </th>
                              <td className="align-middle">
                                <strong>$79.00</strong>
                              </td>
                              <td className="align-middle">
                                <strong>3</strong>
                              </td>
                              <td className="align-middle">
                                <a href="#" className="text-dark">
                                  <i className="fa fa-trash" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* End */}
                      <div className="mt-4 d-flex flex-column align-items-end">
                        <p className="mb-0 me-2 fs-4 " style={{ color: "#E38B29" }}>
                          Subtotal <span className=" text-black fw-bolder">154 jd</span>
                        </p>
                        <p className="text-muted">
                          Taxes and shipping are calculated at checkout
                        </p>
                        <Link
                          to="/checkout"
                          role="button"
                          className="btn checkoutbtn bg-black text-light "
                        >
                          <span className='fs-6'>Go to checkout</span>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div class="row py-5 p-4 bg-white rounded shadow-sm">
              <div class="col-lg-6">
                  <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
                  <div class="p-4">
                      <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
                      <div class="input-group mb-4 border rounded-pill p-2">
                          <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3"
                              class="form-control border-0">
                          <div class="input-group-append border-0">
                              <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i
                                      class="fa fa-gift mr-2"></i>Apply coupon</button>
                          </div>
                      </div>
                  </div>
                  <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for
                      seller</div>
                  <div class="p-4">
                      <p class="font-italic mb-4">If you have some information for the seller you can leave them
                          in the box below</p>
                      <textarea name="" cols="30" rows="2" class="form-control"></textarea>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary
                  </div>
                  <div class="p-4">
                      <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you
                          have entered.</p>
                      <ul class="list-unstyled mb-4">
                          <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                  class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                          <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                  class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                          <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                  class="text-muted">Tax</strong><strong>$0.00</strong></li>
                          <li class="d-flex justify-content-between py-3 border-bottom"><strong
                                  class="text-muted">Total</strong>
                              <h5 class="font-weight-bold">$400.00</h5>
                          </li>
                      </ul><a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Procceed to checkout</a>
                  </div>
              </div>
          </div>

      </div>
  </div>
    </div> */}
                </div>
              </div>
            </div>
          </main>
        </>

      </div>
    </>
  )
}
