import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../../utils/axios-util";
import React, { useState, useEffect } from "react";

const fetchUser = (userId) => {
  return request({ url: "/users/" + localStorage.getItem("user") });
};

const userObject = JSON.parse(localStorage.getItem("userObject"));

export const UserData = () => {
  const { data } = useQuery([userObject], (userId) => fetchUser(userId));

  const [user, setUser] = useState({});

  useEffect(() => {
    let user = data?.data;
    // do some checking here to ensure data exist
    if (user) {
      // mutate data if you need to
      setUser(user);
    }
  }, [data]);
};
