import React from 'react';
import './Feature.css';
import {RiFontSize} from 'react-icons/ri';
import {SiFigma} from 'react-icons/si';
import {MdOutlineDarkMode} from 'react-icons/md';
const Feature = () =>{
    return(
        <>
          <div class="grid-container3">
            <div class="grid-itemf">
                <h4>FEATURE HIGHLIGHTS</h4>
                <h1>Have Everything<br /> You Need</h1>
                <h6>Let's see what makes our theme super<br /> powerful and user-friendly!</h6>
                <button className="buttonf">Purchase Now</button>
            </div>
            <div class="grid-itemf2">
                <div className='icn'>
                  <h4>4 Prebuilt Websites</h4>
                </div>
                <div className='icn'>
                  <h4>50+ Demo Page</h4>
                </div>
                <div className='icn'>
                  <h4>Easy to Customize</h4>
                </div>  
                <div className='icn'>
                  <h4>Color Presets</h4>
                </div>
                <div className='icn'>
                  <span><MdOutlineDarkMode /></span>
                  <h4>Dark Mode</h4>
                </div>
                <div className='icn'>
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
                  <h4>Fully Responsive</h4>
                </div>
                <div className='icn'>
                  <h4>Mega Menu</h4>
                </div>
                <div className='icn'>
                  <h4>Clean Markup</h4>
                </div>
                <div className='icn'>
                  <h4>Free Updates</h4>
                </div>
                <div className='icn'>
                  <h4>Fast Support</h4>
                </div>
                <div className='icn'>
                  <h4>Well Documented</h4>
                </div>
            </div>
            
          </div>

        </>
    )
}
export default Feature;