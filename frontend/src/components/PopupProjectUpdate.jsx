import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "../pages/SpecProject/SpecProject.css";
import { BsCheckLg } from "react-icons/bs";
export default function PopupProjectUpdate(props) {
  const [setButtonPopup] = useState(false);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Edit Project</h1>
          </div>

          <form className="max-w-md mx-auto mt-8 mb-0 space-y-4">
            <div>
              <input
                className="p-2 mb-2 w-10/12 text-sm border border-indigo-600 rounded-lg relative"
                placeholder="Project Name" /*type={type} value={cardTitle} onChange={(e) => setCardTitle(e.target.value)}*/
              />

              <button
                type="submit"
                className="absolute  inline-flex right-4 mx-3 px-3 pb-3 pt-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              >
                <BsCheckLg className="mx-3" />
              </button>
            </div>

            <input
              className=" p-2 w-10/12 text-sm border border-indigo-600 rounded-lg relative"
              placeholder="Project Description" /*type={type} value={cardDescription} onChange={(e) => setCardDescription(e.target.value)}*/
            />

            <button
              type="submit"
              className="absolute inline-flex right-4 mx-3 px-3 pb-3 pt-2 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
            >
              <BsCheckLg className="mx-3" />
            </button>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setButtonPopup(false)}
                className="close-btn"
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
