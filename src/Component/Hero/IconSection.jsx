import React from 'react'
import style from './Iconsection.module.css'
import { useTheme } from '@emotion/react'

export default function IconSection() {
    const theme =useTheme()
    const myboxs=[
        {icon:"fa-solid fa-bolt fs-3",title:"Fast delivery",paragraph:"Start from 10$"},
        {icon:"fa-solid fa-face-grin-stars fs-3",title:"Money Guarantee",paragraph:"7Day Back"},
        {icon:"fa-solid fa-stopwatch fs-3",title:"Form Free Return",paragraph:"Form Free Return"},
        {icon:"fa-solid fa-pager fs-3",title:"Secure system",paragraph:"Secure system"},
    ]
  return (
    <div className={`container ${style.parent} my-3`}>
        {myboxs.map((item,index)=>{
            return(
                <div className="box  d-flex  align-items-center p-2 " key={index} style={{color:theme.palette.text.primary,background:theme.palette.mode==="dark"?"#000":"#f7f7f7"}}>
                    <i className={`${item.icon} mx-3`}></i>
                    <div className="text">
                        <h2>{item.title}</h2>
                        <p className='m-0 text-secondary'>{item.paragraph}</p> 
                    </div>
                </div>

            )
        })}
        
    </div>
  )
}
