import React, { useEffect, useState } from 'react'
import bas from '../assets/basket.mp4'
import { FiMenu} from "react-icons/fi";
import {a , b} from '../components/js/imagesrc'



import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderTAb from './SliderTAb';
import SliderTAb2 from './SliderTAb2';
import ShopCart from './ShopCart';
import pic from '../assets/images/aswin.jpg'
import Shoebox from './Shoebox';
import NavBar from './NavBar';
import { motion } from "framer-motion"
import LocomotiveScroll from 'locomotive-scroll';
import Card1 from './Card1';

function New() {


    const [topmenu,settopmenu] =useState(false)
    const [boxshow,setboxshow]=useState(false);

    
    

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    let ele = useRef(null);
    let ele2 = useRef(null);
    let cart1 =useRef(null);
    let scroll1 =useRef(null);
    let nav1 =useRef(null);

    // const tl =gsap.timeline({repeat:-1,yoyo:true})
    // let sl =gsap.timeline({
    //   scrollTrigger:{
    //     trigger:"#welcome",
    //     start:"+=350",
    //     end:"bottom bottom",
        
    //   }
      
    // });



useGSAP(() => {
   
    gsap.from (ele, { duration: 2 ,y:"6rem",opacity:0,delay:0.2,ease:"power3.inOut"}); 

    
    // sl.from(ele2,{opacity:0,duration:4,y:"8rem"})
     gsap.from(cart1,{opacity:10,duration:5  })
     gsap.from(ele2,{opacity:0,duration:1,x:"6rem"})
     gsap.from(nav1 ,{opacity:0,duration:1})
     
      gsap.from(scroll1,{scrollTrigger:{ start:"+=850" ,end:"bottom bottom" } ,opacity:0,duration:3,x:"6rem"})

}, { scope: ele }); 


const  locomotiveScroll  = new  LocomotiveScroll();



  return (
       <div className='  h-[300vh] w-[100vw] bg-black  text-white'> 
        <div ref={el=>{nav1=el}}  >

             <NavBar/>
        </div>
   
       

        <video data-sc roll  data-scroll-speed="-0.3" className='    top-0  h-[670px] w-full object-cover' loop autoPlay  src={bas}></video>
       
          <div ref={el=>{ele=el}} className=' font-mono  absolute   text-white  mix-blend-difference text-[200px] translate-y-[-30px]  z-50  top-14 tracking-tighter left-0 p-4'>SPOTX</div>
            <div className='fixed flex  hover:cursor-pointer  right-0 justify-end flex-col p-5 items-end   top-2 z-40'>
              <FiMenu size={'30px'}  onClick={()=>{ settopmenu(!topmenu)}} />
            </div>

       <div ref={(e)=>{cart1=e}}>
        
        <ShopCart r  hide={topmenu}/>
       </div>


     <div  data-scroll  data-scroll-speed="" className='  bg-black flex w-[400vw] '>

        <motion.div initial={{x:"0"}} animate={{x:"-30%"}} transition={{repeat:Infinity,duration:20,transition:"linear"}}  id='welcome' ref={el=>{ele2=el}}  className='text-yellow pb-40 bg-black  tracking-tighter   top-[700px] text-white w-full font-semibold       text-[100px]'> Welcome to our store Welcome to our store Welcome to our store Welcome to our store
        
         </motion.div>
        

     </div>
     
        
       
        <div>
        {/* <Shoebox/> */}
        
        </div>

        <div  data-scroll  data-scroll-speed="1.6 "  className='  absolute z-40  translate-y-[-50%]'>
          
        <Card1 back="bg-[#B4E140]" desc="Welcome to SPoTX, your ultimate destination for footwear enthusiasts! SPoTX prides itself on curating a unique collection of footwear that seamlessly integrates cutting-edge design concepts with the timeless appeal of classic styles. Our website is more than just a shopping platform; it's a haven for those who appreciate the artistry and craftsmanship behind every pair of shoes."/>
    

        </div>
        <div className='  -z-30 bg-black w-screen h-[200px] translate-y-[0%] '>

    {/* <img className=' w-full h-10' src='https://images.unsplash.com/photo-1708920920603-cdcc304b8833?q=80&w=2718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img> */}
        </div>

        <div className='  h-[240px] px-10 text-8xl translate-y-[-50%]  hover:opacity-60 hover:cursor-pointer'>OUR COLLECTION</div>

        <div ref={el=>{scroll1=el}}  className=' bg-black  relative  left-1/2   translate-x-[-20%]  translate-y-[-40%] w-[300vh]'>
            <SliderTAb />
        </div>
       <div className=' border-b-2  border-zinc-600 h-1'></div>
       <div className='  p-10  text-4xl  font-thin  text-gray-500 leading-6' > WHAT I HAVE USED</div>
       <div className='  text-3xl font-thin flex justify-evenly items-center'>

       <div className=' px-20 py-20'>ReactJS</div>
       <div className=' px-20 py-20'>Tailwin CSS</div>
       <div className=' px-20 py-20'>Locomotive</div>
       <div className=' px-20 py-20'>Framer-motion</div>
       <div className=' px-20 py-20'>GSAP</div>
       </div>

         
    </div>
    
  )
}
{/* <div ref={el=>{ele=el}} className=' font-mono  text-white  mix-blend-difference text-[150px] translate-y-[-30px]    top-0 left-0 '>YARD </div> */}

export default New