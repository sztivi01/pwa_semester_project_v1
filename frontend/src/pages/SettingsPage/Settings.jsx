import { useQuery } from "react-query";
import { request } from "../../utils/axios-util";
import React, { useState, useEffect } from "react";
import avatarImg from "../../assets/avatar.jpg";
import { BsCheckLg } from "react-icons/bs";
import swal from "sweetalert";

const fetchUser = (userId) => {
  return request({ url: "/users/" + localStorage.getItem("user") });
};

//const userObject = JSON.parse(localStorage.getItem('userObject'))

const fname = localStorage.getItem("firstName");
const lname = localStorage.getItem("lastName");
const email = localStorage.getItem("email");

export const UserData = () => {
  const { data } = useQuery(
    [email, fname, lname, localStorage.getItem("user")],
    (userId) => fetchUser(userId)
  );

  const [user, setUser] = useState({});
  const [emailNew, setEmail] = useState("");
  const [passwordNew, setPassword] = useState("");
  useEffect(() => {
    let user = data?.data;
    if (user) {
      setUser(user);
    }
  }, [data]);

  const handleOnSubmitEmail = async (e) => {
    e.preventDefault();
    if (emailNew != null) {
      user.email = emailNew;
    }
    request({
      url: "/users/" + localStorage.getItem("user"),
      method: "PUT",
      data: user,
    }).then(() => {
      swal("Success!", "E-mail updated succesfully", "success", {
        showCancelButton: true,
        showConfirmButton: true,
      });

      setEmail("");
    });
  };

  const handleOnSubmitPass = async (e) => {
    e.preventDefault();
    if (passwordNew != null) {
      user.password = passwordNew;
    }
    request({
      url: "/users/" + localStorage.getItem("user"),
      method: "PUT",
      data: user,
    }).then(() => {
      swal("Success!", "Password updated succesfully", "success", {
        showCancelButton: true,
        showConfirmButton: true,
      });
      setPassword("");
    });
  };
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div className="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
            <div>
              <img
                className="max-w-lg mx-auto rounded-full sm:w-2/4 md:w-1/4 lg:w-2/3 mt-5"
                src={avatarImg}
                alt="/"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl mb-5 text-center">
                {user.first_name}'s Profile!
              </h1>
              <div className="max-w-lg mx-auto text-end">
                <div className="relative block overflow-hidden p-4 border bg-slate-100 border-gray-200 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-300 hover:ring-1 hover:ring-gray-200">
                  <label className="text-gray-400">Full Name</label>
                  <h2 className="mb-5 text-lg font-bold sm:text-xl">
                    {user.first_name} {user.last_name}
                  </h2>
                  <label className="text-gray-400">Email</label>
                  <h2 className="mb-5 text-lg font-bold sm:text-xl">
                    {user.email}
                  </h2>

                  <form className="max-w-md mx-auto mt-8 mb-10 space-y-4">
                    <div>
                      <div className="relative">
                        <input
                          className="w-10/12 p-4 pr-12 text-sm border border-indigo-600 rounded-lg relative"
                          type="email"
                          placeholder="Email"
                          value={emailNew}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="flex items-center justify-center">
                          <button
                            onClick={handleOnSubmitEmail}
                            type="submit"
                            className="absolute inset-y-0 inline-flex items-center right-4 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                          >
                            <BsCheckLg className="mx-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative">
                        <input
                          className="w-10/12 p-4 pr-12 text-sm border border-indigo-600 rounded-lg relative"
                          type="password"
                          placeholder="Password"
                          value={passwordNew}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex items-center justify-center">
                          <button
                            onClick={handleOnSubmitPass}
                            type="submit"
                            className="absolute inset-y-0 inline-flex items-center right-4 text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                          >
                            <BsCheckLg className="mx-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UserData;
