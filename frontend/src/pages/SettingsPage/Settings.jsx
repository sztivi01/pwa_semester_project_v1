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
        if (user) {
            console.log(user)
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
            <div className="pt-32 grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center place-items-center lg:mt-0">
                <div className="flex items-center justify-center w-[50%] h-full">
                    <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0" >
                        <div className="flex items-center justify-center">
                            <div className="">
                                <h2 className="mb-5 text-3xl font-bold sm:text-4xl"><p>{user.first_name}</p></h2>
                            </div>
                            <div className="ml-1">
                                <h2 className="mb-5 text-3xl font-bold sm:text-4xl"><p>{user.last_name}</p></h2>
                            </div>

                        </div>
                        <div className="flex items-center justify-center">
                            <h2 className="mb-5 text-3xl font-bold sm:text-4xl"><p>{user.email}</p></h2>
                        </div>
                        <div
                            className=" flex items-center justify-center">
                            <img
                                className="flex items-center justify-center rounded-full w-[300px]  "
                                src={avatarImg}
                                alt="/"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[100vw] h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:items-center place-items-center">
                        <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
                            <input
                                className="h-[50px] w-96 border border-indigo-600 rounded-lg relative"
                                type="email" placeholder="email"
                                value={emailNew} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={handleOnSubmitEmail}
                                type="submit"
                                className="w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="grid pt-2 grid-cols-1 lg:grid-cols-2 gap-y-4 lg:items-center place-items-center">
                        <div className="flex h-full">
                            <input
                                className="h-[50px] w-96 border border-indigo-600 rounded-lg relative  p-2"
                                type="password" placeholder="password"
                                value={passwordNew} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                onClick={handleOnSubmitPass}
                                type="submit"
                                className="w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default UserData;
