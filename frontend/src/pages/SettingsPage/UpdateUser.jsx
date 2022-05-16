import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../../utils/axios-util";
import React, { useState } from 'react';

const fetchUser = (userId) => {
    return request({ url: '/users/' + localStorage.getItem('user') })
}

const fname = localStorage.getItem('firstName');
const lname = localStorage.getItem('lastName');
const user = localStorage.getItem('user');
const email = localStorage.getItem('email')

export const UserData = () => {
    const { data } = useQuery([ email, fname, lname, user], (userId) => 
        fetchUser(userId)       
    );

    const [emailNew, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:4000/api/users/' + localStorage.setItem('user'), {
            method: "put",
            body: JSON.stringify({ emailNew }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
        }
    }
    return (
        <>
            <h1>{ email } </h1>
            <form action="">
                <input type="email" placeholder="email" 
                value={emailNew} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" 
                onClick={handleOnSubmit}>submit</button>
            </form>
  
        </>
    );

};

export default UserData;
