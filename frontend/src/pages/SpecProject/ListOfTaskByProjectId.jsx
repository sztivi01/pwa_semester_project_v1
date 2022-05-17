import { useQuery } from "react-query";
import { request } from "../../utils/axios-util";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Item from "../../components/Item";
import DropWrapper from "../../components/DropWrapper";
import Col from "../../components/Col";
import { statuses } from "../../data";
import './SpecProject.css';
import SubbmitCard from './SubbmitCard';



const fetchTasksByProjectId = (projectId) => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request({ url: `/tasks/project/${projectId}/tasks` });
}
export const ListOfTaskByProjectId = () => {
    const [items, setItems] = useState([]);
    const { projectId } = useParams();
    const { isLoading, data } = useQuery('projectNames', () => fetchTasksByProjectId(projectId));


    useEffect(() => {
        let tasks = data?.data
        // do some checking here to ensure data exist
        if (tasks) {
            // mutate data if you need to
            setItems(tasks)
        }
    }, [data])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    const onDrop = (item, monitor, status) => {
        const targetStatus = statuses.find(si => si.status === status);
        // set targetstatus on the item
        item.status = targetStatus.status
        //db call, update item in db based on id
        request({ url: `tasks/${item._id}`, method: "PUT", data: item })

        setItems(prevState => {
            let changedItem = prevState.find(i => i._id === item._id)

            if (changedItem) {
                changedItem.status = targetStatus.status
            }
            return [...prevState];
        });
    };
    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        item.order = hoverIndex
        request({ url: `tasks/${item._id}`, method: "PUT", data: item })

        setItems(prevState => {

            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems]
        });
    };

   /* // for submitting add task for "in progress"
    const subbmitStuff = () => {
        // bind input field data : two way binding
        // pass BODY.stringify with binded data + status ('status:"in progress"')
    }
*/
    return (
        <div className={"row"}>
            {statuses.map(s => (
                
                    <div key={s.status} className={"col-wrapper"}>
                        <SubbmitCard 
                        label="Add new card.." 
                        type={"text"} 
                        nameButton="Submit new card"
                        status={s.status}
                        projectId={projectId}
                         />
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} projectId={projectId} />)}
                            </Col>

                        </DropWrapper>
                    </div>
                
            ))}

        </div>
    )
}
export default ListOfTaskByProjectId;