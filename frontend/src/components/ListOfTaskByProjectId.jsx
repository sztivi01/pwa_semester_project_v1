import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../utils/axios-util";
import { useParams } from "react-router-dom";


const fetchTasksByProjectId = (projectId) => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request({url:`/tasks/project/${projectId}/tasks`})
}
export const ListOfTaskByProjectId = () => {
    const{ projectId}=useParams();
    const { isLoading, data} = useQuery('projectNames',()=> fetchTasksByProjectId(projectId));
    if(isLoading) {        
        return <h2>Loading...</h2>
    }
console.log(data);
    /* return (
        <>
        <h2>RQ Project names:</h2>
        {data?.data.map((tasks) => {
            return <div key={tasks}>{tasks}</div>
        })}
        </>
    ) */
}
export default ListOfTaskByProjectId;