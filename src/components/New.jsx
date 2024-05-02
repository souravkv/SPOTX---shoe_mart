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
    const tl =gsap.timeline({repeat:-1,yoyo:true})
    let sl =gsap.timeline({
      scrollTrigger:{
        trigger:"#welcome",
        start:"+=100",
        end:"bottom bottom"
      }
    });



useGSAP(() => {
   
    gsap.from (ele, { duration: 2 ,y:"3rem",opacity:0,delay:0.2,ease:"power3.inOut"}); 

    // gsap.from(ele2,{opacity:0 ,duration:2,delay:1,y:"6rem"})
    // tl.from(ele2,{x:"-2rem",duration:2})
    sl.from(ele2,{opacity:0,duration:4,y:"6rem"})
  // gsap code here...


}, { scope: ele }); // <-- scope is for selector text (optional)



  return (
       <div className='bg-black  fixe h-[300vh] w-[100vw]  text-white'>
   
       
  
        <video className='   top-0  h-[670px] w-full object-cover' loop autoPlay  src={bas}></video>
       
          <div ref={el=>{ele=el}} className=' font-mono  absolute   text-white  mix-blend-difference text-[150px] translate-y-[-30px]    top-0 left-0 '>YARD </div>
            <div className='absolute  flex flex-col p-5 items-end w-screen top-0 z-40'>
              <FiMenu size={'30px'}  onClick={()=>{ settopmenu(!topmenu)}} />
            </div>

        <ShopCart hide={topmenu}/>


     
        <div id='welcome' ref={el=>{ele2=el}}  className='text-yellow    top-[700px] text-white   text-[200px]'> Welcome to our store
        
         </div>
        <div className=' text-white  py-11'> no</div>
        <div className='  relative   left-1/2  translate-x-[5%]  w-full'>
            <SliderTAb/>
        </div>
        <img id='nose' className='w-[200px] h-[200px]  object-cover' onClick={()=>{}} src={a}></img>
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