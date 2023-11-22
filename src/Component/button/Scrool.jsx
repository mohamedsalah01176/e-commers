import { Fab, Zoom, useScrollTrigger } from '@mui/material'
import React from 'react'

export default function Scrool() {
  return (
    <div>
        <Zoom in={useScrollTrigger({threshold:200})}>
            <Fab onClick={()=>{window.scrollTo(0,0)}} variant="extended" style={{position:"fixed", bottom:"20px",right:"20px"}} color="primary" >
                <i className="fa-solid fa-angle-up " style={{fontSize:"25px", fontWeight:"600"}}></i>
            </Fab>
        </Zoom>
    </div>
  )
}
