import React from "react";
import './Template.css';
import {FaChevronRight} from 'react-icons/fa';
const Template = () =>{
    return(
        <>
          <div class="grid-container5">
            <div className="grid1">
                <h4>PERFECT COMBINATION</h4>
                <h1>Looking For a<br />Dashboard Template?</h1>
                <h6>Minimal UI Kit is a professional dashboard<br /> used by many of our clients.</h6>
                <a href='https://mui.com/store/items/minimal-dashboard/' className='pack1'>Visit Minimal Dashboard<span><FaChevronRight /></span></a>
            </div>
            <div className="grid2">
                <img src="https://zone-assets-api.vercel.app/assets/images/home/minimal_dashboard.png" />
            </div>
          </div>
        </>
    )
}
export default Template;