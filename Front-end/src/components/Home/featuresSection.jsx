import React from "react";
import ease from "../../assets/easy-use.png";
import "../../style/featuresSection.css";
export const FeaturesSection = () => {
  return (
    <>
      <>
        {/* Feature */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>E-Commerce Perfume Oils</h2>
                  <p>
                    Discover a world of exquisite fragrance at E-Commerce
                    Perfume Oils. We offer unique and high-quality perfume oils,
                    catering to your distinct preferences with personalized
                    blends. Our long-lasting scents delight your senses, and
                    ordering is simple and convenient through our user-friendly
                    website. Experience the magic of fragrance today!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* feaure box */}
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-desktop" />
                  </div>
                  <div className="feature-content">
                    <h5>Unique Fragrance Blends</h5>
                    <p>
                      Explore exclusive blends of floral, woody, and more,
                      tailored to suit your individual taste.
                    </p>
                  </div>
                </div>
              </div>
              {/* / */}
              {/* feaure box */}
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-user" />
                  </div>
                  <div className="feature-content">
                    <h5>Personalized Perfume Selection</h5>
                    <p>
                      Customize your own perfume oil to perfectly complement
                      your personality.
                    </p>
                  </div>
                </div>
              </div>
              {/* / */}
              {/* feaure box */}
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-comment" />
                  </div>
                  <div className="feature-content">
                    <h5>Simple and Convenient Ordering</h5>
                    <p>
                      Easily browse and order your favorite perfume oil from our
                      user-friendly website.
                    </p>
                  </div>
                </div>
              </div>
              {/* / */}
              {/* feaure box */}
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-image" />
                  </div>
                  <div className="feature-content">
                    <h5>Long-lasting Fragrance</h5>
                    <p>
                      Experience enchanting, long-lasting aroma that lingers
                      throughout the day.
                    </p>
                  </div>
                </div>
              </div>
              {/* / */}
              {/* feaure box */}
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-th" />
                  </div>
                  <div className="feature-content">
                    <h5>Quality Assurance</h5>
                    <p>
                      Each bottle is crafted with utmost care to maintain the
                      highest quality standards.
                    </p>
                  </div>
                </div>
              </div>
              {/* / */}
              {/* feaure box */}
              <div className="col-sm-6 col-lg-4">
                <div className="feature-box-1">
                  <div className="icon">
                    <i className="fa fa-cog" />
                  </div>
                  <div className="feature-content">
                    <h5>Various Sizing Options</h5>
                    <p>
                      Choose from a range of sizes to fit your needs for
                      on-the-go use or everyday indulgence.
                    </p>
                  </div>
                </div>
              </div>
              {/* / */}
            </div>
          </div>
        </section>
      </>
    </>
  );
};

{
  /* <section className=" mb-10 ">
                <div className="container">
                    <div className="mb-3 row justify-content-center">
                        <div className="col-lg-8">
                            <div className="content-title text-center">
                                <h2 className="title">See it bigger, brighter</h2>
                                <p>Take a closer look at the features...</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-8">
                            <div className="single-content mt-30 text-center">
                                <div className="content-image">
                                    <img src={ease} alt="content" />
                                </div>
                                <div className="content-content">
                                    <h4 className="title my-3">Innovative Lenses</h4>
                                    <p>
                                        Oculus Go brings experiences to life in rich detail and vibrant
                                        color with crystal clear optics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="single-content mt-30 text-center">
                                <div className="content-image">
                                    <img src="../images/perfume.png" alt="content" />
                                </div>
                                <div className="content-content">
                                    <h4 className="title my-3">Ergonomic Design</h4>
                                    <p>
                                        Oculus Go brings experiences to life in rich detail and vibrant
                                        color with crystal clear optics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-8">
                            <div className="single-content mt-30 text-center">
                                <div className="content-image">
                                    <img src="../images/credit-card.png" alt="content" />
                                </div>
                                <div className="content-content">
                                    <h4 className="title my-3">Effortless Control</h4>
                                    <p>
                                        Oculus Go brings experiences to life in rich detail and vibrant
                                        color with crystal clear optics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */
}
