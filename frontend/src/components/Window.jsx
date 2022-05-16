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
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button onClick={onClose} className={"close-btn"}>X</button>
            </div>

            <div>
                <h2 id='description'>Description</h2>
                <p>{item.content}</p>
                <h2>Status</h2>
                <p>
                    {currentStatus.icon}
                </p>
            </div>
            <div>
            </div>
        </Modal>
    );
};

export default Window;