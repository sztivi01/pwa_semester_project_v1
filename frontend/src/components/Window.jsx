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
      <div className="max-w-screen-xl px-4sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl reverse">
              Edit Task
            </h1>
          </div>
          <div className="text-right">
            <button onClick={onClose} className={"close-btn"}>
              X
            </button>
          </div>
        </div>
      </div>

      <form className="max-w-md mx-auto mt-8 space-y-2">
        <h1 style={{ flex: "1 90%", fontWeight: "bold" }}>{item.title}</h1>
        <input
          className="p-3 w-full text-sm border border-indigo-600 rounded-lg relative"
          type="title"
          placeholder="Task Title"
          value={titlelNew}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={handleOnSubmitTitle}
          type="submit"
          className="block w-full  p-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        >
          Edit Task Title
        </button>

        <div>
          <p>{item.taskDescription}</p>
          <input
            className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
            type="description"
            placeholder="Task Description"
            value={descriptionNew}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleOnSubmitDescription}
            type="submit"
            className="block w-full  p-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          >
            Edit Task Description
          </button>
          <h2 className="font-bold mt-2">Status:</h2>
          <p>
            {currentStatus.icon}-{currentStatus.status}
          </p>
          <div className="text-right">
            <button
              onClick={() => handleOnClickDeleteTask(item._id)}
              className="mb-5"
            >
              <FaTrashAlt className="text-2xl text-green-400 hover:text-black" />
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Window;
