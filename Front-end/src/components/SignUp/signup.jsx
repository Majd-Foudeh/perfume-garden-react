import React, { useContext, useState } from "react";
import "./signup.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  // let { auth, setAuth, refresh } = useContext(AuthContext);

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

  const { auth, setAuth, refresh } = useContext(AuthContext);
  const { user, setUser, userRefresh } = useContext(UserContext);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    password: "",
    re_password: "",
  });

  const validateForm = () => {
    const errors = {};

    // Perform validation checks
    if (!newUser.fname) {
      errors.fname = "First name is required";
    }
    if (!newUser.lname) {
      errors.lname = "Last name is required";
    }

    if (!newUser.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = "Must be example@test.com";
    }
    if (!newUser.phoneNumber) {
      errors.phoneNumber = "phone number is required";
    } else if (!/^07\d{8}$/.test(newUser.phoneNumber)) {
      errors.phoneNumber = "Must be like this 07xxxxxxxx";
    }

    if (!newUser.password) {
      errors.password = "password is required";
    } else if (newUser.password.length < 6) {
      errors.password = "Password must contain at least 6 characters";
    } else if (!/^[a-zA-Z0-9!@#$%^&*]+$/.test(newUser.password)) {
      errors.password =
        "The password must contain English letters, numbers and special characters";
    } else if (!/\d/.test(newUser.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*]/.test(newUser.password)) {
      errors.password =
        "Password must contain at least one special character (!@#$%^&*).";
    }

    if (newUser.password !== newUser.re_password) {
      errors.re_password = "passwords are not match";
    }
    return errors;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const userData = {
        first_Name: newUser.fname,
        last_Name: newUser.lname,
        user_email: newUser.email,
        user_password: newUser.password,
        user_phoneNumber: newUser.phoneNumber, // Include the chosen role in the form data
      };

      axios
        .post("http://localhost:3000/adduser", userData)
        .then((response) => {
          console.log("signed up successfully");
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          setAuth(true);
          userRefresh();
          refresh();
          navigate("/");
        })
        .catch((error) => {
          console.error(error, "error in signup the user");
        });
    } else {
      setErrors(errors);
    }
  };
  return (
    <>
      <section
        style={{
          backgroundSize: "100% 100%",
          height: "94vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
        }}
      >
        <div className="container rounded-4 h-100 w-100  ">
          <div className="row d-flex rounded-4 justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 rounded col-xl-11 ">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div
                className=" rounded-3 card  "
                style={{
                  backgroundColor: "rgb(248 248 248 / 90%)",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              >
                <div className="row justify-content-center rounded ">
                  <div className="col-md-12 mb-md-4 rounded col-sm-11 col-lg-8 col-xl-8 d-flex flex-column justify-content-center order-2 order-lg-1">
                    <p className="text-muted fw-bold mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form
                      className="mx-1 mx-md-4 "
                      id="loginform"
                      onSubmit={handlesubmit}
                    >
                      <div className="row">
                        <div className="col-6 d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                          <div className="w-100 ">
                            <label
                              htmlFor="validationCustom01"
                              className="mb-1 ms-2"
                            >
                              <i className=" fas fa-user me-2" />
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="validationCustom01"
                              placeholder="Enter your first name"
                              required=""
                              name="fname"
                              onChange={(e) => {
                                setNewUser({
                                  ...newUser,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                            <div>
                              {errors.fname && (
                                <span className="text-danger">
                                  {errors.fname}
                                </span>
                              )}
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                        <div className="col-6 d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                          <div className="w-100 ">
                            <label
                              htmlFor="validationCustom01"
                              className="mb-1 ms-2"
                            >
                              <i className="fas fa-user me-2" />
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="validationCustom01"
                              placeholder="Enter your Last name"
                              required=""
                              name="lname"
                              onChange={(e) => {
                                setNewUser({
                                  ...newUser,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                            <div>
                              {errors.lname && (
                                <span className="text-danger">
                                  {errors.lname}
                                </span>
                              )}
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                          <div className="w-100 ">
                            <label
                              htmlFor="validationCustom01"
                              className="mb-1 ms-2"
                            >
                              <i className="fas fa-envelope me-2" />
                              Email
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="email"
                              placeholder="Enter your Email account"
                              required=""
                              name="email"
                              onChange={(e) => {
                                setNewUser({
                                  ...newUser,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                            <div>
                              {errors.email && (
                                <span className="text-danger">
                                  {errors.email}
                                </span>
                              )}
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                        <div className="col-6 d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                          <div className="w-100 ">
                            <label
                              htmlFor="validationCustom01"
                              className="mb-1 ms-2"
                            >
                              <i className="fas fa-phone me-2" />
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="form-control "
                              id="phonenumber"
                              placeholder="Enter your phone number"
                              required=""
                              name="phoneNumber"
                              onChange={(e) => {
                                setNewUser({
                                  ...newUser,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                            <div>
                              {errors.phoneNumber && (
                                <span className="text-danger">
                                  {errors.phoneNumber}
                                </span>
                              )}
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6 d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                          <div className="w-100 ">
                            <label
                              htmlFor="validationCustom01"
                              className="mb-1 ms-2"
                            >
                              <i className="fas fa-lock me-2" />
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control "
                              id="password"
                              placeholder="Enter your Password"
                              required=""
                              name="password"
                              onChange={(e) => {
                                setNewUser({
                                  ...newUser,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                            <div>
                              {errors.password && (
                                <span className="text-danger">
                                  {errors.password}
                                </span>
                              )}
                            </div>
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                        <div className="col-6 d-flex flex-row align-items-center mb-4">
                          {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> */}

                          <div className="w-100 ">
                            <label
                              htmlFor="validationCustom01"
                              className="mb-1 ms-2"
                            >
                              <i className="fas fa-lock me-2" />
                              Re-Enter Password
                            </label>
                            <input
                              type="password"
                              className="form-control  "
                              id="password"
                              placeholder="Re-Enter your Password"
                              required=""
                              name="re_password"
                              onChange={(e) => {
                                setNewUser({
                                  ...newUser,
                                  [e.target.name]: e.target.value,
                                });
                              }}
                            />
                            <div>
                              {errors.re_password && (
                                <span className="text-danger">
                                  {errors.re_password}
                                </span>
                              )}
                            </div>
                            <div className="valid-feedback">Looks good!</div>
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

                      <div className="form-check d-flex flex-wrap">
                        <div>
                          <input
                            className="form-check-input me-4"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3"
                            required
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
                                <u>Terms of Use</u>
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
                                      You agree to use our website for
                                      legitimate purposes and not for any
                                      illegal or unauthorized purpose, including
                                      without limitation, in violation of any
                                      intellectual property or privacy law. By
                                      agreeing to the Terms, you represent and
                                      warrant that you are at least the age of
                                      majority in your state or province of
                                      residence and are legally capable of
                                      entering into a binding contract.
                                      <br />
                                      <br />
                                      You agree to not use our website to
                                      conduct any activity that would constitute
                                      a civil or criminal offence or violate any
                                      law. You agree not to attempt to interfere
                                      with our website’s network or security
                                      features or to gain unauthorized access to
                                      our systems.
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
                        <div>
                          {" "}
                          <Link to="/login">All ready have an account ?</Link>
                        </div>
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
                  <div className="col-md-12 col-sm-11 col-sm-11 col-lg-4 col-xl-4 d-flex justify-content-center order-1 order-lg-2">
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
  );
};
