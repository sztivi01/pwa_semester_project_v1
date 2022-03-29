import React from "react";
import loginImage from "../assets/background.jpg";
import {FaUserAlt, FaLock} from 'react-icons/fa';

export default function Login(){
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImage} alt="/" />

            <div className="flex justify-center items-center h-full" > 
                <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2 className='text-3xl font-bold text-center py-5 mb-5'>BRAND.</h2>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaUserAlt className='ml-1 mr-2 mt-1'/>Username</label>
                        <input className='border rounded-lg relative bg-gray-100 p-2' type="text" />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaLock className='ml-1 mr-2 mt-1'/>Password</label>
                        <input className='border rounded-lg relative bg-gray-100 p-2' type="password"/>
                    </div>
                    <button className='border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Login</button>
                    <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
                    <button className='underline underline-offset-2 relative mt-8 w-full'>Not a member? Sign Up here!</button>
                    

                </form>
            </div>
        </div>
    )
}