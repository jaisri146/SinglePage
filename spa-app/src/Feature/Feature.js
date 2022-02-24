import React from 'react';
import './Feature.css';
import {RiFontSize,RiLayoutRowFill,RiBookReadLine} from 'react-icons/ri';
import {SiFigma} from 'react-icons/si';
import {MdOutlineDarkMode,MdOutlineAutoAwesome,MdOutlineHeadsetMic} from 'react-icons/md';
import {GrMonitor} from 'react-icons/gr';
import {AiOutlineInsertRowRight,AiOutlinePullRequest} from 'react-icons/ai';
import {BiFoodMenu} from 'react-icons/bi';
import {VscGist} from 'react-icons/vsc';
import {FiRotateCcw} from 'react-icons/fi';
const Feature = () =>{
    return(
        <>
          <div class="grid-container3">
            <div class="grid-itemf">
                <h4>FEATURE HIGHLIGHTS</h4>
                <h1>Have Everything<br /> You Need</h1>
                <h6>Let's see what makes our theme super<br /> powerful and user-friendly!</h6>
                <a href='https://mui.com/store/items/zone-landing-page/' className="buttonf">Purchase Now</a>
            </div>
            <div class="grid-itemf2">
                <div className='icn'>
                  <span><GrMonitor /></span>
                  <h4>4 Prebuilt Websites</h4>
                </div>
                <div className='icn'>
                  <span><AiOutlineInsertRowRight /></span>
                  <h4>50+ Demo Page</h4>
                </div>
                <div className='icn'>
                  <span><AiOutlinePullRequest /></span>
                  <h4>Easy to Customize</h4>
                </div>  
                <div className='icn'>
                  <span><RiLayoutRowFill /></span>
                  <h4>Color Presets</h4>
                </div>
                <div className='icn'>
                  <span><MdOutlineDarkMode /></span>
                  <h4>Dark Mode</h4>
                </div>
                <div className='icn'>
                  <span><MdOutlineAutoAwesome /></span>
                  <h4>Awesome Animation</h4>
                </div>
                <div className='icn'>
                  <span><RiFontSize /></span>
                  <h4>Google Fonts</h4>
                </div>  
                <div className='icn'>
                  <span><SiFigma /></span>
                  <h4>Figma Design</h4>
                </div>
                <div className='icn'>
                  <span><GrMonitor /></span>
                  <h4>Fully Responsive</h4>
                </div>
                <div className='icn'>
                  <span><BiFoodMenu /></span>
                  <h4>Mega Menu</h4>
                </div>
                <div className='icn'>
                  <span><VscGist /></span>
                  <h4>Clean Markup</h4>
                </div>
                <div className='icn'>
                  <span><FiRotateCcw /></span>
                  <h4>Free Updates</h4>
                </div>
                <div className='icn'>
                  <span><MdOutlineHeadsetMic /></span>
                  <h4>Fast Support</h4>
                </div>
                <div className='icn'>
                  <span><RiBookReadLine /></span>
                  <h4>Well Documented</h4>
                </div>
            </div>
            
          </div>

        </>
    )
}
export default Feature;