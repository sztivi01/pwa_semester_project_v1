import React from 'react';
import { useState } from 'react';
import { request } from '../../utils/axios-util';

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
            <div className="create">
                <form onSubmit={handleSubbmit}>
                    <label>{label} </label>
                    <input type={type} value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                    <input type={type} value={cardDescription} onChange={(e) => setCardDescription(e.target.value)} />
                    <button>{nameButton} </button>
                </form>

            </div>
        );

    }

  