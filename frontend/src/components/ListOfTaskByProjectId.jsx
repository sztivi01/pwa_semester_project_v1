/* import { useQuery } from "react-query";
import { useState } from "react";
//import axios from "axios";
import { request } from "../utils/axios-util";
import { useParams } from "react-router-dom";


const fetchTasksByProjectId = async (projectId) => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return await request({url:`/tasks/project/${projectId}/tasks`})
}
export const ListOfTaskByProjectId = () => {
const [items,setItems] = useState([]);

    const{ projectId}=useParams();
    const { isLoading, data} = useQuery('projectNames',()=> fetchTasksByProjectId(projectId));
    setItems(data);
    if(isLoading) {        
        return <h2>Loading...</h2>
    }
    return {
        items,setItems
    }
    /* return (
        <>
        <h2>RQ Project names:</h2>
        {data?.data.map((tasks) => {
            return <div key={tasks}>{tasks}</div>
        })}
        </>
    ) 
}
export default ListOfTaskByProjectId;*/ 


import { useQuery } from "react-query";
import { request } from "../utils/axios-util";
import { useParams } from "react-router-dom";
import React, {useState} from "react";
import Item from "../../components/Item";
import DropWrapper from "../../components/DropWrapper";
import Col from "../../components/Col";
import {statuses} from "../data";
import './SpecProject/SpecProject.css';


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
const [items,setItems] = useState(data.data);

    const  onDrop = (item,monitor,status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState =>{
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({...item,status,icon:mapping.icon});
                return [ ...newItems];
        });
    };
    const moveItem = (dragIndex,hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i,idx) => idx !== dragIndex);
            newItems.splice(hoverIndex,0,item);
            return  [...newItems]
        });
    };
    return ( 
        <div className={"row"}>
            {statuses.map(s => {
                return (
                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i=> i.status === s.status)
                                    .map((i,idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s}/>)}
                            </Col>

                        </DropWrapper>
                    </div>
                );
            } )}

        </div>
    )
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