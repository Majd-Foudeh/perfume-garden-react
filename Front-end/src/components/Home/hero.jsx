import React from "react";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";
import { Link } from "react-router-dom";
import heroFinal from "../../assets/videos/heroFinal.mp4";
export const Hero = () => {
  return (
    <>
      {/* <div
        class="ratio ratio-21x9
"
      >
        <iframe
          autoPlay
          loop
          muted
          playsInline
          src={heroFinal}
          title="YouTube video"
        ></iframe>
      </div> */}
      <header style={{ paddingLeft: 0 }}>
        <div
          className=" text-center bg-video"
          style={{ height: "94vh", position: "relative", overflow: "hidden" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="ratio ratio-16x9"
            style={{
              // position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={heroFinal} type="video/mp4" />
            {/* You can add additional <source> elements for different video formats */}
          </video>
          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3 text-light" style={{ fontSize: "80px" }}>
                  Perfume Garden
                </h1>
                <h4
                  className="mb-3 txt-light fw-light "
                  style={{ color: "#c5c3c3" }}
                >
                  Discover a world of exquisite fragrance <br /> at Perfume
                  Garden
                </h4>
                <Link
                  className="btn btn-outline-light "
                  to="/shop"
                  role="button"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <>
        {/* Example Code */}
        {/* <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="5000">
                            <img src={hero1} className="d-block w-100" style={{ height: "95vh" }} alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="5000">
                            <img src={hero3} className="d-block w-100" style={{ height: "95vh" }} alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item " data-bs-interval="5000">
                            <img src={hero2} className="d-block w-100" style={{ height: "95vh" }} alt="..." />

                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
        {/* End Example Code */}
      </>
    </>
  );
};
