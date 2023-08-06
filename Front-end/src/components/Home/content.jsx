import React from 'react';
import { FeaturesSection } from './featuresSection';
import strong from '../../assets/strong.png';
import medium from '../../assets/medium.png';
import light from '../../assets/light.png';
import hero4 from '../../assets/hero4.jpg';

export const Content = () => {
  return (
    <>
      <div>
        <>
          <div className="row mx-auto my-5 py-5 justify-content-center contentBack align-items-center featurette rounded" style={{width:"90vw"}}>
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Perfume Oil Collection{' '}
                <span className="text-body-secondary">
                  Discover the Essence of Luxury.
                </span>
              </h2>
              <p className="lead">
                Welcome to our exquisite perfume oil collection! Indulge your
                senses with our premium selection of perfume oils that capture
                the true essence of luxury and elegance. Our handcrafted scents
                are carefully curated to provide a unique and unforgettable
                experience.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                src={hero4}
                alt="Perfume Oil"
              />
            </div>
          </div>

          {/* bottel type section */}
          <div className="d-flex  justify-content-center ">
            <hr className="w-75" />
          </div>
          <section className="row my-5 gap-4 " style={{ width: '100%' }}>
            <div className="container col-lg-5 col-md-10 col-sm-10 order-2 d-flex flex-column justify-content-evenly gap-4  ">
              <div className="row align-items-center justify-content-center">
                <div className="col-3 " style={{ height: '8vh' }}>
                  <img
                    src={strong}
                    height="100%"
                    className="mdi mdi-truck-fast"
                  />
                </div>
                <div className="col-7 content-card-content">
                  <h4 className=" ">Strong Concentration</h4>
                  {/* <p class="">Available in most metros on selected in-stock products</p> */}
                </div>
              </div>
              <div className="row align-items-center justify-content-center ">
                <div className="col-3 " style={{ height: '8vh' }}>
                  <img
                    src={medium}
                    height="100%"
                    className="mdi mdi-truck-fast"
                  />
                </div>
                <div className="col-7 content-card-content">
                  <h4 className=" ">Medium Concentration</h4>
                  {/* <p class="">Available in most metros on selected in-stock products</p> */}
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-3 " style={{ height: '8vh' }}>
                  <img
                    src={light}
                    height="100%"
                    className="mdi mdi-truck-fast"
                  />
                </div>
                <div className="col-7 content-card-content">
                  <h4 className=" ">Light Concentration</h4>
                  {/* <p class="">Available in most metros on selected in-stock products</p> */}
                </div>
              </div>
            </div>
            <div className="container-fluid order-1 col-lg-6 col-md-10 col-sm-10 justify-content-center">
              <img
                src="../images/fulvio-ciccolo-8xDbAn8JcWY-unsplash.jpg"
                width="100%"
                alt=""
              />
            </div>
          </section>
          <div className="d-flex  justify-content-center ">
            <hr className="w-75" />
          </div>
          {/* bottel type section */}

          {/* <div className="row featurette mx-auto my-5 justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{' '}
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-4 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="var(--bs-secondary-bg)"
                />
                <text
                  x="50%"
                  y="50%"
                  fill="var(--bs-secondary-color)"
                  dy=".3em"
                >
                  500x500
                </text>
              </svg>
            </div>
          </div> */}

        </>
      </div>
    </>
  );
};
