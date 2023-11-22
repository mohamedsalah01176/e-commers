import { useTheme } from '@emotion/react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, ListItemIcon, ListItemText, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from "./header.module.css"
import Links from './Links';

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme=useTheme()

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' ||
          event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  return (
    <div className='container d-flex align-items-center justify-content-between pb-2'>
      <div style={{background:"#2B3445",width:"fit-content"}} className='d-flex align-items-center px-1'>
        <i className="fa-brands fa-windows" style={{color:theme.palette.iconColor.main,fontSize:"20px"}}></i>
          <Button
            
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
          <p className='m-0' style={{color:theme.palette.iconColor.main}}>Category</p>
        </Button>
        <Menu
          
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem  onClick={handleClose} style={{background:"#2B3445" ,color:"#fff"}}>
            <ListItemIcon>
            <i className="fa-solid fa-user-tie text-white"></i>
            </ListItemIcon>
            <ListItemText >portifole</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} style={{background:"#2B3445" ,color:"#fff"}}>
            <ListItemIcon>
              <i className="fa-brands fa-facebook text-white"></i>
            </ListItemIcon>
            <ListItemText>my account</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose} style={{background:"#2B3445" ,color:"#fff"}}>
            <ListItemIcon>
              <i className="fa-solid fa-arrow-right-from-bracket text-white"></i>            </ListItemIcon>
            <ListItemText>log out</ListItemText>
          </MenuItem>
        </Menu>
        <i className="fa-solid fa-chevron-down" style={{color:theme.palette.iconColor.main,fontSize:"20px"}}></i>
      </div>
      {useMediaQuery('(max-width:1000px)')===true?
      <Button onClick={toggleDrawer("top", true)} >
        <i className="fa-solid fa-bars fs-4"  style={{color:theme.palette.text.primary}}></i>
      </Button>:
      < >
        <Links title="home"/>
        <Links title="Mage Menu"/>
        <Links title="Pages"/>
        <Links title="User Account"/>
      </>
      }
      
      <Drawer 
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
        <div className='position-relative mt-5' style={{height:"100vh"}}>
          <div className="box  position-relative" style={{margin:"auto",width:"450px"}}>
          
            <Button onClick={toggleDrawer("top", false)} className={`position-absolute `} style={{right:"0px"}}>
              <i className={`fa-solid  fa-xmark fs-4 p-1 ${style.hoverButton}`}></i>
            </Button>  
            <br/>
            <br/>
            {[{mainLink:"Home",subLink:["Link1","Link2","Link3"]},
            {mainLink:"Meaga Menue",subLink:["Link1","Link2","Link3"]},
            {mainLink:"pages",subLink:["Link1","Link2","Link3"]},
            {mainLink:"user Account",subLink:["Link1","Link2","Link3"]}].map((item,index)=>{
              return(
                <Accordion  key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                  >
                    <Typography> {item.mainLink}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {item.subLink.map((link,index)=>{
                      return(
                    <Typography className='p-2' key={index}>
                      {link}
                    </Typography>
                      )
                    })}
                  </AccordionDetails>
                </Accordion>
              )

            })
              }

          </div>
        </div>
        </Drawer>
    </div>
  )
}
