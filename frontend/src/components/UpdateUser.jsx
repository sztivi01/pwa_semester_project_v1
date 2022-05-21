import { useQuery } from "react-query";
import { request } from "../../utils/axios-util";
import React, { useState, useEffect } from "react";

const fetchUser = (userId) => {
  return request({ url: "/users/" + localStorage.getItem("user") });
};

const userObject = JSON.parse(localStorage.getItem("userObject"));

export const UserData = () => {
  const { data } = useQuery([userObject], (userId) => fetchUser(userId));

  const [user, setUser] = useState({});
  const [emailNew, setEmail] = useState("");
  useEffect(() => {
    let user = data?.data;
    // do some checking here to ensure data exist
    if (user) {
      // mutate data if you need to
      setUser(user);
    }
  }, [data]);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (emailNew != null) {
      userObject.email = emailNew;
    }
    request({
      url: "/users/" + localStorage.getItem("user"),
      method: "PUT",
      data: userObject,
    }).then(() => {
      alert("Data saved succesfully");
      setEmail("");
    });
  };
  return (
    <>
      <h1>{user.email} </h1>
      <form action="">
        <input
          type="email"
          placeholder="email"
          value={emailNew}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </form>
    </>
  );
};

export default UserData;
