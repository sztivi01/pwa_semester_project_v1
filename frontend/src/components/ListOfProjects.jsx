import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../utils/axios-util";

const fetchProjectNames = () => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request({url:'/tasks/' + localStorage.getItem('user')})
}
export const ListOfProjects = () => {
    const { isLoading, data} = useQuery('projectNames', fetchProjectNames);
    if(isLoading) {        
        return <h2>Loading...</h2>
    }
    console.log(data.data);

}
export default ListOfProjects;
