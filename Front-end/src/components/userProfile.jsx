import React from 'react'
import '../style/userProfile.css'
import { Link } from 'react-router-dom'


export const UserProfile = () => {
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
    
    <div className="col-md-3">
      
      <div className="osahan-account-page-left shadow-sm bg-white h-100">
        <div className="border-bottom p-4">
          <div className="osahan-user text-center">
            <div className="osahan-user-media">
              <img
                className="mb-3 rounded-pill shadow-sm mt-1"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gurdeep singh osahan"
              />
              <div className="osahan-user-media-body">
                <h6 className="mb-2">Gurdeep Singh</h6>
                <p className="mb-1">+962-782535119</p>
                <p>majdfoude@gmail.com</p>
                <p className="mb-0 text-black font-weight-bold">
                  <Link
                    className="text-primary mr-3 "
                    data-toggle="modal"
                    data-target="#edit-profile-modal"
                    to="/editprofile"
                  >
                    <i className="fa fa-edit " /> EDIT MY PROFILE
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul
          className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item ">
            <a
              className="nav-link fs-6"
              id="orders-tab"
              data-toggle="tab"
              href="#orders"
              role="tab"
              aria-controls="orders"
              aria-selected="false"
            >
              <i className="fa fa-cart-shopping fs-6  "  /> Orders
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-md-9">
      <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane  fade  active show"
            id="orders"
            role="tabpanel"
            aria-labelledby="orders-tab"
          >
            <h4 className="font-weight-bold mt-0 mb-4">Past Orders</h4>
            <div className="bg-white card mb-4 order-list shadow-sm">
              <div className="gold-members p-4">
                <a href="#"></a>
                <div className="media">
                  
                  <div className="media-body">
                    <h5 className="mb-2">
                      <a href="#" />
                      <a href="#" className="text-black">
                        Gus's World Famous Fried Chicken
                      </a>
                    </h5>
                    <a href="#">
                      <span className="float-end  text-info">
                        Delivered on Mon, Nov 12, 7:18 PM{" "}
                        <i className="icofont-check-circled text-success" />
                      </span>
                    </a>
                    <p className="text-gray mb-1">
                      <i className="icofont-location-arrow" /> 730 S Mendenhall
                      Rd, Memphis, TN 38117, USA
                    </p>
                    <p className="text-gray mb-3">
                      <i className="icofont-list" /> ORDER #25102589748{" "}
                      <i className="icofont-clock-time ml-2" /> Mon, Nov 12,
                      6:26 PM
                    </p>
                    <p className="text-dark">
                      Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in
                      Red Sauce x 1
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                    <div className="d-flex gap-1 order-2">
                      <a className="btn btn-sm btn-outline-dark" href="#">
                        <i className="icofont-headphone-alt" /> HELP
                      </a>
                      <a className="btn btn-sm btn-warning" href="#">
                        <i className="icofont-refresh" /> REORDER
                      </a>
                    </div>
                    <p className="mb-0 text-black text-primary pt-2 order-1">
                      <b className="text-black font-weight-bold">
                        {" "}
                        Total Paid:
                      </b>{" "}
                      $300
                    </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white card mb-4 order-list shadow-sm">
              <div className="gold-members p-4">
                <a href="#"></a>
                <div className="media">
                  
                  <div className="media-body">
                    <h5 className="mb-2">
                      <a href="#" />
                      <a href="#" className="text-black">
                        Gus's World Famous Fried Chicken
                      </a>
                    </h5>
                    <a href="#">
                      <span className="float-end text-info">
                        Delivered on Mon, Nov 12, 7:18 PM{" "}
                        <i className="icofont-check-circled text-success" />
                      </span>
                    </a>
                    <p className="text-gray mb-1">
                      <i className="icofont-location-arrow" /> 730 S Mendenhall
                      Rd, Memphis, TN 38117, USA
                    </p>
                    <p className="text-gray mb-3">
                      <i className="icofont-list" /> ORDER #25102589748{" "}
                      <i className="icofont-clock-time ml-2" /> Mon, Nov 12,
                      6:26 PM
                    </p>
                    <p className="text-dark">
                      Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in
                      Red Sauce x 1
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                    <div className="d-flex gap-1 order-2">
                      <a className="btn btn-sm btn-outline-dark" href="#">
                        <i className="icofont-headphone-alt" /> HELP
                      </a>
                      <a className="btn btn-sm btn-warning" href="#">
                        <i className="icofont-refresh" /> REORDER
                      </a>
                    </div>
                    <p className="mb-0 text-black text-primary pt-2 order-1">
                      <b className="text-black font-weight-bold">
                        {" "}
                        Total Paid:
                      </b>{" "}
                      $300
                    </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white card mb-4 order-list shadow-sm">
              <div className="gold-members p-4">
                <a href="#"></a>
                <div className="media">
                  
                  <div className="media-body">
                    <h5 className="mb-2">
                      <a href="#" />
                      <a href="#" className="text-black">
                        Gus's World Famous Fried Chicken
                      </a>
                    </h5>
                    <a href="#">
                      <span className="float-end text-info">
                        Delivered on Mon, Nov 12, 7:18 PM{" "}
                        <i className="icofont-check-circled text-success" />
                      </span>
                    </a>
                    <p className="text-gray mb-1">
                      <i className="icofont-location-arrow" /> 730 S Mendenhall
                      Rd, Memphis, TN 38117, USA
                    </p>
                    <p className="text-gray mb-3">
                      <i className="icofont-list" /> ORDER #25102589748{" "}
                      <i className="icofont-clock-time ml-2" /> Mon, Nov 12,
                      6:26 PM
                    </p>
                    <p className="text-dark">
                      Veg Masala Roll x 1, Veg Burger x 1, Veg Penne Pasta in
                      Red Sauce x 1
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                    <div className="d-flex gap-1 order-2">
                      <a className="btn btn-sm btn-outline-dark" href="#">
                        <i className="icofont-headphone-alt" /> HELP
                      </a>
                      <a className="btn btn-sm btn-warning" href="#">
                        <i className="icofont-refresh" /> REORDER
                      </a>
                    </div>
                    <p className="mb-0 text-black text-primary pt-2 order-1">
                      <b className="text-black font-weight-bold">
                        {" "}
                        Total Paid:
                      </b>{" "}
                      $300
                    </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</>

    )
}
