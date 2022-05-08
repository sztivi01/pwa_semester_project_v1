import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../assets/background.jpg";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "./TextField";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

async function registerUser(credentials) {
  return fetch("https://stark-forest-32910.herokuapp.com/api/users/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Registerr() {
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser({
      first_name,
      last_name,
      email,
      password,
    });
    if (res["error"] === null) {
      swal("Success", res.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        window.location.href = "/login";
      });
    } else {
      toast.error(res.message + ", please try again!", {
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
    <div className="relative w-full h-fit bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={loginImage}
        alt="/"
      />
      <ToastContainer />
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="max-w-[450px] w-full mx-auto my-20 bg-white p-8"
        >
          <h2 className="text-3xl font-bold text-center py-5 mb-5">Tasker™</h2>
          <TextField
            value={first_name}
            label="First Name"
            type={"text"}
            icon={<FaUserAlt className="ml-1 mr-2 mt-1" />}
            onChange={(value) => setFirstName(value)}
          />
          <TextField
            value={last_name}
            label="Last Name"
            type={"text"}
            icon={<FaUserAlt className="ml-1 mr-2 mt-1" />}
            onChange={(value) => setLastName(value)}
          />
          <TextField
            value={email}
            label="Email"
            type={"text"}
            icon={<MdEmail className="ml-1 mr-2 mt-1" />}
            onChange={(value) => setEmail(value)}
          />
          <TextField
            value={password}
            label="Password"
            type={"password"}
            icon={<FaLock className="ml-1 mr-2 mt-1" />}
            onChange={(value) => setPassword(value)}
          />
          <button
            type="submit"
            className="border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
          >
            Sign Up
          </button>
          <Link to="/login">
            <button className="underline underline-offset-2 relative mt-8 w-full text-indigo-800">
              Already a member? Login here!
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
