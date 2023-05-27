
import React from 'react'
import ease from '../../assets/easy-use.png'
export const FeaturesSection = () => {
    return (
        <>
            <>
                {/* Feature */}
                <section className="mt-5" >
                    <div className="container text-dark pt-3">
                        <header className="pt-4 pb-3">
                            <h3>Why choose us</h3>
                        </header>
                        <div className="row mb-4">
                            <div className="col-lg-4 col-md-6">
                                <figure className="d-flex align-items-center mb-4">
                                    <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                        <i className="fas fa-camera-retro fa-2x fa-fw text-warning floating" />
                                    </span>
                                    <figcaption className="info">
                                        <h6 className="title">Reasonable prices</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmor
                                        </p>
                                    </figcaption>
                                </figure>
                                {/* itemside // */}
                            </div>
                            {/* col // */}
                            <div className="col-lg-4 col-md-6">
                                <figure className="d-flex align-items-center mb-4">
                                    <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                        <i className="fas fa-star fa-2x fa-fw text-warning floating" />
                                    </span>
                                    <figcaption className="info">
                                        <h6 className="title">Best quality</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmor
                                        </p>
                                    </figcaption>
                                </figure>
                                {/* itemside // */}
                            </div>
                            {/* col // */}
                            <div className="col-lg-4 col-md-6">
                                <figure className="d-flex align-items-center mb-4">
                                    <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                        <i className="fas fa-plane fa-2x fa-fw text-warning floating" />
                                    </span>
                                    <figcaption className="info">
                                        <h6 className="title">Worldwide shipping</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmor
                                        </p>
                                    </figcaption>
                                </figure>
                                {/* itemside // */}
                            </div>
                            {/* col // */}
                            <div className="col-lg-4 col-md-6">
                                <figure className="d-flex align-items-center mb-4">
                                    <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                        <i className="fas fa-users fa-2x fa-fw text-warning floating" />
                                    </span>
                                    <figcaption className="info">
                                        <h6 className="title">Customer satisfaction</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmor
                                        </p>
                                    </figcaption>
                                </figure>
                                {/* itemside // */}
                            </div>
                            {/* col // */}
                            <div className="col-lg-4 col-md-6">
                                <figure className="d-flex align-items-center mb-4">
                                    <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                        <i className="fas fa-thumbs-up fa-2x fa-fw text-warning floating" />
                                    </span>
                                    <figcaption className="info">
                                        <h6 className="title">Happy customers</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmor
                                        </p>
                                    </figcaption>
                                </figure>
                                {/* itemside // */}
                            </div>
                            {/* col // */}
                            <div className="col-lg-4 col-md-6">
                                <figure className="d-flex align-items-center mb-4">
                                    <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                        <i className="fas fa-box fa-2x fa-fw text-warning floating" />
                                    </span>
                                    <figcaption className="info">
                                        <h6 className="title">Thousand items</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                            eiusmor
                                        </p>
                                    </figcaption>
                                </figure>
                                {/* itemside // */}
                            </div>
                            {/* col // */}
                        </div>
                    </div>
                    {/* container end.// */}
                </section>
                {/* Feature */}
                
            </>


        </>)
}



{/* <section className=" mb-10 ">
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
            </section> */}