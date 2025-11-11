import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  return (
    <div className="hero max-h-screen my-10 md:my-20">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl activeNav pb-6">
            {" "}
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Welcome back!"]}
            />
          </h1>
          <p className="mb-6 max-w-2xl">
            Log in to continue tracking your habits, stay consistent, and reach
            your goals every day.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn text-white bg-common mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
