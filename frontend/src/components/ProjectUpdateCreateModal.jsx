import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import { request } from "../utils/axios-util";
import Select from "react-select";
import { useQuery } from "react-query";

Modal.setAppElement("#root");

const fetchAvailableUsers = () => {
  return request({ url: `/users/`, method: "GET" });
};

const ProjectUpdateCreateModal = ({ show, onClose, project, updated }) => {
  const ownerId = localStorage.getItem("user"); // this is going to be the ownerId
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [availableUsers, setAvailableUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const { isLoading, data } = useQuery("listAvailableUsers", () =>
    fetchAvailableUsers()
  );
  const navigate = useNavigate();

  useEffect(() => {
    let users = data?.data;
    // do some checking here to ensure data exist
    if (users) {
      if (project && project.users) {
        return setAvailableUsers(filterSelectableUsers(users));
      }
      // mutate data if you need to
      setAvailableUsers(users);
    }
  }, [data, project]);

  //handling project and loading values if project is not null
  useEffect(() => {
    // do some checking here to ensure data exist
    if (project && project.users) {
      setSelectedUsers(createEmailObjectList(project.users));
      setProjectName(project.name);
      setProjectDescription(project.description);
    }
  }, [project]);

  const createEmailObjectList = (listOfEmail) => {
    const userList = [];
    listOfEmail.forEach((e) => userList.push({ email: e }));
    return userList;
  };
  const extractEmailsFromObject = (listOfEmailObjects) => {
    const userEmails = [];
    listOfEmailObjects.forEach((e) => userEmails.push(e.email));
    return userEmails;
  };

  const filterSelectableUsers = (userList) => {
    return userList.filter((e) => !project.users.includes(e.email));
  };

  const handleOnSubmitForm = async (e) => {
    e.preventDefault();
    if (projectName === "" || projectDescription === "") {
      return alert("Please fill out the fields in a correct way!");
    }
    const data = {
      name: projectName,
      description: projectDescription,
      ownerId: ownerId,
      users: extractEmailsFromObject(selectedUsers),
    };
    if (project) {
      updateProject(data);
    } else {
      createProject(data);
    }
  };

  const updateProject = async (data) => {
    await request({
      url: `/projects/${project._id}`,
      method: "PUT",
      data: data,
    }).then(() => {
      onClose();
      updated();
    });
  };

  const createProject = async (data) => {
    await request({ url: `/projects/`, method: "POST", data: data }).then(
      (res) => {
        const project = res.data;
        navigate(`/project/${project._id}/tasks`);
      }
    );
  };

  const resetFields = () => {
    //reseting fields
    //back to project values if project is not null, otherwise to empty string
    if (project) {
      setSelectedUsers(createEmailObjectList(project.users));
      setProjectName(project.name);
      setProjectDescription(project.description);
    } else {
      setProjectName("");
      setProjectDescription("");
      setSelectedUsers([]);
    }
  };

  const handleOnChange = (e) => {
    setSelectedUsers(e);
    if (project) {
      filterSelectableUsers(availableUsers);
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
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
            {!project && (
              <h1 className="text-2xl font-bold sm:text-3xl reverse">
                {" "}
                Create New Project{" "}
              </h1>
            )}
            {project && (
              <h1 className="text-2xl font-bold sm:text-3xl reverse">
                {" "}
                Update Project{" "}
              </h1>
            )}
          </div>
          <div className={"close-btn-ctn"}>
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
              defaultValue={selectedUsers}
              onChange={(e) => handleOnChange(e)}
              getOptionLabel={(option) => `${option["email"]}`}
              getOptionValue={(option) => `${option["email"]}`}
            />
            <pre>{JSON.stringify(selectedUsers)}</pre>
          </div>

          {!project && (
            <button
              onClick={handleOnSubmitForm}
              type="submit"
              className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              Create Project
            </button>
          )}

          {project && (
            <button
              onClick={handleOnSubmitForm}
              type="submit"
              className="block w-full  p-3 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              Update Project
            </button>
          )}
        </form>
      </div>
    </Modal>
  );
};

export default ProjectUpdateCreateModal;
