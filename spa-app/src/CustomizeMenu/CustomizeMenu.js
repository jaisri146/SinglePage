import React from "react";
import './CustomizeMenu.css';
import {FaChevronRight} from 'react-icons/fa';
const CustomizeMenu = () =>{
    return(
        <>
            <div class="grid-containerjs">
               <div class="grid-itemjs1">
                   <h4 className="interface">INTERFACE STARTER KIT</h4>
                   <h2 className="flexiable">Flexible<br /> Components</h2>
                   <h6 className="preset">Pre-set components are easy to customize<br /> and use.</h6>
                   <h6 className="collect">We collected most popular elements. Menu,<br /> sliders, buttons, inputs etc. are all here. Just<br /> dive in!</h6>
                   <a href="https://zone-ui.vercel.app/components-ui/" className="box">Browse Components<span><FaChevronRight /></span></a>
               </div>
            </div>   
        </>
    )
}
export default CustomizeMenu;