import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import swal from "sweetalert";
import Moment from "react-moment";
import { FaTrashAlt } from "react-icons/fa";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const fetchProjectNames = () => {
  return request({
    url: `projects/all/${localStorage.getItem("user")}/${localStorage.getItem(
      "email"
    )}`,
  });
};

function handleOnClickDelete(projectId) {
  request({ url: `/projects/${projectId}`, method: "DELETE" }).then(() => {
    swal("Success!", "Project was deleted.", "success", {
      buttons: false,
      timer: 2000,
    }).then(() => {
      window.location.href = "/dashboard";
    });
  });
}

export default function ProjectContainer() {
  const { isLoading, data } = useQuery("projectNames", fetchProjectNames);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {data?.data.map((project) => (
        <div key={project._id}>
          <div className="relative block p-4 border overflow-hidden border-gray-200 shadow-sm rounded-lg focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200 bg-white">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div className="grid-cols-3">
              <div className="my-5">
                <h6 className="mt-2 mb-3 font-bold">{project.name}</h6>

                <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  {project.description}
                </p>
                <dl className="flex mt-6">
                  <div className="flex flex-col-reverse">
                    <dd className="text-xs text-gray-500">
                      <Moment format="DD/MM/YYYY">{project.date}</Moment>
                    </dd>
                    <dt className="text-xs font-medium text-gray-600">
                      Created
                    </dt>
                  </div>
                </dl>
              </div>
              <button
                onClick={() => handleOnClickDelete(project._id)}
                className="mb-5"
              >
                <FaTrashAlt className="mr-2 text-2xl text-green-400 hover:text-black" />
              </button>
              <Link
                to={`/project/${project._id}/tasks`}
                className="inline-flex absolute bottom-8 right-4 py-1 text-sm font-light text-indigo-600 transition-colors bg-white border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:opacity-75"
              >
                <BsFillArrowRightSquareFill className="w-5 h-5 ml-2" />
                <span className="text-sm font-bold mr-1 ml-2">Go</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
