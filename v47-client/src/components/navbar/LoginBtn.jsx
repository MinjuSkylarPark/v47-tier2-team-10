import React from "react";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import { IoPersonCircle } from "react-icons/io5";


const LoginBtn = () => {
  return (
    <div className="flex space-x-2">
      {/* Previous btn design*/}
      {/* I had to seperate Login/signup button for users- Skylar */}
      {/* <button type="button" className="text-white border-2 border-transparent bg-navGreen font-medium rounded-xl sm:text-md p-3 transition duration-300 ease-in-out transform  hover:border-black hover:border-2 hover:bg-navWhite hover:text-black">Login/Signup</button> */}
 
      <button
        type="button"
        className=" "
      >
        <Login/>
      </button>

      <button
        type="button"
        className=" "
      >
        <Signup/>
        .
      </button>
      {/* if logined this will be shown. need to add conditinal rendering */}

      {/* <div className="flex items-center">
        <IoPersonCircle className=" text-green-800 text-4xl" />
        <p className="text-white m-1 text-xl">JIYOUNG</p>
      </div> */}
    </div>
  );
};

export default LoginBtn;
