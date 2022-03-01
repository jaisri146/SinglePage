import React,{useEffect,useState} from "react";
import './CustomizeMenu.css';
import {FaChevronRight} from 'react-icons/fa';
import {BsFillXCircleFill} from 'react-icons/bs';
import {CgYoutube} from 'react-icons/cg';
import {IoIosAdd} from 'react-icons/io';
import {AiOutlineCloudUpload} from 'react-icons/ai';
import {MdOutlineAlignHorizontalCenter,MdOutlineAlignHorizontalLeft,MdOutlineAlignHorizontalRight} from 'react-icons/md';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
const CustomizeMenu = () =>{
        const [progress, setProgress] = React.useState(0);
        const [value, setValue] = React.useState(new Date());
      
        React.useEffect(() => {
          const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
          }, 800);
      
          return () => {
            clearInterval(timer);
          };
        }, []);
    return(
        <>
            <div className="grid-containerjs">
               <div className="grid-itemjs1">
                   <p className="interface">INTERFACE STARTER KIT</p>
                   <h2 className="flexiable">Flexible<br /> Components</h2>
                   <p className="preset">Pre-set components are easy to customize<br /> and use.</p>
                   <p className="collect">We collected most popular elements. Menu,<br /> sliders, buttons, inputs etc. are all here. Just<br /> dive in!</p>
                   <a href="https://zone-ui.vercel.app/components-ui/" className="box">Browse Components<span><FaChevronRight /></span></a>
               </div>
               <div className="grid-itemjs2">
                   <button className="Add"><span><IoIosAdd /></span>Add To Cart</button>
                   <button className="upload"><span><AiOutlineCloudUpload /></span>Upload</button>
                   <div className="circle">
                      <a className="cover"><CgYoutube /></a>
                   </div> 
                   <div className="prog">
                   <span><CircularProgress variant="determinate" value={progress} /></span>   
                   </div>
                <div className="topnav">
                    <button>Angular</button>
                    <button>React</button>
                    <button>Vue</button>
                </div>
                <div className="grid-icn">
                    <div className="left"><MdOutlineAlignHorizontalLeft /></div>
                    <div className="center"><MdOutlineAlignHorizontalCenter /></div>
                    <div className="center"><MdOutlineAlignHorizontalRight /></div>  
                </div>
                <div className="grid-butn">
                    <p>P</p>
                    <span>Pamela</span>
                    <a href=""><BsFillXCircleFill /></a>
                </div>
                <div className="resp">
                    <img src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg" alt="Cinque Terre" width="70" height="70" />
                </div>
                <div className="colgImg">
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg" />
                    <Avatar alt="Travis Howard" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg" />
                </AvatarGroup>
                </div>
                <div className="hovMe">
                    <Tooltip title="Add" arrow placement="top" className="hovTip" >
                        <Button>Hover Me</Button>
                    </Tooltip>
                </div>
                <div className="ratng">
                    <Rating name="size-large" defaultValue={2} size="large" />
                </div>
                <Box width={250} className="slideTip">
                    <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="on" color="warning" />
                </Box>
                <Stack sx={{ width: '42%' }} className="alrt">
                    <Alert severity="success" className="alrt-txt">This is a <strong>success</strong> alert</Alert>
                </Stack>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker displayStaticWrapperAs="desktop" openTo="year" value={value} onChange={(newValue) => { setValue(newValue); }} renderInput={(params) => <TextField {...params} />} />
                </LocalizationProvider>
             </div>  
            </div>
        </>
    )
}
export default CustomizeMenu;