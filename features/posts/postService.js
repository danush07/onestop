import axios from "axios";

const URL = "http://localhost:5000/api/users/post";
const createPost = async (postData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(URL, postData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const FETCH_URL = "http://localhost:5000/api/getposts"
const getAllPosts = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      };
      
    const response = await axios.get(FETCH_URL, config);
    return response.data;
  } catch (e) {
    throw e;
  }
};
const FETCH_USER_POST = "http://localhost:5000/api/user/:userId/posts";
const getUserPosts = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(FETCH_USER_POST, config);
    return response.data;
  } catch (e) {
    throw e;
  }
};

const postService = {
  createPost,
  getAllPosts,
  getUserPosts,
};

export default postService;