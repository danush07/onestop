import React, { useEffect } from "react";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import AddFriends from "../components/AddFriends";
import ProfileComponent from "../components/ProfileComponent";
import UploadPost from "../components/UploadPost";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
import Router from "next/router";

function FeedPage() {
  const user = useSelector((state) => state.auth.user)
  useEffect(() => {
    if (!user) {
      Router.push('/register')
    }
  },[user])
  return (
    <div>
      {user &&
      <><div>
          <Header />
          <BreadCrumb page="feed" />
        </div><div className="grid md:grid-cols-3 lg:grid-cols-3 select-none">
            <div className="ml-24 mt-2  col-span-2">
              <UploadPost />
              <Posts />
            </div>
            <div className=" justify-self-end mt-2  mr-24">
              <ProfileComponent />
              <AddFriends />
            </div>
          </div></>
      }
    </div>
  );
}

export default FeedPage;
