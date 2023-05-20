
import React from 'react'
import ease from '../../assets/easy-use.png'
export const FeaturesSection = () => {
    return (
        <>
            <section className=" mb-10 ">
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
            </section>

        </>)
}
