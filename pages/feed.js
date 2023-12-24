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
      <div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div>
          <UploadPost />
          <Posts />
        </div>
        <div className=" justify-self-end ">
          <ProfileComponent />
          <AddFriends />
        </div>
      </div>
    </>
  );
}

export default FeedPage;
