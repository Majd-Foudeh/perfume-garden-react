import React from 'react'
// import '../style/ThankYou.css'
import { Link } from 'react-router-dom'
export const ThankYou = () => {
  return (
    <>

      <>
        <div className=" d-flex justify-content-center align-items-center" style={{ height: "75vh" }}>
          <div className="col-md-6 col-lg-5 col-sm-8 col-10">
            <div className="border border-3 border-success" />
            <div className=" rounded-bottom  bg-white shadow p-5">
              <div className="mb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-success"
                  width={75}
                  height={75}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
              </div>
              <div className="text-center">
                <h1>Thank You,<br />Your Order Completed !</h1>
                <br />
                <p>
                  We've send the recipe to your inbox. Lorem ipsum dolor sit,lorem lorem{" "}
                </p>
                <div className='d-flex justify-content-around'>
                  <Link to="/"> <button className="btn btn-outline-success">Back Home</button></Link>
                  {/* <button className="btn btn-outline-success">Back Home</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </>

    </>

  )
}
