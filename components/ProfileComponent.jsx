import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

function ProfileComponent() {
    const user = useSelector((state)=>state.auth.user)
  return (
    <div class="w-full max-w-sm bg-white border mb-3  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
          <div class="flex flex-col  px-4 pt-4 items-center pb-10">
              <div className='border rounded-md border-gray-200 p-3 w-full items-center justify-center flex '>
                  
        <img
          class="w-24 h-24 mb-3 rounded-md shadow-lg"
          src={`http://localhost:5000/assets/${user.picturePath}`}
          alt="Profile Image"
          />
          </div>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
       
        <div class="flex mt-4 md:mt-6">
          <Link
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Profile
          </Link>
          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
          >
          Edit
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent