import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <>
      <section className="flex items-center h-full p-5 text-dark">
        <div className="container d-flex flex-column justify-content-center align-items-center my-5">
          <div className="max-w-md text-center">
            <h2 className="mb-4 display-1">404</h2>
            <p className="lead">Sorry, we couldn't find this page.</p>
            <p className="my-4">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to={"/"}
              className="btn btn-warning px-4 py-2 rounded"
              role="button"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
