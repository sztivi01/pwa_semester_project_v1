import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../utils/axios-util";

const fetchUser = () => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request ({url:'/users/' + localStorage.getItem('user')})
}
export const UserData = () => {
    const { isLoading, data} = useQuery('userEmailPassword', fetchUser);
    if(isLoading) {        
        return <h2>Loading...</h2>
    }

    return (
        <>
        <h2>User info:</h2>
        {data?.data.map((users) => {
            return <div key={users.email}>{users.firstname}{users.lastname}</div>
        })}
        </>
    )
}
export default UserData;
