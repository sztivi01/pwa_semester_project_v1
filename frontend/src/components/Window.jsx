import React, { useState } from "react";
import Modal from "react-modal";
import { request } from "../utils/axios-util";
import { FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

Modal.setAppElement("#root");

const Window = ({ show, onClose, item, currentStatus }) => {
  const [titlelNew, setTitle] = useState([]);
  const [descriptionNew, setDescription] = useState([]);

  const handleOnSubmitTitle = async (e) => {
    e.preventDefault();
    if (titlelNew != null) {
      item.title = titlelNew;
    }
    request({ url: `tasks/${item._id}`, method: "PUT", data: item }).then(
      () => {
        alert("task updated succesfully");
        setTitle("");
      }
    );
  };

  const handleOnSubmitDescription = async (e) => {
    e.preventDefault();
    if (descriptionNew != null) {
      item.taskDescription = descriptionNew;
    }
    request({ url: `tasks/${item._id}`, method: "PUT", data: item }).then(
      () => {
        alert("task updated succesfully");
        setDescription("");
      }
    );
  };

  function handleOnClickDeleteTask(taskId) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      request({ url: `/tasks/${taskId}`, method: "DELETE" })
        .then(() => {
          swal("Success!", "Task was deleted.", "success", {
            buttons: false,
          });
        })
        .then(() => {
          window.setTimeout(function () {
            window.location.reload();
          }, 1000);
        });
    }
  }

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className={"close-btn-ctn"}>
        <h1 style={{ flex: "1 90%", fontWeight: "bold" }}>{item.title}</h1>
        <button onClick={onClose} className={"close-btn"}>
          X
        </button>
      </div>

      <input
        className="h-[50px] w-96 border border-indigo-600 rounded-lg relative"
        type="title"
        placeholder="title"
        value={titlelNew}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleOnSubmitTitle}
        type="submit"
        className="w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white"
      >
        Save
      </button>

      <div>
        <h2 id="description" style={{ fontWeight: "bold" }}>
          Task description:
        </h2>
        <p>{item.taskDescription}</p>
        <input
          className="h-[50px] w-96 border border-indigo-600 rounded-lg relative"
          type="description"
          placeholder="description"
          value={descriptionNew}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={handleOnSubmitDescription}
          type="submit"
          className="w-[150px] border rounded-lg w-full py-3 bg-indigo-600 hover:bg-indigo-500 relative text-white"
        >
          Save
        </button>
        <h2 style={{ fontWeight: "bold" }}>Status:</h2>
        <p>
          {currentStatus.icon}-{currentStatus.status}
        </p>
        <button
          onClick={() => handleOnClickDeleteTask(item._id)}
          className="mb-5"
        >
          <FaTrashAlt className="mr-2 text-2xl text-green-400 hover:text-black" />
        </button>
      </div>
      <div></div>
    </Modal>
  );
};

export default Window;
