import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../utils/axios-util";

const fetchProjectNames = () => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request ({url:'/projects/' + localStorage.getItem('user')})
}
export const ListOfProjects = () => {
    const { isLoading, data} = useQuery('projectNames', fetchProjectNames);
    if(isLoading) {        
        return <h2>Loading...</h2>
    }

    return (
        <>
        <h2>RQ Project names:</h2>
        {data?.data.map((projects) => {
            return <div key={projects.name}>{projects.name}</div>
        })}
        </>
    )
}
export default ListOfProjects;
