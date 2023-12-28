import React, { useState, useEffect } from "react";
import * as cookie from "cookie";
import axios from "axios";
import Link from "next/link";
import Header from "../../components/Header";;
import moment from "moment";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Image from "next/image";
const Profile = () => {
    const userData = useSelector(
      (state) => state.auth.user
  );
  // console.log(userData)
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
    // console.log('oisdnvdsnv',profileImage)
  const openPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
  };



  return (
    <>
      <Header />
      <BreadCrumb page="profile" />
      <div className="min-h-screen flex flex-col items-center pt-12">
        <div className="max-w-md w-full p-6 text-center  bg-white rounded shadow">
          <div className="text-3xl font-semibold mb-4 text-center">Profile</div>
          <div className="mb-2 items-center justify-center flex">
            <img
              src={`http://localhost:5000/assets/${userData?.picturePath}`}
              alt="Profile Image"
              className="rounded  object-cover w-36 h-36 "
            />
          </div>
          <div className="flex">
            <div>
              <button className="flex bg-gray-200 p-2 rounded">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="mb-2">
            <div>{userData?.name}</div>
          </div>
          <div className="mb-2">
            <div className="font-semibold mb-2">Email:</div>
            <div>{userData?.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

