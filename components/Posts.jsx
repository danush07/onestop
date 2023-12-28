import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsAsync } from "../features/posts/postSlice";
import moment from "moment";
import { useRouter } from "next/navigation";
function Posts() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.feed.allPosts);
  console.log(posts);
  useEffect(() => {
    dispatch(getAllPostsAsync());
  }, [user]);

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };
  const handleUserClick = (id) => {
    router.push('/profile/' + id);
  }

  return (
    <div>
      {posts.map((post) => (
        <div
          key={post._id}
          className="border border-gray-200 mb-6 shadow-sm rounded"
        >
          <header className="flex p-4 justify-between items-center">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={`http://localhost:5000/assets/${post?.userPicturePath}`}
                alt="profile picture"
              />
              <div onClick={()=>handleUserClick(post.userId)} className="ml-3 text-lg">{post.name}</div>
            </div>
            <span className="text-xs text-gray-500">
              {moment(post.createdAt).format("LLL")}
            </span>
          </header>
          <div className="border border-gray-200">
            <div className="flex justify-center items-center">
              <Image
                src={`http://localhost:5000/assets/${post?.postPicturePath}`}
                alt="Post"
                width={320}
                height={320}
                className="object-cover"
                onDoubleClick={handleLikeClick}
              />
            </div>
            <div className="text-gray-900 p-3">
              <strong className="">{post.name}</strong> : {post.description}
            </div>
            <div className="flex gap-4 p-2 text-2xl">
              <div onClick={handleLikeClick}>
                {liked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="hover:text-red-500" />
                )}
              </div>
              <div>
                <LuMessagesSquare className=" hover:text-indigo-400" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
