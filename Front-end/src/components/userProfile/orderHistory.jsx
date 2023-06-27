import React from "react";

export const OrderHistory = () => {
  return (
    <>
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
    </>
  );
};
