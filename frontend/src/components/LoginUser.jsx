import React from "react";
import { Link } from 'react-router-dom';
import loginImage from "../assets/background.jpg";
import {MdEmail} from 'react-icons/md';
import {FaLock} from 'react-icons/fa';



export default function LoginUser(){
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImage} alt="/" />
            <div className="flex justify-center items-center h-full" > 
                <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2 className='text-3xl font-bold text-center py-5 mb-5'>Tasker™</h2>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><MdEmail className='ml-1 mr-2 mt-1'/>Email</label>
                        <input className='border border-indigo-600 rounded-lg relative  p-2' type="text" />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaLock className='ml-1 mr-2 mt-1'/>Password</label>
                        <input className='border border-indigo-600 rounded-lg relative  p-2' type="password"/>
                    </div>
                    <button className='border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Login</button>
                    <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
                    
                    <Link to='/registration'>
                    <button className='underline underline-offset-2 relative mt-8 w-full text-indigo-800'>Not a member? Sign Up here!</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}