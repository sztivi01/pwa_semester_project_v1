import React from "react";
import loginImage from "../assets/background.jpg";

export default function Login(){
    return (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImage} alt="/" />

            <div className="flex justify-center items-center h-full" > 
                <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2>BRAND.</h2>
                    <div>
                        <label>Username</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password'/>
                    </div>
                    <button>Login</button>
                    <p><input type="checkbox" />Remember Me</p>
                    <p>Not a member? Sign Up here!</p>
                </form>
            </div>
        </div>
    )
}