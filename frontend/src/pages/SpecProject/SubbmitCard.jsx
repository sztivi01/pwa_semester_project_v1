import React from 'react';
import { useState } from 'react';
import { request } from '../../utils/axios-util';
import { BsCheckLg } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

    export default function SubbmitCard({label,type,nameButton,status,projectId,buttonClicked}) {
        const [cardTitle, setCardTitle] = useState('');
        const [cardDescription, setCardDescription] = useState('');
        const handleSubbmit = (e) => {
            e.preventDefault();
            if (cardDescription === '' && cardTitle === '' ){
                return alert('Please fill in all fields')
            }
            const data = {title: cardTitle, projectId: projectId, status:status ,taskDescription:cardDescription, ownerId:localStorage.getItem('user')};
            request({url:`/tasks`,method:'POST',data:data})
            .then(() => {
            setCardTitle('')
            setCardDescription('')
            buttonClicked()
        })
        }
        
        // bind input field data :  binding
        return (
            <div className="create mb-7">
                <form onSubmit={handleSubbmit} className="content-center">
                    <label className="my-2"><FaPlus className="inline-flex m-2" />{label} </label>
                    <input className="p-2 mb-2 pr-12 text-sm border border-indigo-600 rounded-lg relative" placeholder="Task Title" type={type} value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                    <input className=" p-2 pr-12 text-sm border border-indigo-600 rounded-lg relative" placeholder="Task" type={type} value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} />
                    <button  className=" mx-3 px-3 pb-3 pt-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"><BsCheckLg className="mx-3" /></button>
                </form>

            </div>
        );

    }

  