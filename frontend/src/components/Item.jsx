import React,{Fragment,useState,useRef} from 'react';
import {useDrag,useDrop} from 'react-dnd';
import Window from "./Window";
import ITEM_TYPE from "../data/types";
import ListOfTaskByProjectId from "../components/ListOfTaskByProjectId";
import { useQuery } from "react-query";
//import axios from "axios";
import { request } from "../utils/axios-util";

 const tasks = () => {
    //return axios.get('https://stark-forest-32910.herokuapp.com/api/project')
    return request ({url:'/tasks/' + localStorage.getItem('user')})
}
 const ListofTasks = ({item , index, moveItem , title, taskDescription, status }) => {
    const { data} = useQuery('projectNames', tasks);

     const ref = useRef(null);
     
     const [, drop ] = useDrop({
         accept:ITEM_TYPE,
         hover(item,monitor){
            if(!ref.current){
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;


            if(dragIndex === hoverIndex){
                return;
            }
            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;

         }

     });
     const [{isDragging},drag] = useDrag({
         type:ITEM_TYPE,
         item:{...item,index},
         collect:monitor =>({
             isDragging:monitor.isDragging()
         })

    });
    const [show,setShow] = useState(false);

    const onOpen  = () => setShow(true);

    const onClose = () =>setShow(false);


    drag(drag(ref));
    return ( 
        <Fragment>
            <div

                ref={ref}
                style={{opacity:isDragging ? 0: 1}}
                className={"item"}
                onClick={onOpen}
            >
                        {data?.data.map((task) => {
                        return  <div key={task._id}>
                        <div className={"color-bar"} style={{backgroundColor:status.color}}/>
                        <p className={"item-title"}>{task.title}</p>
                        <p className={"item-status"}>{task.status}</p>
                        <p className={"item-content"}>{task.taskDescription}</p>
                        </div>
                        
                    })}
            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
            </Fragment>
            
    )


 }
 export default ListofTasks;
