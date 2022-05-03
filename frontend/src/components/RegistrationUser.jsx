import React, { useState} from "react";
import { Link } from 'react-router-dom';
import loginImage from "../assets/background.jpg";
import {FaUserAlt, FaLock} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

async function registerUser(firstName,lastName,username,password) {
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: first_name,
        lastName: last_name,
        username: email,
        password: password
      } )
    })
      .then(data => data.json())
   }

export default function Register(){

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            let response = await fetch("https://www.mecallapi.com/api/login",{
                method: "POST",
                body: JSON.stringify({
                    firstName: first_name,
                    lastName: last_name,
                    username: email,
                    password: password
                }),
            });
            if (res.status === 200) {
                setfirstName("");
                setlastName("");
                setUserName("");
                setPassword("");
                swal("Success", response.message, "success", {
                    buttons: false,
                    timer: 2000,
                  })
            } else {
                 /*toast.error(error.message + ', please try again!', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });*/
            }
        

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
                    
                    <button className='border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign Up</button>
                    
                    <Link to='/login'>
                    <button className='underline underline-offset-2 relative mt-8 w-full text-indigo-800'>Already a member? Login here!</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}