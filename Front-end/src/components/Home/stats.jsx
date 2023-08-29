import React, { useEffect, useState } from "react";
import "../../style/stats.css";
import axios from "axios";
export const Stats = () => {
  const [perfumeNumber, setPerfumeNumber] = useState();
  const [usersNumber, setUsersNumber] = useState();
  const [ordersNumber, setOrdersNumber] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/perfumeNumber")
      .then((response) => {
        setPerfumeNumber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/usersNumber")
      .then((response) => {
        setUsersNumber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/ordersNumber")
      .then((response) => {
        setOrdersNumber(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {/* <div className="m-auto" style={{ width: "90vw" }}>
        <h2 className="fw-bolder mb-3">perfume categories </h2>
        <p className=" mb-4">Know what these perfume category icons means</p>
      </div> */}
      <div className="container3 my-5">
        <div className="card3">
          <div className="left">
            <h2 className="text-white statsText">
              Explore <span className="highlight">fragrances</span> that elevate
              your senses.
            </h2>
            <p className="para statsText">
              Delve into the world of captivating perfume oils and enhance your
              shopping experience with valuable insights about the finest
              fragrances, customer preferences, and overall website efficiency.
            </p>
            <div className="stats">
              <div>
                <p className="number text-center">{perfumeNumber}</p>
                <p className="para stat-text">PERFUMES</p>
              </div>
              <div>
                <p className="number text-center">{usersNumber}</p>
                <p className="para stat-text">USERS</p>
              </div>
              <div>
                <p className="number text-center">{ordersNumber}</p>
                <p className="para stat-text">ORDERS</p>
              </div>
            </div>
          </div>
          <div className="right overlay" />
        </div>
      </div>
    </>
  );
};
