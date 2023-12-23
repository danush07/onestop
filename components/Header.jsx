import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import LogoutModal from "./LogoutModal"; 

function Header() {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const openLogoutModal = () => {
    setShowLogout(true);
  };

  const closeLogoutModal = () => {
    setShowLogout(false);
  };

  return (
    <header className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-50 ">
      <div className="text-black-600 flex font-bold cursor-pointer">
        <Link href="/" className="flex">
          One Stop
        </Link>
      </div>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
        {user ? (
          <>
            <Link href="/profile">
              <div className="relative inline-flex items-center justify-center w-10 h-10 mr-6 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600 hover:bg-gray-300 transition duration-500 ease select-none">
                <span className="font-medium text-xl text-gray-600 dark:text-gray-300">
                  <img
                    src={`http://localhost:5000/assets/${user.picturePath}`}
                    className="w-10 h-10 rounded"
                    alt="Profile"
                  ></img>
                </span>
              </div>
            </Link>
            <li className="relative mr-2 flex flex-wrap items-center gap-2 border bg-gray-200 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
              <button
                className=" font-semibold"
                onClick={() => openLogoutModal()}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="block">
              {" "}
              {/* Show on small screens only */}
              <Link href="/login" className="text-center">
                <button className=" bg-slate-50 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                  <FaSignInAlt className="inline-flex mb-1 mr-1 items-baseline" />
                  Login
                </button>
              </Link>
            </li>
            <li className="block ">
              {" "}
              {/* Show on small screens only */}
              <Link href="/register">
                <button className=" bg-slate-50 text-gray-700 rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                  <FaUser className="inline-flex font-semibold items-baseline mr-1 mb-1" />
                  Register
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
      {showLogout && <LogoutModal onClose={closeLogoutModal} />}
    </header>
  );
}

export default Header;
