import React from 'react';
import { FaEdit, FaSignOutAlt,  } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export const UserInfo = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="osahan-account-page-left  bg-white h-100">
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
                   
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item " role="button">
                <Link to='/editprofile' className="nav-link fs-6">
                  <FaEdit className="w-5 h-5 me-3" />
                  EDIT MY PROFILE
                </Link>
              </li>
              <li className="nav-item " role="button">
                <a className="nav-link fs-6" onClick={handleLogOut}>
                  <FaSignOutAlt className="text-danger w-5 h-5 me-3" />
                  LOGOUT
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};