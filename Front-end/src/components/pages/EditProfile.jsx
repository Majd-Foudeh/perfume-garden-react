import React, { useContext, useState } from "react";
import "../../style/EditProfile.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

export const EditProfile = () => {
  const [errors, setErrors] = useState({});

  const [editUser, setEditUser] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState(null);
  const { user, setUser, userRefresh } = useContext(UserContext);

  const validateForm = () => {
    const errors = {};

    // Perform validation checks
    if (!editUser.fname) {
      errors.fname = "First name is required";
    }
    if (!editUser.lname) {
      errors.lname = "Last name is required";
    }

    if (!editUser.phoneNumber) {
      errors.phoneNumber = "phone number is required";
    } else if (!/^07\d{8}$/.test(editUser.phoneNumber)) {
      errors.phoneNumber = "Must be like this 07xxxxxxxx";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
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
    } else {
      setErrors(errors);
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
                                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&psig=AOvVaw1tWJHGtzp46IddsBCu1_ph&ust=1687713706711000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOi0hdK13P8CFQAAAAAdAAAAABAE"
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
                        value={user.first_Name}
                      />
                      {errors.fname && (
                        <span className="text-danger">{errors.fname}</span>
                      )}
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
                      {errors.lname && (
                        <span className="text-danger">{errors.lname}</span>
                      )}
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
                    {errors.phoneNumber && (
                      <span className="text-danger">{errors.phoneNumber}</span>
                    )}
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
