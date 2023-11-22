import {Button, useMediaQuery} from "@mui/material"
import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import { Pagination, Navigation } from 'swiper/modules';
import "./swiper.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Hero() {
    let silder=[
        {text:"MEN" ,img:"images/banner-15.jpg"},
        {text:"WOMAN" ,img:"images/banner-25.jpg"},
    ]
  return (
    <div style={{backgroundColor:"#eee",padding:"10px"}}>
    <div className='container d-flex mt-3 gap-2 pb-3 '  style={{zIndex:"0"}}>
        <div className="box1 position-relative w-75 flex-grow-1 h-50">
            <Swiper
            pagination={{
            type: 'progressbar',
            }}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper position-relative pb-5"
        >
            {silder.map((item,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <img src={item.img} className="w-100" alt="" />
                        
                        <div key={index} className="text position-absolute" style={{top:"30%",left:"10%",zIndex:"1"}}>
                                    <p className="m-0 text-dark fs-4">LIFESTYLE COLLECTION</p>
                                    <p className="m-0 my-1 text-dark fs-2 fw-bold">{item.text}</p>
                                    <p className="m-0  text-dark fs-3">SALE UP TO <span className="text-danger">30% OFF</span></p>
                                    <p className="m-0 fw-light">Get Free shipping in orders over 99.0$</p>
                                    <button className="btn btn-dark fw-bold">show now <i className="fa-solid fa-arrow-right mx-1 fs-5"></i></button>
                        </div>
                    </SwiperSlide>
                    
                )
            })}
            
            
        </Swiper>
        
        </div>  
            {useMediaQuery("(min-width:992px)")=== true?(

        <div className="box2   " style={{minWidth:"27.6%"}} >
            <div className="image1 position-relative h-50">
                <img src="images/banner-17.jpg " style={{width:"100%",margin:"0 0 20px 0"}} alt="" />
                <div className="text position-absolute" style={{top:"20%",left:"10%"}}>
                    <p className="m-0 text-dark fw-light">New ARRIVALS</p>
                    <p className="m-0 my-1 text-dark ">SUMMER</p>
                    <p className="m-0  text-dark">SaLe 20% off</p>
                    <Button className="fw-bold">show now <i className="fa-solid fa-arrow-right mx-1 fs-5"></i></Button>
                </div>
            </div>
            <div className="image2 h-50 position-relative">
                <img src="images/banner-16.jpg" style={{width:"100%"}} alt="kk" />
                <div className="text position-absolute" style={{top:"20%",left:"10%"}}>
                    <p className="m-0 text-dark fw-light">Gaming</p>
                    <p className="m-0 mt-1 text-dark fw-bold">DESKTOP&</p>
                    <p className="m-0  text-dark fw-bold">LAPTOPS</p>
                    <Button className="fw-bold">show now <i className="fa-solid fa-arrow-right mx-1 fs-5"></i></Button>
                </div>
            </div>
        </div>
            ):""}
    </div>
    </div>
  )
}
