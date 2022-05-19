import { useQuery } from "react-query";
import { request } from "../../utils/axios-util";
import { useParams } from "react-router-dom";
import PopupProjectUpdate from "../../components/PopupProjectUpdate";
import React, { useEffect, useState } from "react";
import Item from "../../components/Item";
import DropWrapper from "../../components/DropWrapper";
import Col from "../../components/Col";
import { statuses } from "../../data";
import "./SpecProject.css";
import SubbmitCard from "./SubbmitCard";


const fetchTasksByProjectId = (projectId) => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request({ url: `/tasks/project/${projectId}/tasks` });
}

export const ListOfTaskByProjectId = () => {
  const [items, setItems] = useState([]);
  const { projectId } = useParams();

  const { isLoading, data, refetch } = useQuery(
    "projectNames",
    () => fetchTasksByProjectId(projectId),
    { manual: true }
  );



  useEffect(() => {
    let tasks = data?.data;
    // do some checking here to ensure data exist
    if (tasks) {
      // mutate data if you need to
      setItems(tasks);
    }
  }, [data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const onDrop = (item, monitor, status) => {
    const targetStatus = statuses.find((si) => si.status === status);
    // set targetstatus on the item
    item.status = targetStatus.status;
    //db call, update item in db based on id
    request({ url: `tasks/${item._id}`, method: "PUT", data: item });

    setItems((prevState) => {
      let changedItem = prevState.find((i) => i._id === item._id);

      if (changedItem) {
        changedItem.status = targetStatus.status;
      }
      return [...prevState];
    });
  };
  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    item.order = hoverIndex;
    request({ url: `tasks/${item._id}`, method: "PUT", data: item });

    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };
  const buttonClicked = () => {
    refetch();
  };

  /* // for submitting add task for "in progress"
    const subbmitStuff = () => {
        // bind input field data : two way binding
        // pass BODY.stringify with binded data + status ('status:"in progress"')
    }
*/


  return (
    <>
      <div className="w-full h-48">
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Project Name</h2>
          <h2 className="mt-5 text-xl sm:text-xl">Project description</h2>
          <button
           
            className=" mt-5 px-5 py-2 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          >
            Edit
          </button>
         
        </div>
      </div>
      <div className="mx-10 mb-10 flex">
        <div className={"row"}>
          {statuses.map((s) => (
            <div className="flex">
              <div key={s.status} className={"col-wrapper"}>
                <SubbmitCard
                  label="New card"
                  type={"text"}
                  status={s.status}
                  projectId={projectId}
                  buttonClicked={buttonClicked}
                />
                <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                <DropWrapper onDrop={onDrop} status={s.status}>
                  <Col>
                    {items
                      .filter((i) => i.status === s.status)
                      .map((i, idx) => (
                        <Item
                          key={i.id}
                          item={i}
                          index={idx}
                          moveItem={moveItem}
                          status={s}
                          projectId={projectId}
                        />
                      ))}
                  </Col>
                </DropWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PopupProjectUpdate trigger={false}/>
        
    </>
  );
};
export default ListOfTaskByProjectId;
