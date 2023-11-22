// import {  } from '@emotion/react'
import React, { useContext } from 'react'
import { ColorModeContext } from '../Them'
import { FormControl, IconButton,NativeSelect,useTheme } from '@mui/material'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'


export default function Header1() {
    const theme=useTheme()
    const colorMode=useContext(ColorModeContext)
  return (
      <div style={{background:"#2B3445"}}>
        <div className='container d-flex justify-content-between  align-items-center'>
          <div className='d-flex gap-3 align-items-center '>
            <button className='btn btn-danger rounded-pill'>Hot</button>
            <p className='m-0 text-white'>Free Express Shoping</p>
          </div>
          <div className='d-flex' >
              {theme.palette.mode ==="light"?
              <IconButton className='p-0 '
              style={{color:"#fff"}}
              onClick={()=>{
                  localStorage.setItem("mode",theme.palette.mode === "dark"? "light":"dark")
                  colorMode.toggleColorMode()
              }}
              color="inherit"
              ><LightModeOutlined/></IconButton>:
              <IconButton
              className='p-0' 
              onClick={()=>{
                  localStorage.setItem("mode",theme.palette.mode === "dark" ?"light":"dark")
                  colorMode.toggleColorMode()
              }}
              color='inherit'
              ><DarkModeOutlined/></IconButton>
              }

            <FormControl fullWidth className='p-2'  >
              
              <NativeSelect
              style={{color:"#fff"}}
                defaultValue={30}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10} style={{color:"blue"}}>EN</option>
                <option value={20} style={{color:"blue"}}>AR</option>
              </NativeSelect>
            </FormControl>






            <i className="fa-brands fa-facebook  fs-5 py-3  ms-2" style={{color:"#fff"}}></i>
            <i className="fa-brands fa-instagram fs-5 mx-2 py-3" style={{color:"#fff"}}></i>
            <i className="fa-brands fa-twitter fs-5 py-3" style={{color:"#fff"}}></i>
          </div>
        </div>
      </div>
  )
}
