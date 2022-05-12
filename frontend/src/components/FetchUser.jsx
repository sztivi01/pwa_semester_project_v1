import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../../utils/axios-util";

const fetchUser = (userId) => {
    return request({ url: '/users/' + localStorage.getItem('user') })
}

export const UserData = () => {

    const { data/* , error, status */ } = useQuery([ localStorage.getItem('email'),localStorage.getItem('firstName'),localStorage.getItem('lastName'), localStorage.getItem('user')], (userId) => 
        fetchUser(userId)       
    );

    console.log(data)
    return
};

export default UserData;