import React from 'react'
import puma from '../assets/images/puma-logo.svg'
import nike from '../assets/images/nike.svg'
import adidas from '../assets/images/adidas-7.svg'


function Card1({back,desc}) {
  return (
    <div className= {`h-[600px] w-screen ${back} z-40   rounded-3xl text-lg text-center flex flex-col  items-center p-20 `}>
        
        
     <h1>{desc} </h1>
     <div className=' flex  justify-evenly items-center w-screen mt-[15%]'>

     <img src={puma}  className=' h-[90px]' ></img>

     <img src={adidas}  className=' h-[60px]' ></img>

     <img src={nike}  className=' h-[90px]' ></img>

     
     </div>
        
        </div>
  )
}

export default Card1