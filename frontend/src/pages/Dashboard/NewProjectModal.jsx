import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import { request } from "../../utils/axios-util";
import Select from "react-select";
import { useQuery } from "react-query";


Modal.setAppElement("#root");

const fetchAvailableUsers = () => {
    return request({ url: `/users/`, method: 'GET' });
}


const NewProjectModal = ({ show, onClose, project }) => {
  const ownerId = localStorage.getItem("user"); // this is going to be the ownerId
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [availableUsers, setAvailableUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);
  const { isLoading, data } = useQuery("listAvailableUsers", () =>
    fetchAvailableUsers()
  );
  const navigate = useNavigate();

  useEffect(() => {
    let users = data?.data;
    // do some checking here to ensure data exist
    if (users) {
      // mutate data if you need to
      setAvailableUsers(users);
    }
  }, [data]);

  //handling project and loading values if project is not null
  useEffect(() => {
    // do some checking here to ensure data exist
    if (project) {
      // mutate data if you need to
      setSelectedUsers(project.users);
      setProjectName(project.name);
      setProjectDescription(project.description);
    }
  }, [project]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if (projectName === "" || projectDescription === "") {
      return alert("Please fill out the fields in a correct way!");
    }
    const data = {
      name: projectName,
      description: projectDescription,
      ownerId: ownerId,
      users: selectedUsers,
    };
    request({ url: `/projects/`, method: "POST", data: data }).then((res) => {
      const project = res.data;
      navigate(`/project/${project._id}/tasks`);
      console.log(res);
    });
  };
  const resetFields = () => {
    //reseting fields
    //back to project values if project is not null, otherwise to empty string
    if (project) {
      setSelectedUsers(project.users);
      setProjectName(project.name);
      setProjectDescription(project.description);
      console.log(selectedUsers);
    } else {
      setProjectName("");
      setProjectDescription("");
      setSelectedUsers([]);
    }
  };
  const getEmailFromObject = (e) => {
    console.log(e);
    selectedUsers.push(e.email);
  };

  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl reverse">Create New Project</h1>
        </div>
        <div className="text-right">
          <button
            onClick={(event) => [onClose(), resetFields()]}
            className={"close-btn"}
          >
            X
          </button>
        </div>
        </div>
        <form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <input
          className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <div>
          <input
            className="p-3 mb-2 w-full text-sm border border-indigo-600 rounded-lg relative"
            type="text"
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>

        <div>
          <h1>Select Fruits</h1>

          <Select
            isClearable
            isSearchable
            isMulti
            name="user"
            options={availableUsers}
            onChange={(e) => getEmailFromObject(e)}
            getOptionLabel={(option) => `${option["email"]}`}
            getOptionValue={(option) => `${option["email"]}`}
          />
          <div>{selectedUsers}</div>
        </div>
        
        <button
          onClick={handleOnSubmitForm}
          type="submit"
          className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
        >
          Create Project
        </button>
        
        </form>
      </div>
    </Modal>
  );
};

export default NewProjectModal;
