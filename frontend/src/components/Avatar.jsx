import React from "react";
import avatarImg from "../assets/avatar.jpg";
import TextFieldAvatar from "./TextFieldAvatar";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Layout(props) {
    return(
     <div className="flex w-full h-screen bg-zinc-900/90">
         <div className="flex items-center justify-center w-[50%] h-full bg-green-900">
         <div
          className="w-[500px] h-[full]"
        >
        <div className="mb-16 flex items-center justify-center">
            Firstname Lastname
        </div>
        <div 
        className="mb-16 flex items-center justify-center">
          <img
            className="mb-16 flex items-center justify-center rounded-full w-[300px]  "
            src={avatarImg}
            alt="/"
         />
         </div>   
         <div className="flex item-center justify-center w-[100%]">
         <button
            type="submit"
            className=" w-[150px] border rounded-lg py-3 bg-indigo-600 hover:bg-indigo-500 text-white">
            Edit
         </button>
         </div>
        </div>
         </div>
         <div className="flex items-center justify-center w-[50%] h-full bg-purple-900">
             <div className="items-center justify-center w-full">
                <TextFieldAvatar
                    placeholder= "email@address.com"
                    label="Email"
                    type={"text"}
                    icon={<MdEmail className="ml-1 mr-2 mt-1" />}
                />
                <TextFieldAvatar
                    placeholder= "password"
                    label="Password"
                    type={"password"}
                    icon={<FaLock className="ml-1 mr-2 mt-1" />}
                />
                <div>
                    <button
                        type="submit"
                        className="ml-16 w-[150px] border rounded-lg w-full py-3 mt-16 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Edit
                    </button>
                    <button
                        type="submit"
                        className="ml-16 w-[150px] border rounded-lg w-full py-3 mt-16 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Save
                    </button>
                </div>
            </div>
         </div>
     </div>
    );
 }
