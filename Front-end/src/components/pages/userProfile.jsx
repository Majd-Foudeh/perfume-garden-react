import React, { useState } from "react";
import "../../style/userProfile.css";
import { Link, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { OrderHistory } from "../userProfile/orderHistory";
import { UserProducts } from "../userProfile/userProducts";
import { UserInfo } from "../userProfile/userInfo";
import WishListItemCard from "../userProfile/WishListItemCard";

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
              <Tab eventKey="home" title="Orders History">
                <OrderHistory />
              </Tab>
              <Tab eventKey="longer-tab" title="My Wish List">
                <WishListItemCard />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
