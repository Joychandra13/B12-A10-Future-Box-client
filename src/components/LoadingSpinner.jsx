import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingSpinner = () => {
    
  return (
    <div style={{ width: 300, height: 300 }}>
      <DotLottieReact
        src="https://lottie.host/b74d7b36-9368-472c-ab68-0789e49fc5a1/o3kd2uZRH0.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LoadingSpinner;
