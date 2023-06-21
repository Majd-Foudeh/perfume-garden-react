import React from 'react'
import '../SignUp/signUp.css'

export const Login = () => {
    return (
        <>

            <section

                style={{ backgroundSize: "100% 100%", height: "94vh", backgroundImage: `url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg")` }}
            >
                <div className="container rounded-4 h-100 w-100  " >
                    <div className="row d-flex rounded-4 justify-content-center align-items-center h-100 " >
                        <div className="col-lg-12 rounded col-xl-11 " >
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                Login Now
                            </p>




                            <div className=" rounded-3 card " style={{
                                backgroundColor: "rgb(248 248 248 / 90%)",
                                boxShadow:
                                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                            }}>

                                <div className="row justify-content-center rounded " >

                                    <div className="col-md-12 mb-md-4 rounded col-sm-11 col-lg-8 col-xl-4 d-flex flex-column justify-content-center order-2 order-lg-2">
                                        <div className="text-center my-3">
                                            <p>or sign up with:</p>
                                            <div className=" d-flex justify-content-center gap-5  me-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-floating mx-1"
                                                >
                                                    <i className="fab fa-facebook-f text-warning bg-dark rounded-9" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-floating mx-1"
                                                >
                                                    <i className="fab fa-google text-warning bg-dark rounded-9" />
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-link btn-floating text-warning mx-1"
                                                >
                                                    <i className="fab fa-twitter text-warning bg-dark rounded-9" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-muted fw-bold mx-1 mx-md-4 mt-4">
                                            Log in
                                        </p>
                                        <form className="mx-1 mx-md-4 " id="loginform">

                                            <div className="row">
                                                <div className="col-12 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-envelope me-2" />Email</label>
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            id="email"
                                                            placeholder="Enter your Email account"
                                                            required=""
                                                        />
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-12 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-lock me-2" />Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control "
                                                            id="password"
                                                            placeholder="Enter your Password"
                                                            required=""
                                                        />
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                </div>



                                            </div>




                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button
                                                    type="button submit"
                                                    style={{ backgroundColor: "#fbf1d0" }}
                                                    className="btn submit btn-lg"
                                                >
                                                    <span>Login</span>{" "}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div

                                        className="col-md-12 col-sm-11 col-sm-11 col-lg-4 col-xl-4 d-flex justify-content-center order-1 order-lg-1"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                            className="img-fluid rounded-start"
                                            alt="Sample image"
                                        />
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
