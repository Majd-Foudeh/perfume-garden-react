import React, { useContext, useState } from "react";
import "../../style/EditProfile.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { FaUser } from "react-icons/fa";

export const EditProfile = () => {
  const [editUser, setEditUser] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState(null);
  const { user, setUser, userRefresh } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("fname", editUser.fname);
    formData.append("lname", editUser.lname);
    formData.append("phoneNumber", editUser.phoneNumber);
    try {
      axios
        .put(`http://localhost:3000/updateUser/${user._id}`, formData)
        .then(() => {
          userRefresh();
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-xl px-4 mt-4">
        {/* Account page navigation*/}
        {/* <nav className="nav nav-borders">
    <a
      className="nav-link active ms-0"
      href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details"
      target="__blank"
    >
      Profile
    </a>
    <a
      className="nav-link"
      href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page"
      target="__blank"
    >
      Billing
    </a>
    <a
      className="nav-link"
      href="https://www.bootdey.com/snippets/view/bs5-profile-security-page"
      target="__blank"
    >
      Security
    </a>
    <a
      className="nav-link"
      href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"
      target="__blank"
    >
      Notifications
    </a>
  </nav>
  <hr className="mt-0 mb-4" /> */}
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/userprofile">My Profile</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Profile
            </li>
          </ol>
        </nav>

        <div className="row mt-5 justify-content-center">
          <div className="col-xl-9">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-center">
                    <div className="col-xl-4 ">
                      {/* Profile picture card*/}
                      <div className="card mb-4 mb-xl-0 shadow-none border-0">
                        {/* <div className="card-header">Profile Picture</div> */}
                        <div className="card-body text-center  ">
                          {user.imageUrl ? (
                            <img
                              className="img-account-profile rounded-circle mb-2"
                              src={`http://localhost:3000/${user.imageUrl}`}
                              alt=""
                            />
                          ) : (
                            <>
                              <img
                                className="img-account-profile rounded-circle mb-2"
                                src="data:image/png;base64,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"
                                alt=""
                              />
                            </>
                          )}

                          {/* Profile picture help block
                           <div className="small font-italic text-muted mb-4">
                           JPG or PNG no larger than 5 MB
                            </div> */}
                          {/* Profile picture upload button
                               <button className="btn btn-outline-dark" type="button">
                              Upload new image
                             </button> */}
                          <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>
                              {" "}
                              JPG or PNG no larger than 5 MB
                            </Form.Label>
                            <Form.Control
                              type="file"
                              onChange={(e) => {
                                setFile(e.target.files[0]);
                                console.log(e.target.files[0]);
                              }}
                            />
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Form Group (username)
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      defaultValue="username"
                    />
                  </div> */}
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        name="fname"
                        onChange={handleChange}
                        defaultValue={user.first_Name}
                      />
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        onChange={handleChange}
                        name="lname"
                        id="inputLastName"
                        type="text"
                        defaultValue={user.last_Name}
                      />
                    </div>
                  </div>

                  {/* Form Group (phone number)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      name="phoneNumber"
                      onChange={handleChange}
                      type="tel"
                      placeholder={user.user_phoneNumber}
                    />
                  </div>

                  {/* Save changes button*/}
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-warning" type="submit">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
