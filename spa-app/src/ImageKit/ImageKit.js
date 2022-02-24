import React from 'react';
import './ImageKit.css';
import {BsBoxArrowUpRight} from 'react-icons/bs'
const ImageKit = () =>{
    return(
        <>
          <div className='kit'>
             <div className='kit-text'>
                <h4>PROFESSIONAL KIT</h4>
                <h1>For Designer</h1>
                <a href='https://www.figma.com/file/iAnp6x4J6YNvbVzdBnGM8P/%5BPreview%5D-Zone-Web?node-id=0%3A1'>Figma Workspace <span><BsBoxArrowUpRight /></span></a>
             </div>
          </div>
        </>
    )
}
export default ImageKit;