import styled from '@emotion/styled';
import { Badge, FormControl, IconButton, InputLabel, NativeSelect } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

export default function Header2() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <div className='container'>
      <nav className="navbar  d-flex flex-direction-row">
          <div className="d-flex  align-items-center gap-2">
            <i className="fa-solid fa-cart-shopping fs-4"></i>
            <p className='m-0 fs-4 text-info'>E-Commers</p>
          </div>
          <div className="border d-flex align-items-center w-50 rounded-pill px-3 bg-white">
            <form className="d-flex w-75  " role="search">
              <input className="form-control outline-0 p-2 border border-0" type="search" placeholder="Search" aria-label="Search"/>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
              <FormControl fullWidth className='p-2 ps-0 w-25 bg-white'  >
              <InputLabel  variant="standard" htmlFor="uncontrolled-native"  >
                
                Categore
              </InputLabel>
              <NativeSelect
              style={{color:"#fff"}}
                defaultValue={30}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={10} style={{color:"blue"}}>Clothes</option>
                <option value={20} style={{color:"blue"}}>Electronic</option>
              </NativeSelect>
            </FormControl>
        </div>
        <div className="d-flex gap-2 align-items-center " style={{color:"blue"}}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon 
            style={{fontSize:"30px",color:"blue"}} />
          </StyledBadge>
        </IconButton>
          <i className="fa-solid fa-user fs-4"></i>
        </div>
      </nav>
    </div>
  )
}
