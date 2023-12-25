import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
function Posts() {
  return (
    <div className="border border-gray-200 shadow-sm rounded ">
      <div>THis is the Caption</div>
      <div className="border border-gray-200">
        <Image alt="Post"></Image>
        <div className="flex gap-4 p-2">
          <FaHeart className="text-red-500" />
          <LuMessagesSquare />
        </div>
      </div>
    </div>
  );
}

export default Posts