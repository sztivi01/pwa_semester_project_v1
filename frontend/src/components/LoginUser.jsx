import React, { useState } from "react";
import { Link } from 'react-router-dom';
import loginImage from "../assets/background.jpg";
import {MdEmail} from 'react-icons/md';
import {FaLock} from 'react-icons/fa';
import swal from 'sweetalert';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function loginUser(credentials) {
    return fetch('https://www.mecallapi.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Loginn(){

    const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/dashboard";
      });
    } else {
      /*swal("Failed", response.message, "error");*/
      toast.error('Invalid email, please try again!', {
        position: "right",
        autoClose: 1,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
       /* toast.error('Invalid password, please try again!', {
            position: "right",
            autoClose: 1,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });*/
      
    }
  }
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImage} alt="/" />
            <div className="flex justify-center items-center h-full" > 
                <form noValidate onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2 className='text-3xl font-bold text-center py-5 mb-5'>Tasker™</h2>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><MdEmail className='ml-1 mr-2 mt-1'/>Email</label>
                        <input id="email" name="email" label="Email Address" onChange={e => setUserName(e.target.value)}  className='border border-indigo-600 rounded-lg relative  p-2' type="text" />
                        <ToastContainer/>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='flex item-center'><FaLock className='ml-1 mr-2 mt-1'/>Password</label>
                        <input id="password" name="password" label="Password" type="password" onChange={e => setPassword(e.target.value)} className='border border-indigo-600 rounded-lg relative  p-2'/>
                       
                    </div>
                    <button type="submit" className='border rounded-lg w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Login</button>
                    <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
                    
                    <Link to='/registration'>
                    <button className='underline underline-offset-2 relative mt-8 w-full text-indigo-800'>Not a member? Sign Up here!</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}