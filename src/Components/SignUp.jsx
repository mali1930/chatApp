import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const responds = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(responds.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", responds.user.uid), {
              uid: responds.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", responds.user.uid), {});
            nav("/application")
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="flex h-screen justify-center px-2   items-center">
      <div className="bg-white max-w-md w-[100%] px-4 py-5 ">
        <div>
          <h1 className="text-3xl text-center mb-6">Chat sign up</h1>
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
              type="text"
              placeholder="Full Name"
              required
              className="border-b-2 border-indigo-300 px-2 py-2 mb-12"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border-b-2 border-indigo-300 px-2 py-2 mb-12"
            />
            <input
              type="password"
              required
              placeholder="Password"
              className="border-b-2 border-indigo-300 px-2 py-2 mb-6"
            />
            <input
              type="file"
              id="file"
              required
              className=" px-2 hidden  py-2 mb-4"
            />
            <label
              htmlFor="file"
              className="flex cursor-pointer items-center gap-3"
            >
              <img
                src="https://th.bing.com/th/id/R.11003d4facdcd6e60a3d620cef12dd62?rik=V1HI1cvJ0GSEXw&pid=ImgRaw&r=0"
                className="w-[12%] mb-4 "
              />
              <h1>Select an Image</h1>
            </label>
            <button className="bg-blue-500 py-3 mb-4 cursor-pointer text-white ">
              Sign up
            </button>
          </div>
          {err && <h1>Something went wrong, please try again.</h1>}
        </form>
        <h1 className="text-center mb-3 text-md">
          You already have an Account?{" "}
          <Link to="/signin" className="text-blue-600">
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
