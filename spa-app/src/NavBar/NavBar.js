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
                <a href="#home" className='l1'><span>.</span>Home</a>
                <a href="#news" className='l2'>Components</a>
                <a href="#contact" className='l2'>Pages</a>
                <a href="#about" className='l2'>Documentations</a>
            </div>
            <div className='side-menu'>
                <a href="#contact" className='m1'><AiOutlineSearch /></a>
                <a href="#contact" className='m1'><VscGlobe /></a>
                <button class="button1">Green</button>
                <button class="button2">Blue</button>
            </div>
          </div>

        </>
    )
}
export default NavBar;