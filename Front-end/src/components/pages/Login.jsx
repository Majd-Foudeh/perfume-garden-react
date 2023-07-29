import React, { useContext, useState } from "react";
import "../../components/SignUp/signUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";
export const Login = () => {
  const navigate = useNavigate();
  const { auth, setAuth, refresh } = useContext(AuthContext);
  const { user, setUser, userRefresh } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [serverDataErrors, setServerDataErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const cartCount = localStorage.getItem("cartCount");

  const validateForm = () => {
    const errors = {};

    // Perform validation checks

    if (!formData.email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Must be example@test.com";
    }
    if (!formData.password) {
      errors.password = "password is required";
    }
    return errors;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const userData = {
        user_email: formData.email,
        user_password: formData.password,
      };

      axios
        .post("http://localhost:3000/login", userData)
        .then((response) => {
          console.log("user login successfuly");
          console.log(response.data);
          if (response.data.error == "email not found") {
            setServerDataErrors({
              ...serverDataErrors,
              emailError: response.data.error,
            });
          } else if (response.data.error == "Invalid password") {
            setServerDataErrors({
              ...serverDataErrors,
              passwordError: response.data.error,
            });
          } else if (response.data.error == "this user not active") {
            setServerDataErrors({
              ...serverDataErrors,
              passwordError: response.data.error,
            });
          } else {
            localStorage.setItem("token", response.data.token);
            setAuth(true);
            userRefresh();
            refresh();
            if (cartCount > 0) {
              navigate("/cart");
              Swal.fire(
                "Great!",
                "Now you can continue to checkout",
                "success"
              );
            } else {
              navigate("/");
            }
          }
        })
        .catch((error) => {
          console.log("error in login the user");
          console.error(error);
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
          backgroundImage: `url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg")`,
        }}
      >
        <div className="container rounded-4 h-100 w-100  ">
          <div className="row d-flex rounded-4 justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 rounded col-xl-11 ">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Login Now
              </p>

              <div
                className=" rounded-3 card "
                style={{
                  backgroundColor: "rgb(248 248 248 / 90%)",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              >
                <div className="row justify-content-center rounded ">
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
                    <form
                      className="mx-1 mx-md-4 "
                      id="loginform"
                      onSubmit={handlesubmit}
                    >
                      <div className="row">
                        <div className="col-12 d-flex flex-row align-items-center mb-4">
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
                                setFormData({
                                  ...formData,
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
                      </div>
                      <div className="row">
                        <div className="col-12 d-flex flex-row align-items-center mb-4">
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
                                setFormData({
                                  ...formData,
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
                      </div>
                      <Link to="/signup">
                        <p>
                          Dont have an account?{" "}
                          <span className="border-bottom border-2 border-secondary">
                            SIGN UP NOW
                          </span>
                        </p>
                      </Link>
                      {serverDataErrors.emailError && (
                        <div class="alert alert-danger" role="alert">
                          {serverDataErrors.emailError}
                        </div>
                      )}
                      {serverDataErrors.passwordError && (
                        <div class="alert alert-danger" role="alert">
                          {serverDataErrors.passwordError}
                        </div>
                      )}

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
                  <div className="col-md-12 col-sm-11 col-sm-11 col-lg-4 col-xl-4 d-flex justify-content-center order-1 order-lg-1">
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
  );
};
