import { useTheme } from "@emotion/react"
import { Button } from "@mui/material"
import React from 'react'

export default function Footer() {
    const theme=useTheme()
  return (
        <div className="d-flex justify-content-center align-items-center mt-3" style={{background:"#2B3445",height:"100px"}}>
            <p className="fs-4 m-0" style={{color:theme.palette.iconColor.main}}>
                Designed and Developed by <Button className="fs-5 p-0">Mohamed Salah</Button> &copy;2023
            </p>
        
    </div>

  )
}

