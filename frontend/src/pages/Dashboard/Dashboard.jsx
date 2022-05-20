import ProjectContainer from "../../components/ProjectContainer";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { request } from "../../utils/axios-util";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ProjectUpdateCreateModal from "../../components/ProjectUpdateCreateModal";

export default function DashboardHome() {
  const fetchUser = (userId) => {
    return request({ url: "/users/" + localStorage.getItem("user") });
  };

  const userObject = JSON.parse(localStorage.getItem("userObject"));

  const { data } = useQuery([userObject], (userId) => fetchUser(userId));

  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center place-items-center">
          <div className="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Hi {data?.data.first_name} !
            </h2>
            <button onClick={onOpen}>
              <Link
                to=""
                className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              >
                <FaPlus className="w-5 h-5" />

                <span className="text-sm font-medium ml-4"> New Project </span>
              </Link>
            </button>
            <ProjectUpdateCreateModal onClose={onClose} show={show} />
          </div>
          <div className="place-content-center">
            <p className="text-xl mb-4 ml-1">Your Projects</p>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3  bg-slate-100 p-7 rounded-xl">
              <ProjectContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
