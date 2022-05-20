import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import { Link } from "react-router-dom";
import "../index.css";

const fetchProjectNames = () => {
  return request({
    url: `projects/all/${localStorage.getItem("user")}/${localStorage.getItem(
      "email"
    )}`,
  });
};

export default function ProjectData() {
  const { isLoading, data } = useQuery("projectNamesNav", fetchProjectNames, {
    refetchInterval: 5000,
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {data?.data.map((project) => (
        <li
          key={project._id}
          className="flex justify-start items-center py-2 pr-0 pl-4 list-none h-14 text-indigo-400"
        >
          <Link
            className="flex items-center h-full bg-indigo-700 w-11/12 rounded hover:bg-indigo-900"
            to={`/project/${project._id}/tasks`}
          >
            <span className="ml-4">{project.name}</span>
          </Link>
        </li>
      ))}
    </>
  );
}
