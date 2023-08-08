import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../../style/contact.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pbxp48q",
        "template_vesec6q",
        form.current,
        "uZ8j4egpOOTqxqB1c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        className="contact2 "
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/44/34/9d/44349d57c83e39bb40641985e3d8584e.jpg)",
        }}
        id="contact"
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="contact-box p-5">
                      <h4 className="title">Contact Us</h4>
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="row ">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="name"
                                name="userName"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="email"
                                name="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="phone"
                                name="phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="location"
                                name="location"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="message"
                                name="message"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button type="submit" className="contactsubmit">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image col-11 "
                    style={{
                      height: "54vh",
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-3 col-lg-2 ">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-map-marker fs-4 bg-warning p-3 rounded-5" />
            </div>
            <div className="text">
              <p className="d-flex flex-column mt-2">
                <b>Address:</b> Zarqa Jordan
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-2">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-phone fs-3 bg-warning p-3 rounded-5" />
            </div>
            <div className="text">
              <p className="d-flex flex-column mt-2">
                <b>Phone:</b> <a href="tel://1234567920">+962 782535119</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-2">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-paper-plane fs-3 bg-warning p-3 rounded-5" />
            </div>
            <div className="text">
              <p className="d-flex flex-column mt-2">
                <b>Email:</b>{" "}
                <a href="mailto:majdfoude@gmail.com">majdfoude@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-2">
          <div className="dbox w-100 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
              <span className="fa fa-globe fs-3 bg-warning p-3 rounded-5" />
            </div>
            <div className="text">
              <p className="d-flex flex-column mt-2">
                <b>Website:</b> <a href="#">yoursite.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
