import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
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

  return (
    <section
      className="my-5 py-5 bg-light featuredBack related mx-auto rounded"
      style={{ width: "90vw" }}
    >
      <div className="container px-4 px-lg-5 mt-5">
        <h2 className="fw-bolder mb-4">Featured products</h2>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {relatedPerfumes &&
            relatedPerfumes.map((perfume) => (
              <div key={perfume._id} className="sm-col-6 md-col-9 col-10  mb-5">
                <div className="card h-100 bg-light ">
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
  );
};
