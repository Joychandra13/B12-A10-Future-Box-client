import React from "react";
import { Link } from "react-router"; 
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AiOutlineArrowRight } from "react-icons/ai";


const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <div className="w-full max-w-5xl mx-auto"> 
        <DotLottieReact
          className="w-full h-auto"
          src="https://lottie.host/e37de9ec-109b-4caf-9c95-51a8753fc88e/bvAjkKTi5l.lottie"
          loop
          autoplay
        />
      </div>
      
      <Link 
        to="/" 
        className="flex items-center gap-1 "
      >
        <span className="text-base activeNav">Go Back Home</span><AiOutlineArrowRight />
      </Link>
    </div>
  );
};

export default Error;
