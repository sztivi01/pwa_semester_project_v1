import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");


const Window = ({ show, onClose, item, currentStatus }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >

            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%",fontWeight: 'bold' }}>{item.title}</h1>
                <button onClick={onClose} className={"close-btn"}>X</button>
            </div>

            <div>
                <h2 id='description' style={{fontWeight: 'bold'}}>Task description:</h2>
                <p>{item.taskDescription}</p>
                <h2 style= {{fontWeight: 'bold'}}>Status:</h2>
                <p>
                    {currentStatus.icon}-{currentStatus.status}
                </p>
            </div>
            <div>
            </div>
        </Modal>
    );
};

export default Window;