import avatarImg from "../assets/avatar.jpg";
import "react-toastify/dist/ReactToastify.css";
import TextField from "./TextField";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useEffect} from "react";
import { useState } from "react";



export default function Avatar() {
  const fetchData = () => {
    return fetch("https://stark-forest-32910.herokuapp.com/api/users/")
          .then((response) => response.json())
          .then((data) => console.log(data));}
    
          useEffect(() => {
            fetchData();
            }, []);

  /*const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');*/

  return (
    <div className="flex w-full h-screen bg-zinc-900/90">
      <div className="w-full h-full">
        <form
          noValidate
          className="items-center justify-center w-[500px] h-full bg-white p-8"
        >
        <div 
        className="bg-clip-content mx-16 flex items-center justify-center rounded-full h-[300px] w-[300px]">
          <img
            className="rounded-full w-[300px]  "
            src={avatarImg}
            alt="/"
         />
         </div>
         <div className="ml-1 mr-2 mt-16 max-h-[250px] max-w-full flex items-center justify-center">
            <div  className="mr-1">
              firstname
            </div>
            <div className="mr-1">
              lastname
            </div>
          </div>
          <div
          className="ml-1 mr-2 mt-5 max-h-[250px] max-w-full flex items-center justify-center">
            email
          </div>
          <button
            type="submit"
            className="border rounded-lg w-full py-3 mt-16 mb-16 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Edit
          </button>
          <TextField
            label="Email"
            type={"text"}
            icon={<MdEmail className="ml-1 mr-2 mt-1" />}
          />
          <TextField
            label="Password"
            type={"password"}
            icon={<FaLock className="ml-1 mr-2 mt-1" />}
          />
          <button
            type="submit"
            className="border rounded-lg w-full py-3 mt-16 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Save
          </button>
        </form>
      </div>
      <div className="w-full h-full">
        <form
          noValidate
          className="items-center justify-center w-[500px] h-full bg-white p-8"
        >
        <div 
        className="bg-clip-content mx-16 flex items-center justify-center rounded-full h-[300px] w-[300px]">
          <img
            className="rounded-full w-[300px]  "
            src={avatarImg}
            alt="/"
         />
         </div>
         <div className="ml-1 mr-2 mt-16 max-h-[250px] max-w-full flex items-center justify-center">
            <div  className="mr-1">
              firstname
            </div>
            <div className="mr-1">
              lastname
            </div>
          </div>
          <div
          className="ml-1 mr-2 mt-5 max-h-[250px] max-w-full flex items-center justify-center">
            email
          </div>
          <button
            type="submit"
            className="border rounded-lg w-full py-3 mt-16 mb-16 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Edit
          </button>
          <TextField
            label="Email"
            type={"text"}
            icon={<MdEmail className="ml-1 mr-2 mt-1" />}
          />
          <TextField
            label="Password"
            type={"password"}
            icon={<FaLock className="ml-1 mr-2 mt-1" />}
          />
          <button
            type="submit"
            className="border rounded-lg w-full py-3 mt-16 bg-indigo-600 hover:bg-indigo-500 relative text-white">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}