import React, { useState } from 'react'
import Shoebox from './Shoebox';


<script src='./js/Scroll'></script>


function SliderTAb2 () {
  const [boxshow,setboxshow]=useState(false);
  const [price,setprice] = useState(6999)
  const [shoename,setshoename]=useState("NIKE SUPERFLEX");
  const [imgurl,seturl]=useState("https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  return (
    //MYR
    <div className=''>
        <div id='img-track'  className='  flex items-center justify-center pxoverflow-hidden object-fill '>
        {/* <img id="iimage" className='  object-[0] w-[30vmin] h-[56vmin] object-cover px-3' draggable="false" src=""/> */}
            <div>

            <img   id="imgg1" className='  object-[0] w-[30vmin] h-[56vmin] object-cover  'draggable="false"  src="https://images.unsplash.com/photo-1683148721867-03d1774b392c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHdpZGUlMjBwYW5vcmFtYXxlbnwwfHwwfHx8MA%3D%3D"/>
            <div onClick={()=>{setboxshow(!boxshow) ;setshoename("nikeee"); setprice(6800); seturl("https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") }} className='bg-white w-full  h-10 '></div>
            </div>
            <div className=' px-5'>
              
            <img id="imgg2" className='  object-[0] w-[30vmin]     h-[56vmin]  object-cover ' draggable="false" src="https://images.unsplash.com/photo-1592761944705-40d554de7b11?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div onClick={()=>{setboxshow(!boxshow); setprice(2);   seturl("https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");}} className='bg-white w-full h-10 '></div>
            </div>

            <div className=' px-5'>
            <img id="imgg3" className='  object-[0] w-[30vmin] h-[56vmin] object-cover ' draggable="false" src="https://images.unsplash.com/photo-1505121000079-2b276cdbf4fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0JTIwcGFub3JhbWF8ZW58MHx8MHx8fDA%3D"/>
              
            <div onClick={()=>{setboxshow(!boxshow) }} className='bg-white w-full  h-10 '></div>
            </div>

            <div className=' px-5'>
              
            <img id="imgg4" className='  object-[0] w-[30vmin]  translate-x-[-450%] scale-10 h-[56vmin] object-cover ' draggable="false" src="https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?q=80&w=3172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div onClick={()=>{setboxshow(!boxshow) }} className='bg-white w-full  translate-x-[-450%] h-10 '></div>
            </div>

            <div className=' px-5'>
            <img id="imgg5" className='  object-[0] w-[30vmin] h-[56vmin] object-cover ' draggable="false" src="https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=3165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div onClick={()=>{setboxshow(!boxshow) }} className='bg-white w-full  h-10 '></div>
            </div>

            <div className=' px-5'>

            
            <img id="imgg6" className='  object-[0] w-[30vmin] h-[56vmin] object-cover ' draggable="false" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div onClick={()=>{setboxshow(!boxshow) }} className='bg-white w-full  h-10 '></div>
            </div>
            
            <div className=' px-5'>

            <img id="imgg7" className='  object-[0] w-[30vmin]  h-[56vmin] object-cover ' draggable="false" src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <div onClick={()=>{setboxshow(!boxshow) }} className='bg-white w-full  h-10 '></div>
            </div>
            

        </div>
        <div > {boxshow?<div  > <Shoebox  price={price} name ={shoename} imgurl={imgurl} />   </div>:<div/>}</div>
        <div > 
            {
               window.onmousedown = e => {
                const d = document.getElementById('img-track');
           
              
                d.dataset.mousedownAt = e.clientX;
              
                window.onmousemove = e => {
                  if (d.dataset.mousedownAt === "0") return;
                  
                  const mouseDelta = parseFloat(d.dataset.mousedownAt) - e.clientX;
                  const maxDelta = window.innerWidth / 2;
                  const percent = (mouseDelta / maxDelta) * 100;
                  console.log(percent)
              
                  
                  d.dataset.currentPercent = (parseFloat(d.dataset.percentage) || 0) + percent;
                  
              
                 d.animate({

                   transform : `translate(${-d.dataset.currentPercent}%, 0%)`
                 },{ duration:1500,fill:'forwards'})

                  for(const image of d.getElementsByTagName("img")){
                    image.animate({

                      objectPosition: `${-d.dataset.currentPercent}% 50%`
                    }, { duration:2200,fill:'forwards'})
                  }
                };
              
                window.onmouseup = e => {
                  d.dataset.mousedownAt = "0";
                
                  d.dataset.percentage = d.dataset.currentPercent;
                }
               
              }
              
    
        
        }</div>
     
    </div>
  )
}

export default SliderTAb2;