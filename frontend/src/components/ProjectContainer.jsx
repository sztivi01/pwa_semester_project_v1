import React from "react";
import { Link } from "react-router-dom";
//import { useMutation } from "react-query";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import Moment from "react-moment";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
//import axios from "axios";

const fetchProjectNames = () => {
  return request({ url: "/projects/" + localStorage.getItem("user") });
};

const deleteProject = () => {
  return axios.delete(
    "https://stark-forest-32910.herokuapp.com/api/projects/:id"
  );
};

export default function ProjectContainer() {
  const { isLoading, data } = useQuery("projectNames", fetchProjectNames);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data?.data.map((projects) => (
        <div key={projects._id} className="projects">
          <Link
            to="#"
            className="relative block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200 bg-white"
          >
            <div className="grid-cols-3">
              <div className="my-5">
                <h6 className="mt-2 mb-3 font-bold">{projects.name}</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {projects.description}
                </p>
                <dl className="flex mt-6">
                  <div className="flex flex-col-reverse">
                    <dd className="text-xs text-gray-500">
                      <Moment format="DD/MM/YYYY">{projects.date}</Moment>
                    </dd>
                    <dt className="text-xs font-medium text-gray-600">
                      Created
                    </dt>
                  </div>
                </dl>
              </div>
              <div onClick={() => deleteProject(projects._id)} className="m-2">
                <FaTrashAlt className="mb-5 text-2xl text-green-400 hover:text-black" />
              </div>
              <span className="absolute inset-x-0 bottom-3 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
