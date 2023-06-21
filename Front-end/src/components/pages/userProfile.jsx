import React, { useState } from "react";
import "../../style/userProfile.css";
import { Link, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { OrderHistory } from "../userProfile/orderHistory";
import { UserProducts } from "../userProfile/userProducts";
import { UserInfo } from "../userProfile/userInfo";

export const UserProfile = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("home");

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <>
      <div className="container">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb my-4">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              My Profile
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-12">
            <Tabs
              defaultActiveKey="profile"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="profile" title="Profile">
                <UserInfo />{" "}
              </Tab>
              <Tab eventKey="home" title="Home">
                <OrderHistory />
              </Tab>
              <Tab eventKey="longer-tab" title="My products">
                <UserProducts />
              </Tab>
              <Tab eventKey="add product" title="add product">
                Tab content for Contact
              </Tab>
              <Tab eventKey="contact" title="Contact">
                Tab content for Contact
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <form className="forms-sample">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control p-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted text-success">
              <span className="fa fa-info mt-1" />
              &nbsp; We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control p-input"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea">Example textarea</label>
            <textarea
              className="form-control p-input"
              id="exampleTextarea"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleInputFile"
              aria-describedby="fileHelp"
            />
            <small id="fileHelp" className="form-text text-muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </small>
          </div>
          <fieldset className="form-group">
            <legend className="mb-4 mt-5">Radio buttons</legend>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  defaultValue="option1"
                  defaultChecked=""
                />
                Option one is this and that—be sure to include why it's great
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios2"
                  defaultValue="option2"
                />
                Option two can be something else and selecting it will deselect
                option one
              </label>
            </div>
            <div className="form-check disabled">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios3"
                  defaultValue="option3"
                  disabled=""
                />
                Option three is disabled
              </label>
            </div>
          </fieldset>
          <div className="form-check col-12">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" />
              Check me out
            </label>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <table className="table">
  <thead>
    <tr className="">
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td scope="row">2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td scope="row">3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
    </>
  );
};
