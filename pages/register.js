import Link from 'next/link'
import Image from "next/image";
import { useState, useEffect } from "react";
  import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
  import { Icon } from "react-icons-kit";
  import { eyeOff } from "react-icons-kit/feather/eyeOff";
  import { eye } from "react-icons-kit/feather/eye";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Dropzone from '../components/DropZone';

const images = [
  "/photo2.jpg",
  "/potrait.jpg",
  "/photo5.jpg",
  "/man.jpg",
  "/photo6.jpg",
];
function registerPage() {
const CarouselSlide = ({ children }) => (
  <div style={{ position: "relative", height: "650px" }}>{children}</div>
);
  const router = useRouter();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [profilePicture, setProfilePicture] = useState('');

  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [confirmType, setConfirmType] = useState("password");
  const [confirmIcon, setConfirmIcon] = useState(eyeOff);
   useEffect(() => {
     if (isError) {
       toast.error(message);
     }
     if (isSuccess || user) {
       router.push("/");
     }
     dispatch(reset());
   }, [isError, isSuccess, user, message, dispatch]);

  const handleToggle = (field) => {
    if (field === "password") {
      setType(type === "password" ? "text" : "password");
      setIcon(type === "password" ? eye : eyeOff);
    } else if (field === "confirmPassword") {
      setConfirmType(confirmType === "password" ? "text" : "password");
      setConfirmIcon(confirmType === "password" ? eye : eyeOff);
    }
  };
 const validatePassword = (password) => {
   const errors = [];

   if (!password) {
     errors.push("Password is Required...");
   }
   if (password.length < 8) {
     errors.push("Password must be at least 8 characters long");
   }
   if (!/(?=.*[A-Z])/.test(password)) {
     errors.push("Password must contain at least one uppercase letter");
   }
   if (!/(?=.*[a-z])/.test(password)) {
     errors.push("Password must contain at least one lowercase letter");
   }
   if (!/(?=.*\d)/.test(password)) {
     errors.push("Password must contain at least one number");
   }
   if (!/(?=.*[!@#$%^&-_=+{}()?*])/.test(password)) {
     errors.push("Password must contain at least one special character");
   }

   return errors;
 };
 const validateInput = (field, value) => {
   if (field === "name" && value.trim() === "") {
     setNameError("Name field cannot be empty");
   } else if (field === "name") {
     const nameregex = /^[a-zA-Z_ ]{3,25}$/;
     setNameError(
       !nameregex.test(value.trim())
         ? "Name must be 5 - 20 Characters and can contain_ "
         : ""
     );
   } else if (field === "email") {
     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
     setEmailError(
       emailRegex.test(value.trim()) &&
         value.trim().toLowerCase().includes("@spantechnologyservices.com")
         ? ""
         : "Please enter a valid email address"
     );
   } else if (field === "password") {
     const errors = validatePassword(value);
     setPasswordError(errors);
   } else if (field === "confirm password") {
     setConfirmPasswordError(
       value === password ? "" : "Passwords do not match"
     );
   }
  };

const onDrop = (acceptedFiles) => {
  setProfilePicture(acceptedFiles[0]);
};





const handleSubmit = (e) => {
  e.preventDefault();
  validateInput("password", password);
  validateInput("confirm password", confirmPassword);

  const Errors =
    nameError ||
    emailError ||
    (passwordError && passwordError.length > 0) ||
    confirmPasswordError ||
    isError;

  if (!Errors) {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("picture", profilePicture);
    console.log(formData);
    dispatch(register(formData));
  }
};


  return (
    <div>
      <div className=" min-h-screen sm:h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
        <div className="mx-auto  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
          <div className="flex justify-center px-6 py-12 ">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex ">
              <div className="w-full bg-white dark:bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  showStatus={false}
                  dynamicHeight={true}
                  showThumbs={false}
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

              <div className="w-full lg:w-7/12 bg-white dark:bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 font-bold dark:text-black">
                  Create{" "}
                  <span className="text-transparent  text-3xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 bg-clip-text">
                    <Link href="/">One Stop</Link>
                  </span>{" "}
                  Account!
                </h3>
                <form>
                  <div className="mb-2">
                    <div className="block text-gray-700 font-bold mb-2">
                      Profile Picture <span className="text-red-600">*</span>
                    </div>
                    <Dropzone
                      accept=".jpg, .jpeg, .png"
                      multiple={false}
                      onDrop={onDrop}
                    
                    >
                      <p>
                        Drag 'n' drop a profile picture here, or click to select
                        a file
                      </p>
                    </Dropzone>
                  </div>
                  <div className="mb-2">
                    <div className="block text-gray-700 font-bold mb-1">
                      Username <span className="text-red-600">*</span>
                    </div>
                    <input
                      autoComplete="off"
                      maxLength={25}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      id="name"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500">{nameError}</span>
                  </div>
                  <div className="mb-2">
                    <div className="block text-gray-700 font-bold mb-2">
                      E-mail <span className="text-red-600">*</span>
                    </div>
                    <input
                      maxLength={50}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span className="text-red-500">{emailError}</span>
                  </div>

                  <div className="mb-2 relative">
                    <div className="block text-gray-700 font-bold mb-2">
                      Password <span className="text-red-600">*</span>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type={type}
                        id="password"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                      />
                      <span
                        className="absolute top-0 right-0 h-full flex items-center pr-2 cursor-pointer"
                        onClick={() => handleToggle("password")}
                      >
                        <Icon icon={icon} size={15} />
                      </span>
                    </div>

                    <span className="text-red-500">{passwordError}</span>
                  </div>
                  <div className="mb-2">
                    <div
                      htmlFor="confirm password"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Confirm Password <span className="text-red-600">*</span>
                    </div>
                    <input
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type={confirmType}
                      id="confirm password"
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    <span
                      className="flex justify-end items-center"
                      onClick={() => handleToggle("confirmPassword")}
                    >
                      <Icon
                        className="absolute mb-10 mr-2"
                        icon={confirmIcon}
                        size={15}
                      />
                    </span>
                    <span className="text-red-500">{confirmPasswordError}</span>
                  </div>

                  <button
                    onClick={(e) => handleSubmit(e)}
                    type="click"
                    className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Register
                  </button>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link
                      href="/login"
                      className="text-xs text-gray-500 uppercase"
                    >
                      Have and Account Already ? Sign In !
                    </Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default registerPage;