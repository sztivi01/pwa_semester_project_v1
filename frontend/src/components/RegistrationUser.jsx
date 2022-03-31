import React from "react";
import loginImage from "../assets/background.jpg";
import {FaUserAlt, FaLock} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { AiFillPicture } from 'react-icons/ai';



export default function RegisterUser(){
    return (
        <div className='relative w-full h-fit bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImage} alt="/" />

            <div className="flex justify-center items-center h-full" > 
                <form className='max-w-[450px] w-full mx-auto my-20 bg-white p-8'>
                    <h2 className='text-3xl font-bold text-center py-5 mb-5'>Tasker™</h2>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaUserAlt className='ml-1 mr-2 mt-1'/>First Name</label>
                        <input className='border border-indigo-600 rounded-lg relative  p-2' type="text" />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaUserAlt className='ml-1 mr-2 mt-1'/>Last Name</label>
                        <input className='border border-indigo-600 rounded-lg relative  p-2' type="text" />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><MdEmail className='ml-1 mr-2 mt-1'/>Email</label>
                        <input className='border border-indigo-600 rounded-lg relative  p-2' type="text" />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaLock className='ml-1 mr-2 mt-1'/>Password</label>
                        <input className='border border-indigo-600 rounded-lg relative  p-2' type="password"/>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center' for="img"><AiFillPicture className='ml-1 mr-2 mt-1'/>Upload Avatar</label>  
                        <input className='border border-gray-400 rounded-lg relative  p-2 float-left' type="file" id="img" name="img" accept="image/*"/>
                            <div className="px-4 text-right sm:px-0">
                                <button className='border rounded-lg w-28 py-1.5 mt-5 bg-gray-600 hover:bg-indigo-500 relative text-white' type="submit">Upload</button>
                            </div>
                    </div>
                    <button className='border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign Up</button>
                    
                    
                    <button className='underline underline-offset-2 relative mt-8 w-full text-indigo-800'>Already a member? Login here!</button>
                    

                </form>
            </div>
        </div>
    )
}