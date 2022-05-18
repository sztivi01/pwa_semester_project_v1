import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import { Link } from "react-router-dom";
import "../index.css"

const fetchProjectNames = () => {
    return request({ url: "/projects/" + localStorage.getItem("user") });
  };
  

export default function ProjectData(){
    const { isLoading, data } = useQuery("projectNames", fetchProjectNames);
    if (isLoading) {
      return <h2>Loading...</h2>;
    } return (
    <>
       {data?.data.map((project) => ( 
         <li key={project._id} className="nav-text">
             <Link className="nav-text a" to={`/project/${project._id}/tasks`}>
             <span>{project.name}</span>
             </Link>
      </li>
      ))
       }</>
    );
  };