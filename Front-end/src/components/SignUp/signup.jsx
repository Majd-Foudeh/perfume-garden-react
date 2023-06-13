import React from 'react'
import './signup.css'
import login from '../../assets/login.jpg'


export const Signup = () => {
    //     let usernameerror=document.getElementById("username");
    // let phonenumbererror=document.getElementById("phonenumber");
    // let emailerror=document.getElementById("email");
    // let passworderror=document.getElementById("password");
    // let confirmpassworderror=document.getElementById("confirmpassword");
    // let form=document.getElementById("loginform");

    // form.addEventListener("submit", function(event){
    //     event.preventDefault();

    //     const usernameRegex = /^\S+$/;
    //     const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    //     const phoneRegex = /^07\d{8}$/;
    //     const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,}$/;

    // const username=event.target.username.value;
    // if (!usernameRegex.test(username)) {
    //     usernameerror.classList.add("is-invalid")
    // }
    // else{
    //     usernameerror.classList.add("is-valid")
    // }

    // const phonenumber=event.target.phonenumber.value;
    // if (!phoneRegex.test(phonenumber)) {
    //     phonenumbererror.classList.add("is-invalid")
    // }
    // else{
    //     phonenumbererror.classList.add("is-valid")
    // }

    // const email=event.target.email.value;
    // if (!emailRegex.test(email)) {
    //     emailerror.classList.add("is-invalid")
    // }
    // else{
    //     emailerror.classList.add("is-valid")
    // }

    // const password=event.target.password.value;
    // if (!passwordRegex.test(password)) {
    //     passworderror.classList.add("is-invalid")
    // }
    // else{
    //     passworderror.classList.add("is-valid")
    // }

    // const confirmpassword=event.target.confirmpassword.value;
    // if (!(confirmpassword===password)) {
    //     confirmpassworderror.classList.add("is-invalid")
    // }
    // else{
    //     confirmpassworderror.classList.add("is-valid")
    // }
    // })
    return (
        <>
            <section

                style={{ backgroundSize: "100% 100%", height: "94vh", backgroundImage: `url("https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")` }}
            >
                <div className="container rounded-4 h-100 w-100  ">
                    <div className="row d-flex rounded-4 justify-content-center align-items-center h-100 ">
                        <div className="col-lg-12 rounded col-xl-11 ">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                Sign up
                            </p>




                            <div className=" rounded-3 card  " style={{
                                backgroundColor: "rgb(248 248 248 / 90%)",
                                boxShadow:
                                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                            }}>

                                <div className="row justify-content-center rounded ">

                                    <div className="col-md-12 mb-md-4 rounded col-sm-11 col-lg-8 col-xl-8 d-flex flex-column justify-content-center order-2 order-lg-1">
                                        <p className="text-muted fw-bold mx-1 mx-md-4 mt-4">
                                            Sign up
                                        </p>
                                        <form className="mx-1 mx-md-4 " id="loginform">
                                            <div className="row">
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className=" fas fa-user me-2" />First name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            id="validationCustom01"
                                                            placeholder="Enter your first name"
                                                            required=""
                                                        />
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-user me-2" />Last name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            id="validationCustom01"
                                                            placeholder="Enter your Last name"
                                                            required=""
                                                        />
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
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
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-phone me-2" />Phone Number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control "
                                                            id="phonenumber"
                                                            placeholder="Enter your phone number"
                                                            required=""
                                                        />
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
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
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-lock me-2" />Re-Enter Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control  "
                                                            id="password"
                                                            placeholder="Re-Enter your Password"
                                                            required=""
                                                        />
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                    <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-location-dot me-2" />Address</label>
                                                    <input
                                                        type="text"
                                                        className="form-control  "
                                                        id="address"
                                                        placeholder="Re-Enter your Password"
                                                        required=""
                                                    />
                                                    <div className="valid-feedback">Looks good!</div>
                                                </div>
                                                </div>
                                                <div className="col-6 d-flex flex-row align-items-center mb-4">
                                                    {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                                                    <div className="w-100 ">
                                                        <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-home me-2" />Your City</label>
                                                        <select class="form-select form-select-lg fs-6" aria-label="Default select example">
                                                            <option selected>Choose your city.....</option>
                                                            <option value="Zarqa">Zarqa</option>
                                                            <option value="Amman">Amman</option>
                                                            <option value="Irbid">Irbid</option>
                                                            <option value="Ajlon">Ajlon</option>
                                                        </select>

                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div className="row">
                                                <div className="w-100 ">
                                                    <label htmlFor="validationCustom01" className='mb-1 ms-2'><i className="fas fa-location-dot me-2" />Address</label>
                                                    <input
                                                        type="text"
                                                        className="form-control  "
                                                        id="address"
                                                        placeholder="Re-Enter your Password"
                                                        required=""
                                                    />
                                                    <div className="valid-feedback">Looks good!</div>
                                                </div>
                                            </div> */}

                                            
                                                <div className="form-check d-flex" >
                                                    <input
                                                        className="form-check-input me-4"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="form2Example3"
                                                    />
                                                    <label
                                                        className="d-flex form-check-label"
                                                        htmlFor="form2Example3"
                                                    >
                                                        <div className=" p-0" style={{ width: "310px" }}>
                                                            <p> I agree all statements in</p>
                                                        </div>
                                                        <div className="container-fluid p-0 ">

                                                            {/* Button trigger modal */}
                                                            <a
                                                                type="button"
                                                                className=" text-black fw-bold"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#exampleModal"
                                                            >
                                                                <u>
                                                                    
                                                                Terms of Use
                                                                </u>
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

                                        className="col-md-12 col-sm-11 col-sm-11 col-lg-4 col-xl-4 d-flex justify-content-center order-1 order-lg-2"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                            className="img-fluid rounded-end"
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
