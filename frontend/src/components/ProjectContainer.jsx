import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import Moment from "react-moment";

const fetchProjectNames = () => {
  //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
  return request({ url: "/projects/" + localStorage.getItem("user") });
};

export default function ProjectContainer() {
  const { isLoading, data } = useQuery("projectNames", fetchProjectNames);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>

      {data?.data.map((project) => {
        return (
          <>
            <div key={project._id}>
              <Link
                to={`/project/${project._id}/tasks`}
                className="relative block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200 bg-white"
              >
                <div className="grid-cols-3">
                  <div className="my-5">
                    <h6 key={project.name} className="mt-2 mb-3 font-bold">
                      {project.name}
                    </h6>

                    <p key={project.description} className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                      {project.description}
                    </p>
                    <dl className="flex mt-6">
                      <div className="flex flex-col-reverse">
                        <dd key={project.date} className="text-xs text-gray-500"><Moment format="DD/MM/YYYY">{project.date}</Moment></dd>
                        <dt className="text-xs font-medium text-gray-600">
                          Created
                        </dt>
                      </div>
                    </dl>
                  </div>
                  <span className="absolute inset-x-0 bottom-3 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                </div>
              </Link>
            </div>
          </>
        );
      })}

    </>
  );
}