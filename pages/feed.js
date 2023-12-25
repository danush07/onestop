import React from "react";
import Header from "../components/Header";
import BreadCrumb from "../components/BreadCrumb";
import AddFriends from "../components/AddFriends";
import ProfileComponent from "../components/ProfileComponent";
import UploadPost from "../components/UploadPost";
import Posts from "../components/Posts";


function FeedPage() {
  return (
    <>
      <div>
        <Header />
        <BreadCrumb page="feed" />
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-3">
        <div className="ml-24 mt-2 col-span-2">
          <UploadPost />
          <Posts />
        </div>
        <div className=" justify-self-end mt-2  mr-24">
          <ProfileComponent />
          <AddFriends />
        </div>
      </div>
    </>
  );
}

export default FeedPage;
