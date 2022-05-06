import React from "react";
import Menu from './Menu.jsx';

export default function Layout(props) {
    return(
      <div class="">
         <Menu/>
         <div>
            
         { props.children }
         </div>
       </div>
    );
 }
