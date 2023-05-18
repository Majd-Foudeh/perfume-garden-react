import React from 'react'
import './signUp.css'
export const Signup = () => {
    return (
        <>
            <section
                className=" backimg "
                style={{ backgroundColor: "#eee", height: "94vh" }}
            >
                <div className="container h-100 w-100  ">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-lg-12 col-xl-11 ">
                            <div
                                className="card text-black border-2 shadow-6-strong "
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.856)",
                                    borderRadius: 25
                                }}
                            >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center ">
                                        <div className="col-md-11  col-sm-11 col-lg-7 col-xl-8  order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>
                                            <form className="mx-1 mx-md-4" id="loginform">
                                                <div className="row">
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="username"
                                                                name="username"
                                                                className="form-control form-control-lg focuscolor"
                                                                required=""
                                                            />
                                                            <label className="form-label" htmlFor="username">
                                                                {" "}
                                                                <i className="fas fa-user me-2" />
                                                                Your Full Name
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-phone fa-lg me-3 fa-fw" style="color: #E38B29;"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="phonenumber"
                                                                name="phonenumber"
                                                                className="form-control form-control-lg"
                                                                required=""
                                                            />
                                                            <label className="form-label  " htmlFor="phonenumber">
                                                                {" "}
                                                                <i className="fas fa-phone me-2" /> Phone Number
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                className="form-control form-control-lg "
                                                                required=""
                                                            />
                                                            <label className="form-label" htmlFor="email">
                                                                {" "}
                                                                <i className="fas fa-envelope me-2" />
                                                                Your Email
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        <select className="form-select">
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                            <option value={4}>Four</option>
                                                            <option value={5}>Five</option>
                                                        </select>
                                                        <label className="form-label select-label">
                                                            Example label
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                name="password"
                                                                className="form-control form-control-lg "
                                                                required=""
                                                            />
                                                            <label className="form-label" htmlFor="password">
                                                                {" "}
                                                                <i className="fas fa-lock me-2" />
                                                                password
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-phone fa-lg me-3 fa-fw" style="color: #E38B29;"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="mainaddress"
                                                                name="mainaddress"
                                                                className="form-control form-control-lg"
                                                                required=""
                                                            />
                                                            <label className="form-label  " htmlFor="mainaddress">
                                                                {" "}
                                                                <i className="fas fa-location-dot me-2" /> Address
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="password"
                                                                id="confirmpassword"
                                                                name="confirmpassword"
                                                                className="form-control form-control-lg "
                                                                required=""
                                                            />
                                                            <label className="form-label" htmlFor="confirmpassword">
                                                                {" "}
                                                                <i className="fas fa-lock me-2" />
                                                                Re-enter Password
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                        {/* <i class="fas fa-phone fa-lg me-3 fa-fw" style="color: #E38B29;"></i> */}
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input
                                                                type="text"
                                                                id="seconderyaddress"
                                                                name="seconderyaddress"
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label
                                                                className="form-label  "
                                                                htmlFor="seconderyaddress"
                                                            >
                                                                {" "}
                                                                <i className="fas fa-location-dot me-2" /> Second
                                                                Address{" "}
                                                                <sub style={{ color: "rgb(190, 190, 190)" }}>
                                                                    (optional)
                                                                </sub>{" "}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-4"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="form2Example3"
                                                    />
                                                    <label
                                                        className="row form-check-label"
                                                        htmlFor="form2Example3"
                                                    >
                                                        <span className="col-7 p-0">
                                                            {" "}
                                                            I agree all statements in
                                                        </span>
                                                        <div className="container-fluid p-0 col-5">
                                                            <div className="">
                                                                <div className=" ">
                                                                    {/* Button trigger modal */}
                                                                    <a
                                                                        type="button"
                                                                        className=" bg-gradient-primary"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#exampleModal"
                                                                    >
                                                                        Terms of Use
                                                                    </a>
                                                                    {/* Modal */}
                                                                    <div
                                                                        className="modal fade"
                                                                        id="exampleModal"
                                                                        tabIndex={-1}
                                                                        aria-labelledby="exampleModalLabel"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <div className="modal-dialog">
                                                                            <div className="modal-content">
                                                                                <div className="modal-header ">
                                                                                    <h5
                                                                                        className="modal-title"
                                                                                        id="exampleModalLabel"
                                                                                    >
                                                                                        Terms of Use
                                                                                    </h5>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn-close"
                                                                                        data-bs-dismiss="modal"
                                                                                        aria-label="Close"
                                                                                    />
                                                                                </div>
                                                                                <div className="modal-body">
                                                                                    You agree to use our website for legitimate
                                                                                    purposes and not for any illegal or
                                                                                    unauthorized purpose, including without
                                                                                    limitation, in violation of any intellectual
                                                                                    property or privacy law. By agreeing to the
                                                                                    Terms, you represent and warrant that you
                                                                                    are at least the age of majority in your
                                                                                    state or province of residence and are
                                                                                    legally capable of entering into a binding
                                                                                    contract.
                                                                                    <br />
                                                                                    <br />
                                                                                    You agree to not use our website to conduct
                                                                                    any activity that would constitute a civil
                                                                                    or criminal offence or violate any law. You
                                                                                    agree not to attempt to interfere with our
                                                                                    website’s network or security features or to
                                                                                    gain unauthorized access to our systems.
                                                                                </div>
                                                                                <div className="modal-footer justify-content-between">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn bg-gradient bg-dark text-light"
                                                                                        data-bs-dismiss="modal"
                                                                                    >
                                                                                        Close
                                                                                    </button>
                                                                                    <button
                                                                                        type="button"
                                                                                        className="btn bg-gradient bg-warning "
                                                                                    >
                                                                                        I've read it
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="button submit"
                                                        style={{ backgroundColor: "#fbf1d0" }}
                                                        className="btn submit btn-lg"
                                                    >
                                                        <span>Register</span>{" "}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div
                                            style={{ borderRadius: 25, backgroundColor: "#faf2da" }}
                                            className="col-md-11 col-sm-11 col-sm-11 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center order-1 order-lg-2"
                                        >
                                            <img
                                                src="../images/login2.png"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
