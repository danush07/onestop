import React, { useState, useEffect } from "react";
import * as cookie from "cookie";
import axios from "axios";
import Link from "next/link";
import Header from "../../components/Header";
import moment from "moment";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/BreadCrumb";
import Image from "next/image";
const usersProfile = ({ id }) => {
//   const userData = useSelector((state) => state.auth.user);
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
      <BreadCrumb page="profile" />
      <div className="min-h-screen flex flex-col items-center pt-12">
        <div className="max-w-md w-full p-6 text-center  bg-white rounded shadow">
          <div className="text-3xl font-semibold mb-4 text-center">Profile</div>
          <div className="mb-2 items-center justify-center flex">
            <Image
              src={`http://localhost:5000/assets/${user.picturePath}`}
              alt="Profile Image"
              className="rounded  object-cover w-36 h-36 "
              width={640}
              height={640}
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
    </>
  );
};

export default usersProfile;

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}
