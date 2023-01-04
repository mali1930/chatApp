import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = () => {
  const nav = useNavigate();
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/application");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="flex h-screen justify-center px-2   items-center">
      <div className="bg-white max-w-md w-[100%] px-4 py-5 ">
        <div>
          <h1 className="text-3xl text-center mb-6">Chat Login</h1>
        </div>
        <div className="flex justify-center item-center mb-2">
          <img
            className="w-[30%]"
            src="https://th.bing.com/th/id/R.1547740a9e10181da361d3158a49e9f4?rik=U0hlrkGLJWgLlA&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt="img"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col px-4 max-w-full w-[100%] ">
            <input
              type="email"
              placeholder="Email"
              required
              className="border-b-2 border-indigo-300 px-2 py-2 mb-12"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="border-b-2 border-indigo-300 px-2 py-2 mb-8"
            />
            <button className="bg-blue-500 py-3 mb-4 cursor-pointer text-white ">
              Sign in
            </button>
            {err && <h1>Something went wrong, please try again.</h1>}
          </div>
        </form>
        <h1 className="text-center mb-3 text-md">
          You don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default SignIn;
