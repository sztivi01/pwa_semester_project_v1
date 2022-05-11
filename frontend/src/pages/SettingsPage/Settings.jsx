/*import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../../utils/axios-util";

const fetchUser = () => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request ({url:'/users/' + localStorage.getItem('user')})
}
export const UserData = () => {
    const { isLoading, data} = useQuery('userEmailPassword', fetchUser);
    if(isLoading) {        
        return <h2>Loading...</h2>
    }

    return (
        <>
        <h2>User info:</h2>
        {data?.data.map((users) => {
            return <div key={users.email}>{users.email}</div>
        })}
        </>
    )
}
export default UserData;*/


import React from "react";
import avatarImg from "../../assets/avatar.jpg";
import TextFieldAvatar from "../../components/TextFieldAvatar";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//import FetchUser from "../../components/FetchUser";


export default function Settings(props) {
    return(
     <div className="flex w-full h-screen">
         <div className="flex items-center justify-center w-[50%] h-full">
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
         <div className="flex flex-col items-center justify-center w-[50%] h-full">
             <div className="flex items-center justify-center w-full">
              <div className="flex w-full h-full">
                <TextFieldAvatar
                    label="Email"
                    type={"text"}
                    icon={<MdEmail className="ml-1 mr-2 mt-1" />}
                />
                </div>
                <div className="flex items-center justify-center mr-16">
                    <button
                        type="submit"
                        className="ml-16 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Edit
                    </button>
                    <button
                        type="submit"
                        className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Save
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
              <div className="flex w-full h-full">
                <TextFieldAvatar
                    label="password"
                    type={"password"}
                    icon={<MdEmail className="ml-1 mr-2 mt-1" />}
                />
                </div>
                <div className="flex items-center justify-center mr-16">
                    <button
                        type="submit"
                        className="ml-16 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Edit
                    </button>
                    <button
                        type="submit"
                        className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Save
                    </button>
                </div>
            </div>
         </div>
     </div>
    );
 }
