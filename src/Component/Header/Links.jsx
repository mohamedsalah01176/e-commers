import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import style from "./header.module.css"

export default function Links({title}) {
    
  return (
    <div className={`${style.parent}`}  style={{zIndex:"5"}}>
        <div className={`d-flex align-items-center position-relative ${style.showlinks} cursor-pointer `}>
            <Button className={`m-0 fs-5 `}>{title} </Button>
            <i className="fa-solid fa-angle-down fs-4 mt-2 mx-2 "></i>
            <nav aria-label="secondary mailbox folders" className={`${style.links} position-absolute top-100 `} >
                <List className='bg-dark p-2'>
                    <ListItem disablePadding >
                        <ListItemButton>
                        <ListItemText  className='text-white' primary="Daishbar" />
                        </ListItemButton>
                    </ListItem> 
                    
                        <ListItem disablePadding className={`position-relative ${style.list} `}>
                            <ListItemButton component="a" href="#simple-list" >
                                <ListItemText className='text-white' primary="product" />
                                <i className="fa-solid fa-chevron-right mx-2 text-white"></i>
                            </ListItemButton>
                                <List  className={`position-absolute ${style.linklist} bg-dark`} style={{top:"0px",left:"100%"}}>
                                    <ListItem disablePadding >
                                        <ListItemButton >
                                        <ListItemText  className='text-white' primary="addProduct" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding >
                                        <ListItemButton>
                                        <ListItemText  className='text-white' primary="ediatProdect" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                        </ListItem>
                    
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
            
                            <ListItemText  className='text-white'  primary="Ordires" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText  className='text-white' primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </div>
    </div>
  )
}
