import React, { useState, use } from "react";
import { Typewriter } from "react-simple-typewriter";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = use(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      password.length < 6
    ) {
      toast.error(
        "Password must have at least 6 characters, including uppercase and lowercase letters!",
        { duration: 2000 }
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, {
          displayName: name,
          photoURL: photoURL || null,
        }).then(() => {
          Swal.fire({
            title: "Signup successful!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        });
      })
      .catch((err) => {
        toast.error(err.message, { duration: 2000 });
      });
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Signed up with Google!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="hero max-h-screen my-10 md:my-20">
      <Toaster position="top-right" />
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl activeNav pb-6">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={["Register now!"]}
            />
          </h1>
          <p className="mb-6 max-w-2xl mx-auto text-gray-600">
            Join our community and start building better habits today. Track
            your progress, stay motivated, and achieve your goals one step at a
            time.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignup} className="fieldset">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input w-full"
                required
              />
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input w-full"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input w-full pr-10"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500 hover:text-primary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              <button type="submit" className="btn text-white bg-common mt-4">
                Register
              </button>
            </form>

            <button
              onClick={handleGoogleSignup}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Sign up with Google
            </button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-secondary font-semibold hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
