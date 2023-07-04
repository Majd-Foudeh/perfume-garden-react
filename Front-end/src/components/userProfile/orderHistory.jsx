import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { FaCircleNotch } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export const OrderHistory = () => {
  const { user } = useContext(UserContext);
  const [userOrders, setUserOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/userOrders/${user._id}`)
      .then((response) => {
        setUserOrders(response.data);
        console.log(response.data);
        // setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user._id]);
  let count = 0;
  const [test, setTest] = useState([]);
  const handleReorder = async (cart, total) => {
    const cartItems = [];

    await Promise.all(
      cart.map((item) =>
        axios
          .get(`http://localhost:3000/onePerfume/${item.perfumeId}`)
          .then((response) => {
            const Item = {
              id: response.data._id,
              name: response.data.perfume_name,
              price: response.data.price * item.quantity,
              quantity: item.quantity,
              img: response.data.perfume_picture,
              category: response.data.perfume_category,
            };
            cartItems.push(Item);
          })
          .catch((error) => {
            console.error(error.message);
          })
      )
    );

    setTest(cartItems);
    console.log(test);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("subTotal", JSON.stringify(total - 5));
    localStorage.setItem("cartCount", JSON.stringify(cartItems.length));
    navigate("/cart");
  };

  return (
    <>
      <div className="osahan-account-page-right  bg-white p-4 h-100">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane  fade  active show"
            id="orders"
            role="tabpanel"
            aria-labelledby="orders-tab"
          >
            <h4 className="font-weight-bold mt-0 mb-4">Past Orders </h4>

            {userOrders &&
              userOrders.map((item) => (
                <div className="bg-white card mb-4 order-list shadow-sm">
                  <div className="gold-members p-4">
                    <a href="#"></a>
                    <div className="media">
                      <div className="media-body">
                        <h5 className="mb-2">
                          <a href="#" />
                          <a href="#" className="text-black">
                            {`${user.first_Name.toUpperCase()} ${user.last_Name.toUpperCase()}`}{" "}
                            order{" "}
                            <span className="fw-bolder">
                              #{`${(count += 1)}`}
                            </span>
                          </a>
                        </h5>
                        <div className="fw-semibold">
                          Status:{" "}
                          {item.status == "pending" ? (
                            <span className="text-warning fw-bold">
                              In progress <BsClockHistory />
                            </span>
                          ) : (
                            <span className="text-success fw-bold">
                              Completed <FiCheckCircle />
                            </span>
                          )}
                        </div>
                        <a href="#">
                          <span className="float-end  text-info">
                            Date of order: {item.date}{" "}
                            <i className="icofont-check-circled text-success" />
                          </span>
                        </a>
                        <p className="text-gray mb-1">
                          <i className="icofont-location-arrow" />
                          {item.shippingAddress}
                        </p>
                        <p className="text-gray mb-3">
                          <i className="icofont-list" /> ORDER ID #{item._id}{" "}
                        </p>
                        <p className="text-dark">
                          {item.products.map((product) => (
                            <span className="me-2">
                              {` ${product.perfumeName} x ${product.quantity}ml`}{" "}
                              <span className="text-warning">/</span>
                            </span>
                          ))}
                        </p>
                        <hr />
                        <div className="d-flex flex-column flex-sm-row  justify-content-between">
                          <div className="d-flex justify-content-between gap-1  order-2">
                            <Link
                              className="btn btn-sm btn-outline-dark"
                              to="/contact"
                            >
                              <i className="icofont-headphone-alt" /> HELP
                            </Link>
                            <div
                              className="btn btn-sm btn-warning"
                              onClick={() =>
                                handleReorder(item.products, item.total)
                              }
                            >
                              <i className="icofont-refresh" /> REORDER
                            </div>
                          </div>
                          <p className="mb-0 text-black text-primary pt-2 order-1">
                            <b className="text-black font-weight-bold">
                              {" "}
                              Total Paid:
                            </b>{" "}
                            {item.total} JD
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
