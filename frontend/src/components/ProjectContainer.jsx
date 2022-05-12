import React from "react";
import { Link } from "react-router-dom";


export default function ProjectContainer(projectName) {
  
  return (
   
    <Link
      to="/"
      className="relative block p-4 border border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200 bg-white"
    >
      <div className="my-5">
        <h6 className="mt-2 mb-3 font-bold">Project Name</h6>

        <p className="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
          Project Description - Lorem ipsum dolor sit amet consectetur.
        </p>
        <dl className="flex mt-6">
          <div className="flex flex-col-reverse">
            <dd className="text-xs text-gray-500">The date from API</dd>
            <dt className="text-xs font-medium text-gray-600">Created</dt>
          </div>
        </dl>
      </div>
      <span className="absolute inset-x-0 bottom-3 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
    </Link>
  );
}
