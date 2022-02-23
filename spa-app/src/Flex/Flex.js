import React from 'react';
import './Flex.css';
import {BsBoxArrowUpRight} from 'react-icons/bs'
const Flex = () =>{
    return(
        <>
          <div className="grid-container1">
            <div className='grid-item1'>
                <h1>Create Your<br /> Website Today<br /> with <span>ZONE</span></h1>
                <p>The ZONE is built on top of MUI, a powerful library that<br /> provides flexible, customizable, and easy-to-use<br /> components.</p>
                <a href='https://www.figma.com/file/iAnp6x4J6YNvbVzdBnGM8P/%5BPreview%5D-Zone-Web?node-id=0%3A1'>Figma Workspace <span><BsBoxArrowUpRight /></span></a>
                <div className='Detail-img'> 
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_figma.svg' />
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_javascript.svg' />
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_typescript.svg' />
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_material.svg' />
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_react.svg' />
                </div>
            </div>
            <div className='grid-item2'>
                <img src='https://zone-assets-api.vercel.app/assets/images/home/home_hero.png' />
            </div>
          </div>
        </>
    )
}
export default Flex;