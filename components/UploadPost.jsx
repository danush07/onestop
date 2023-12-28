import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FaImage } from "react-icons/fa6";
import CreatePost from "./CreatePost";
import Image from 'next/image';
function UploadPost() {
  const [modalVisible, setModalVisible] = useState(false);
  const openCreateModal = () => {
    setModalVisible(true);
    // console.log(1124);
   
  };
  const closeCreateModal = () => {
    setModalVisible(false);
  };
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="flex p-2 gap-3 items-center bg-white border mb-3  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <img
          className=" w-11 h-10 object-cover rounded-full "
          src={`http://localhost:5000/assets/${user?.picturePath}`}
          alt="profile picture"
       />
      </div>

      <input
        onClick={() => openCreateModal()}
        autoComplete="off"
        type="text"
        placeholder="Create a Post "
        id="inputField"
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      {modalVisible && <CreatePost onClose={closeCreateModal} />}

      <div className="flex items-center " onClick={() => openCreateModal()}>
        <FaImage className="text-xl text-indigo-500" />
      </div>
    </div>
  );
}

export default UploadPost