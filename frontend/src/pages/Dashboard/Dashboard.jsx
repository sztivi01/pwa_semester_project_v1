import React from "react";
import ProjectContainer from "../../components/ProjectContainer";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function DashboardHome() {

  return (
    /*<div classNameName="dashboard">
      
    </div>*/
    <section>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">Hi Username!</h2>

            <Link
              to="/specproject"
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              <FaPlus className="w-5 h-5" />

              <span className="text-sm font-medium"> New Project </span>
            </Link>
          </div>
          <div>
            <p className="text-xl mb-4 ml-1">Your Projects</p>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 bg-slate-100 p-7 rounded-xl">
              <ProjectContainer/>
              <ProjectContainer />
              <ProjectContainer />
              <ProjectContainer />
              <ProjectContainer />
              <ProjectContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
