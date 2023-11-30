import { useTheme } from '@emotion/react'
import { Box, Rating, ToggleButton, ToggleButtonGroup, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import "./main.css"
// import Card from "./Card"
import { useGetproductByNameQuery } from "../Redux/product";
import style from "./card.module.css"
import style2 from "../Header/header.module.css"
import { Button } from "@mui/material";
import   Modal  from "@mui/material/Modal";

export default function Main() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (
        event,newAlignment
    ) => {
    setAlignment(newAlignment);
  };
  const them = useTheme()

  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // const them=usethem()

    
    const allProducts="products?populate=*"
    const menProducts="products?populate=*&filters[category][$eq]=men"
    const womenProducts="products?populate=*&filters[category][$eq]=women"
    
    const [myData,setMyData]=useState([allProducts])
    const {data}  =useGetproductByNameQuery(myData)

    

  return (
    <div style={{ background: them.palette.mode === "dark" ? "#111" : "#eee" }}>
    <div className="container mt-5" >

      <div className="  d-flex justify-content-around align-items-center flex-wrap "
      >
        <div
          className="box1 p-2">
          <h2>Selected Producted</h2>
          <p>All our new arrivials in a exclusive brand selection</p>
        </div>


        <div className="box2">
          <ToggleButtonGroup
            value={alignment}
            exclusive 
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" onClick={()=>{setMyData(allProducts)}} aria-label="left aligned" className="mybuttons" style={{color:them.palette.text.primary ,fontSize:"16px"}}>
              All Product
            </ToggleButton>
            <ToggleButton value="center" onClick={()=>{setMyData(menProducts)}}   aria-label="centered aligned" className="mybuttons mx-3" style={{color:them.palette.text.primary,fontSize:"16px"}}>
              Man Product
            </ToggleButton>
            
            <ToggleButton value="right" onClick={()=>{setMyData(womenProducts)}} aria-label="right aligned" className="mybuttons" style={{color:them.palette.text.primary,fontSize:"16px"}}>
              Woman Product
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <div className="cardbox">
      {/* <Card/> */}
        
      <div className='d-flex justify-content-around flex-wrap'>
                
                {data.data.map((item,index)=>{
                return(
                <div key={index} className="card-group" style={{width:"350px"}} >
                    <div className={`card ${style.hover} overflow-hidden mt-4`} style={{background:them.palette.mode==="dark"?"#333":"#fff"}}>
                        <img src={`${item.attributes.productImage.data[0].attributes.url}`}  className="card-img-top " alt="..."/>
                        <div className="card-body"  style={{color:them.palette.text.primary}}>
                            <div className="d-flex justify-content-between align-items-center">
                            <h5  className="card-title fs-2">{item.attributes.Title}</h5>
                            <p className="card-text text-danger fs-4 m-0">{item.attributes.Price}$</p>
                            </div>
                            <p className="card-text">{item.attributes.description}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <Button className='gap-1 '  onClick={handleOpen}> <i className="fa-solid fa-cart-shopping fs-5"></i>Add To Card</Button>

                            <Rating name="read-only" value={item.attributes.rate} precision={.1} readOnly />
                        </div>
                    </div>
                </div>
                
                )
                })}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                    sx={{display:"flex",justifyContent:"center",alignItems:"center"}}
                >
                    <Box sx={{ ...style, width: {xs:"90%",md:650},background:them.palette.neutral.main}}>
                    <div className="card mb-3" style={{background:them.palette.neutral.main}}>
                    <Button onClick={handleClose} className={`position-absolute `} style={{right:"0px",color:them.palette.iconColor.main}}>
                        <i className={`fa-solid  fa-xmark fs-4 p-1 ${style2.hoverButton}`}></i>
                    </Button>  
                        <div className="d-flex"  style={{display:"flex"}}>
                        {useMediaQuery("(max-width:600px)")===true ?(
                        <div style={{flexDirection:"column" ,height:"90%"}}>
                            <div className="" style={{width:"100%"}}>
                                    <img src="images\t-shirts-products\5\1 (5).jpg" className="img-fluid rounded-start w-100 h-100"  alt="..."/>
                            </div>
                            <div className="" style={{color:them.palette.iconColor.main ,width:"100%"}} >
                                <div className="card-body" sx={{text:{xs:"center",sm:"left"}}} >
                                    <h5 className="card-title fs-2 fw-bold " >T-Shirt</h5>
                                    <p className="card-text text-danger fs-4 m-0">20.99</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vel, voluptatum nam placeat tempora dolores maiores alias mollitia, expedita provident ea facere perspiciatis sapiente autem dolore quos ad id perferendis!</p>
                                    <div className="images" style={{display:"flex",gap:"5px" ,width:"100px"}} >
{/*                                         <img src="images\t-shirts-products\5\1 (5).jpg" alt=""  className='w-100'/>
                                        <img src="images\t-shirts-products\5\1 (6).jpg" alt="" className='w-100' />
                                        <img src="images\t-shirts-products\5\100.jpg" alt="" className='w-100' /> */}
                                    </div>
                                    <div style={{display:"flex",justifyContent:"center"}}> 
                                        <Button className="bg-primary mt-2 d-block"  style={{color:them.palette.iconColor.main,} }><i className="fa-solid fa-cart-shopping fs-5"></i> Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div >
                        ):(
                        <>
                        <div className="" style={{width:"37%"}}>
                                <img src="images\t-shirts-products\5\1 (5).jpg" className="img-fluid rounded-start w-100 h-100"  alt="..."/>
                            </div>
                            <div className="" style={{color:them.palette.iconColor.main ,width:"63%"}} >
                                <div className="card-body" sx={{text:{xs:"center",sm:"left"}}} >
                                    <h5 className="card-title fs-2 fw-bold " >T-Shirt</h5>
                                    <p className="card-text text-danger fs-4 m-0">20.99</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vel, voluptatum nam placeat tempora dolores maiores alias mollitia, expedita provident ea facere perspiciatis sapiente autem dolore quos ad id perferendis!</p>
                                    <div className="images" style={{display:"flex",gap:"5px" ,width:"100px"}} >
{/*                                         <img src="images\t-shirts-products\5\1 (5).jpg" alt=""  className='w-100'/>
                                        <img src="images\t-shirts-products\5\1 (6).jpg" alt="" className='w-100' />
                                        <img src="images\t-shirts-products\5\100.jpg" alt="" className='w-100' /> */}
                                    </div>
                                    <div style={{display:"flex",justifyContent:"center"}}>
                                        <Button className="bg-primary mt-2 d-block"  style={{color:them.palette.iconColor.main,} }><i className="fa-solid fa-cart-shopping fs-5"></i> Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                        )}
                            
                        </div>
                    </div>
                        
                        
                    </Box>
                </Modal>
            </div>

      </div>
    </div>
    </div>
  );
}
