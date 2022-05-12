import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/background.jpg";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import swal from "sweetalert";
import TextField from "./TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function loginUser(credentials) {
  return fetch("https://stark-forest-32910.herokuapp.com/api/users/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Loginn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({
      email,
      password,
    });
    if (res["error"] === null) {
      swal("Success", res.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", res["data"].token);
        localStorage.setItem("user", res["data"].userId);
        window.location.href = "/dashboard";
      });
    } else if (res["error"] !== null) {
      toast.error(res.error + ", please try again!", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImage}
        alt="/"
      />
      <ToastContainer />
      <div className="flex justify-center items-center h-full">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="max-w-[400px] w-full mx-auto bg-white p-8"
        >
          <h2 className="text-3xl font-bold text-center py-5 mb-5">Tasker™</h2>
          <TextField
            value={email}
            label="Email"
            type={"text"}
            icon={<MdEmail className="ml-1 mr-2 mt-1" />}
            onChange={(value) => setEmail(value)} //onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={password}
            label="Password"
            type={"password"}
            icon={<FaLock className="ml-1 mr-2 mt-1" />}
            onChange={(value) => setPassword(value)} //onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
          >
            Login
          </button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>

          <Link to="/registration">
            <button className="underline underline-offset-2 relative mt-8 w-full text-indigo-800">
              Not a member? Sign Up here!
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
