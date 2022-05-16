import { useQuery } from "react-query";
import { request } from "../../utils/axios-util";
import React, { useState, useEffect } from 'react';
import avatarImg from "../../assets/avatar.jpg";

const fetchUser = (userId) => {
    return request({ url: '/users/' + localStorage.getItem('user') })
}

const userObject = JSON.parse(localStorage.getItem('userObject'))

export const UserData = () => {

    const { data } = useQuery([userObject], (userId) =>
        fetchUser(userId)
    );
    console.log(data)

    const [user, setUser] = useState({});
    const [emailNew, setEmail] = useState("");
    const [passwordNew, setPassword] = useState("");
    useEffect(() => {
        let user = data?.data
        console.log(user)
        // do some checking here to ensure data exist
        if (user) {
            console.log(user)
            // mutate data if you need to
            setUser(user)
        }
    }, [data])

    const handleOnSubmitEmail = async (e) => {
        e.preventDefault();
        if (emailNew != null) {
            userObject.email = emailNew
        }
        request({ url: '/users/' + localStorage.getItem('user'), method: "PUT", data: userObject }).then(() => {
            alert("E-mail updated succesfully");
            setEmail("");
        })
    }

    const handleOnSubmitPass = async (e) => {
        e.preventDefault();
        if (passwordNew != null) {
            userObject.password = passwordNew
        }
        request({ url: '/users/' + localStorage.getItem('user'), method: "PUT", data: userObject }).then(() => {
            alert("Password updated succesfully");
            setPassword("");
        })

    }

    return (
        <>
            <div className="flex w-full h-screen">
                <div className="flex items-center justify-center w-[50%] h-full">
                    <div
                        className="w-[500px] h-[full]"
                    >
                        <div className="flex items-center justify-center">
                            <div className="">
                                <p>{user.first_name}</p>
                            </div>
                            <div className="ml-1">
                                <p>{user.last_name}</p>
                            </div>

                        </div>
                        <div className="flex items-center justify-center">
                            <p>{user.email}</p>
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
                    <div className="flex items-center justify-center w-full mt-5">
                        <div className="flex w-full h-full">
                            <input
                                className="h-[50px] w-[500px] border border-indigo-600 rounded-lg relative  p-2"
                                type="email" placeholder="email"
                                value={emailNew} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center mr-16">
                            <button
                                onClick={handleOnSubmitEmail}
                                type="submit"
                                className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full mt-5">
                        <div className="flex w-full h-full">
                            <input
                                className="h-[50px] w-[500px] border border-indigo-600 rounded-lg relative  p-2"
                                type="password" placeholder="password"
                                value={passwordNew} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center mr-16">
                            <button
                                onClick={handleOnSubmitPass}
                                type="submit"
                                className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

    /*<div className="flex items-center justify-center w-full mt-5">
                <div className="flex w-full h-full">
                    <input
                        className="h-[50px] w-[500px] border border-indigo-600 rounded-lg relative  p-2"
                        type="password" placeholder="password"
                        value={passwordNew} onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleOnSubmitPass}
                        type="submit"
                        className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                        Save
                    </button>
                </div>
                <div className="flex items-center justify-center mr-16">
                    
                </div>
            </div>*/

    /*import React from "react";
    import avatarImg from "../../assets/avatar.jpg";
    import TextFieldAvatar from "../../components/TextFieldAvatar";
    import { FaLock } from "react-icons/fa";
    import { MdEmail } from "react-icons/md";
    
    
    const userObject = localStorage.getItem('userObject')
    
    
    
    export default function Settings(props) {
        
        return(
         <div className="flex w-full h-screen">
             <div className="flex items-center justify-center w-[50%] h-full">
             <div
              className="w-[500px] h-[full]"
            >
            <div className="flex items-center justify-center">
                  <div className="">
                     <p></p>
                  </div>
                <div className="ml-1">
                   <p></p>
                </div>
    
            </div>
                  <div className="flex items-center justify-center">
                    <p>{ user.email}</p>
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
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        defaultValue= "hello"
                        type={"text"}
                        icon={<MdEmail className="ml-1 mr-2 mt-1" />}
                    />
                    </div>
                    <div className="flex items-center justify-center mr-16">
                        <button
                            onClick={handleOnSubmitEmail}
                            type="submit"
                            className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                            Save
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full mt-5">
                  <div className="flex w-full h-full">
                    <TextFieldAvatar
                        onChange={(e) => setPassword(e.target.value)}
                        label="password"
                        type={"password"}
                        icon={<FaLock className="ml-1 mr-2 mt-1" />}
                    />
                    </div>
                    <div className="flex items-center justify-center mr-16">
                        <button
                            onClick={handleOnSubmitPass}
                            type="submit"
                            className="ml-5 w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                            Save
                        </button>
                    </div>
                </div>
             </div>
         </div>
        );*/

}
export default UserData;
