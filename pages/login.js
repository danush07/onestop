import React from 'react'
import Image from "next/image";
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from "react-toastify";
import { Icon } from "react-icons-kit";
import { login, reset } from "../features/auth/authSlice";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
  import { Carousel } from "react-responsive-carousel";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const images = [
  "/photo2.jpg",
  "/potrait.jpg",
  "/photo5.jpg",
  "/man.jpg",
  "/photo6.jpg",
];

function loginPage() {
  const dispatch = useDispatch()
  const router = useRouter()
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  const { email, password } = formData;
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState('');
  const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
  const CarouselSlide = ({ children }) => (
    <div style={{ position: "relative", height: "600px" }}>{children}</div>
  );
    const { user, isError, isSuccess, message } = useSelector(
      (state) => state.auth
    );
    useEffect(() => {
      if (isError) {
        toast.error(message);
      }
      if (isSuccess || user) {
        router.push("/");
      }
      dispatch(reset());
    }, [isError, user, message, dispatch, isSuccess]);

    const handleToggle = () => {
      if (type === "password") {
        setIcon(eye);
        setType("text");
      } else {
        setIcon(eyeOff);
        setType("password");
      }
    };

    const validatePassword = (password) => {
      const errors = [];

      if (!password) {
        errors.push("Password is Required...");
      }
      return errors;
    };

    const validateInput = (field, value) => {
       if (field === "email" && value.trim() === "") {
        setEmailError("Email is Required");
      } else if (field === "email") {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setEmailError(
          emailRegex.test(value.trim())
            ? ""
            : "Please enter a valid email address"
        );
      } else if (field === "password") {
        const errors = validatePassword(value);
        setPasswordError(errors);
      } else {
        setPasswordError("");
      }
    };
  const handleSubmit = (e) => {
     e.preventDefault();
     validateInput("email", email);
     validateInput("password", password);

     if (!emailError ) {
       const userData = {
         email: email,
         password: password,
       };
       console.log(userData)
       dispatch(login(userData));
     }
  }

  return (
    <div className="">
      <div
        style={{ height: "100%" }}
        className=" py-12  min-h-screen sm:h-screen bg-gradient-to-r from-red-200 via-red-300 to-yellow-200"
      >
        <div className="flex  bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-3xl ">
          <div className="hidden lg:block  lg:w-1/2 bg-cover">
            <div className="image-slide">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                dynamicHeight={true}
                showThumbs={false}
                showStatus={false}
                stopOnHover={true}
              >
                {images.map((image, index) => (
                  <CarouselSlide key={index}>
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      loading="eager"
                    />
                  </CarouselSlide>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <div className="text-xl text-gray-600 text-center">
             Welcome Back To{" "}
              <span className="text-transparent font-extrabold cursor-pointer  text-2xl bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient bg-clip-text">
                <Link href="/">One Stop</Link>
              </span>{" "}
              !
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase"
              >
                login using credentials
              </a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                value={email}
                placeholder="Your Email Address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={() => validateInput("email", email)}
                onFocus={() => setEmailError("")}
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type={type}
                  id="password"
                  maxLength={30}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                    validateInput("password", e.target.value);
                  }}
                  onBlur={() => validateInput("password", password)}
                  onFocus={() => setPasswordError("")}
                />
                <span
                  className="flex items-center absolute top-0 right-0 h-full mr-2 cursor-pointer"
                  onClick={handleToggle}
                >
                  <Icon icon={icon} size={15} />
                </span>
              </div>

              {passwordError ? (
                passwordError.map((error, index) => (
                  <span key={index} className="text-red-500 block">
                    {error}
                  </span>
                ))
              ) : (
                <span className="text-red-500">{passwordError}</span>
              )}

              <a href="#" className="text-xs text-gray-500">
                Forget Password?
              </a>
            </div>
            <div className="mt-8">
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              >
                Login
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link
                href="/register"
                className="text-xs text-gray-500 uppercase"
              >
                or sign up
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;