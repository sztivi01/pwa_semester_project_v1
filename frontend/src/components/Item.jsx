 import React,{Fragment,useState,useRef} from 'react';
 import {useDrag,useDrop} from 'react-dnd';
 import Window from "./Window";
 import ITEM_TYPE from "../data/types";


 const Item = ({item , index, moveItem , status }) => {
     const ref = useRef(null);
     
     const [,drop ] = useDrop({
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
            const hoveredMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoveredClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoveredClientY < hoveredMiddleY) {
                return;
            }

            if(dragIndex > hoverIndex && hoveredClientY < hoveredMiddleY){
                return;
            }

            moveItem(dragIndex,hoverIndex);
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
                <div className={"color-bar"} style={{backgroundColor:status.color}}/>
                <p className={"item-title"}>{item.content}</p>
                <p className={"item-status"}>{item.icon}</p>

            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
            </Fragment>
            
    )
 }
 export default Item;
