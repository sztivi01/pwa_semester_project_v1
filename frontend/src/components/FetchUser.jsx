import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../../utils/axios-util";

const fetchUser = (userId) => {
    return request({ url: '/users/' + localStorage.getItem('user') })
}

export const UserData = () => {

    const { data, error, status } = useQuery(["user",localStorage.getItem('user')], (userId) =>
        fetchUser(userId)
    );

    console.log(data)
    return data?.data
    /*return (
      <>
      <h2>RQ Project names:</h2>
      <div>{{ user }}</div>
      </>
  )*/
}

export default UserData;
