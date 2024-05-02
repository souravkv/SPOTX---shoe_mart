import React, { useEffect, useState } from 'react'
import bas from '../assets/basket.mp4'
import { FiMenu} from "react-icons/fi";
import {a , b} from '../components/js/imagesrc'



import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderTAb from './SliderTAb';
import ShopCart from './ShopCart';
import pic from '../assets/images/aswin.jpg'
import Shoebox from './Shoebox';

function New() {


    const [topmenu,settopmenu] =useState(false)
    const [boxshow,setboxshow]=useState(false);

    
    

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    let ele = useRef(null);
    let ele2 = useRef(null);
    let cart1 =useRef(null);
    let scroll1 =useRef(null);
    const tl =gsap.timeline({repeat:-1,yoyo:true})
    let sl =gsap.timeline({
      scrollTrigger:{
        trigger:"#welcome",
        start:"+=350",
        end:"bottom bottom",
        
      }
      
    });



useGSAP(() => {
   
    gsap.from (ele, { duration: 2 ,y:"6rem",opacity:0,delay:0.2,ease:"power3.inOut"}); 

    
    sl.from(ele2,{opacity:0,duration:4,y:"8rem"})
     gsap.from(cart1,{opacity:10,duration:5  })

      gsap.from(scroll1,{scrollTrigger:scroll1, start:"+=370" ,end:"bottom bottom"  ,opacity:0,duration:3,x:"6rem"})

}, { scope: ele }); 



  return (
       <div className='bg-black  fixe h-[300vh] w-[100vw]  text-white'>
   
       

        <video className='   top-0  h-[670px] w-full object-cover' loop autoPlay  src={bas}></video>
       
          <div ref={el=>{ele=el}} className=' font-mono  absolute   text-white  mix-blend-difference text-[150px] translate-y-[-30px]    top-0 left-0 '>YARD </div>
            <div className='fixed  flex flex-col p-5 items-end w-screen top-0 z-40'>
              <FiMenu size={'30px'}  onClick={()=>{ settopmenu(!topmenu)}} />
            </div>

       <div ref={(e)=>{cart1=e}}>
        
        <ShopCart r  hide={topmenu}/>
       </div>


     
        <div id='welcome' ref={el=>{ele2=el}}  className='text-yellow    top-[700px] text-white   text-[200px]'> Welcome to our store
        
         </div>
        
        <div ref={el=>{scroll1=el}}  className='  relative   left-1/2  translate-x-[-20%]  w-[300vh]'>
            <SliderTAb />
        </div>
        
        <div>
        {/* <Shoebox/> */}
        
        </div>

        <div >
          
    

        </div>

    </div>
    
  )
}
{/* <div ref={el=>{ele=el}} className=' font-mono  text-white  mix-blend-difference text-[150px] translate-y-[-30px]    top-0 left-0 '>YARD </div> */}

export default New