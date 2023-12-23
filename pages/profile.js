import React, { useState, useEffect } from "react";
import * as cookie from "cookie";
import axios from "axios";
import Link from "next/link";
import Header from "../components/Header";;
import moment from "moment";
import { useSelector } from "react-redux";
const Profile = ({ user }) => {
    const userData = useSelector(
      (state) => state.auth.user
  );
  // console.log('redux data',userData)
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
      <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-12">
        <div className="max-w-md w-full p-6 text-center  bg-white rounded shadow">
          <div className="text-3xl font-semibold mb-4 text-center">Profile</div>
          <div className="mb-2 items-center justify-center flex">
            <img
              src={`http://localhost:5000/assets/${user.picturePath}`}
              alt="Profile Image"
              className="rounded w-36 h-36 "
            />
          </div>
          <div className="mb-2">
            <div>{user.name}</div>
          </div>
          <div className="mb-2">
            <div className="font-semibold mb-2">Email:</div>
            <div>{user.email}</div>
          </div>
          
        </div>
      </div>
      {/* {showPasswordModal && <PasswordModal onClose={closePasswordModal} />} */}
    </>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = cookie.parse(req.headers.cookie || "");
  const user = JSON.parse(cookies.user || "{}");
  const token = user.token;
// console.log('tojen',token)
  try {
    const response = await axios.get("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = response.data;

    return {
      props: { user: userData },
    };
  } catch (error) {
    console.log("Error fetching user data:", error);
    return { props: { user: {} } };
  }
}
