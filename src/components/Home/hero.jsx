import React from 'react'
import hero1 from '../../assets/hero1.jpg'
import hero2 from '../../assets/hero2.jpg'
import hero3 from '../../assets/hero3.jpg'
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <>

            <>
                {/* Example Code */}
                <div
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
                </div>
                {/* End Example Code */}
            </>


        </>
    )
}
