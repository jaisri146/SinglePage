import React from 'react';
import './GridPlan.css';
import {BsCheckCircle} from 'react-icons/bs';
import {BsXCircle} from 'react-icons/bs';
import {FaChevronRight} from 'react-icons/fa';
const GridPlan = () =>{
    return(
        <>
          <div class="grid-container4">
            <div class="grid-itemp">
               <h6>STANDARD<span>$<sub>69</sub></span></h6>
               <div className='imgp'>
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_javascript.svg' />
               </div>
               <div className='plans'>
                    <p><span><BsCheckCircle /></span>One end products</p>
                    <p><span><BsCheckCircle /></span>12 months updates</p>
                    <p className='dot'><span><BsCheckCircle /></span>6 months of support</p>
                    <p><span><BsCheckCircle /></span>JavaScript version</p>
                    <p className='disable'><span><BsXCircle /></span>TypeScript version</p>
                    <p className='disable'><span><BsXCircle /></span>Design resources</p>
                    <p className='disable'><span><BsXCircle /></span>Commercial applications</p>
               </div>
               <a href='https://mui.com/store/items/minimal-dashboard/' className='pack'>Choose Package</a><br></br>
              <a href='https://mui.com/store/license/#i-standard-license' className='readli'>Read License<span><FaChevronRight /></span></a>
            </div>
            <div class="grid-itemp1">
               <h6>PLUS<span>$<sub>129</sub></span></h6>
               <div className='imgp1'>
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_javascript.svg' className='imgsp'/>
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_typescript.svg' className='imgsp1' />
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_figma.svg' className='imgsp2' />
               </div>
               <div className='plans'>
                    <p><span><BsCheckCircle /></span>One end products</p>
                    <p><span><BsCheckCircle /></span>12 months updates</p>
                    <p className='dot'><span><BsCheckCircle /></span>6 months of support</p>
                    <p><span><BsCheckCircle /></span>JavaScript version</p>
                    <p><span><BsCheckCircle /></span>TypeScript version</p>
                    <p><span><BsCheckCircle /></span>Design resources</p>
                    <p className='disable'><span><BsXCircle /></span>Commercial applications</p>
               </div>
               <a href='https://mui.com/store/items/minimal-dashboard/' className='pack'>Choose Package</a>
               <a href='https://mui.com/store/license/#i-standard-license' className='readli'>Read License<span><FaChevronRight /></span></a>
            </div>
            <div class="grid-itemp2">
                <h6>EXTENDED<span>$<sub>599</sub></span></h6>
                <div className='imgp1'>
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_javascript.svg' className='imgsp'/>
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_typescript.svg' className='imgsp1' />
                   <img src='https://zone-assets-api.vercel.app/assets/icons/platform/ic_platform_figma.svg' className='imgsp2' />
               </div>
               <div className='plans'>
                    <p><span><BsCheckCircle /></span>One end products</p>
                    <p><span><BsCheckCircle /></span>12 months updates</p>
                    <p className='dot'><span><BsCheckCircle /></span>6 months of support</p>
                    <p><span><BsCheckCircle /></span>JavaScript version</p>
                    <p><span><BsCheckCircle /></span>TypeScript version</p>
                    <p><span><BsCheckCircle /></span>Design resources</p>
                    <p><span><BsCheckCircle /></span>Commercial applications</p>
               </div>
               <a href='https://mui.com/store/items/minimal-dashboard/' className='pack'>Choose Package</a>
               <a href='https://mui.com/store/license/#i-standard-license' className='readli'>Read License<span><FaChevronRight /></span></a>
            </div>  
          </div>
        </>
    )
}
export default GridPlan