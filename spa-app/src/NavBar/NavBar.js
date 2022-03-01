import React,{useState} from 'react';
import './NavBar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
const NavBar = () =>{
        const [nav, setNav] = useState(false);
        const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
        setNav(true);
        }
        else{
        setNav(false);
        }
    };
        window.addEventListener('scroll', changeNavbarColor);
    return(
        <>
          <div className={nav ? 'navbar nav' : 'navbar'}>
            <div className='logo'>
                <a href="#" className='logos'>ZONE<span>.</span></a>
            </div>
            <div className='menu'>
                <a href="#" className='l1' target="_self"><span>.</span>Home</a>
                <a href="https://zone-ui.vercel.app/components-ui/" className='l2' target="_self">Components</a>
                <a href="https://zone-ui.vercel.app/components-ui/" className='l2' target="_self">Pages</a>
                <a href="https://zone-docs.vercel.app/introduction" className='l2' target="_self">Documentations</a>
            </div>
            <div className='side-menu'>
                <a href="#contact" className='m1'><AiOutlineSearch /></a>
                <a href="#contact" className='m2'><VscGlobe /></a>
                <button class="button1">Join Us</button>
                <button class="button2">Buy Now</button>
            </div>
          </div>

        </>
    )
}
export default NavBar;