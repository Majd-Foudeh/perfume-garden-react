import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import light from "../../assets/light.png";
import medium from "../../assets/medium.png";
import strong from "../../assets/strong.png";
import "../../style/WishListItemCard.css";
import { FaTrash } from "react-icons/fa";
const WishListItemCard = () => {
  const [wishList, setWishList] = useState([]);
  const { user, userRefresh } = useContext(UserContext);
  useEffect(() => {
    axios

      .get(`http://localhost:3000/wishList/${user._id}`)
      .then((response) => {
        setWishList(response.data.wishList);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user._id]);

  const handleDelete = async (perfumeId) => {
    console.log(user._id);
    console.log(perfumeId);
    try {
      await axios.delete(
        `http://localhost:3000/wishList/${user._id}/${perfumeId}`
      );
      console.log("perfume deleted");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      {" "}
      <div className="row gap-y-3 shopGap pb-5 mb-4">
        {wishList &&
          wishList.map((item) => {
            return (
              <div key={item._id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                {/* Card*/}
                <div className="card rounded cardshadow border-0 ">
                  <div className="card-body  p-3">
                    <div className="perfumeImg image-container">
                      <Link to={`/productDetails/${item.perfume._id}`}>
                        {" "}
                        <img
                          src={`http://localhost:4000/${item.perfume.perfume_picture}`}
                          alt="test"
                          className="img-fluid d-block rounded mx-auto mb-3"
                        />
                      </Link>
                      <button
                        onClick={() => {
                          userRefresh(), handleDelete(item.perfume._id);
                        }}
                        className="btn btn-outline-danger delete-button"
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <div className="d-flex  justify-content-between align-items-center">
                      <div className="d-flex flex-column">
                        <h6 className="m-1">
                          {" "}
                          <a
                            href="../product page/productPage.html"
                            className="text-dark"
                          >
                            {item.perfume.perfume_name}
                          </a>
                        </h6>
                        <div className="m-1">
                          <div>
                            <span className="fw-bold h4">
                              {" "}
                              {item.perfume.price}
                            </span>{" "}
                            <span className="text-warning">JD</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        {item.perfume.perfume_category == "Light" && (
                          <img height="40vh" src={light} alt="light" />
                        )}
                        {item.perfume.perfume_category == "Medium" && (
                          <img height="40vh" src={medium} alt="medium" />
                        )}
                        {item.perfume.perfume_category == "Strong" && (
                          <img height="40vh" src={strong} alt="strong" />
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
    </>
  );
};

export default WishListItemCard;
