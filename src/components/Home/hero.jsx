import React from 'react'
import hero1 from '../../assets/hero1.jpg'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <>
        <Link></Link>
            <div
                className="mb-10 text-center d-flex flex-column justify-content-center  "
                style={{
                    height: "94vh",
                    backgroundImage:`url(${hero1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                }}
            >
                {/* <img class="d-block mx-auto mb-4" src="../images/hero.jpg" alt="" > */}
                <div
                    className="h-100 d-flex flex-column justify-content-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                    <h1
                        className="display-5 fw-bold "
                        style={{ color: "#F6F1E9", fontSize: 80 }}
                    >
                        Centered hero
                    </h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4 fw-bolder" style={{ color: "#F6F1E9" }}>
                            Quickly design and customize responsive mobile-first sites with
                            Bootstrap, the world’s most popular front-end open source toolkit,
                            featuring Sass variables and mixins, responsive grid system, extensive
                            prebuilt components, and powerful JavaScript plugins.
                        </p>
                        <div className="d-grid row gap-2 d-sm-flex justify-content-sm-center">
                            <Link to="/checkout">
                                <button
                                    type="button"
                                    className="btn btn-warning btn-lg col-lg-5 px-4 gap-3"
                                >
                                    Primary button
                                </button>
                            </Link>
                            <button
                                type="button"
                                className="btn btn-outline-light btn-lg col-lg-5 px-4"
                            >
                                Secondary
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
