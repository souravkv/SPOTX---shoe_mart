import React, { useState } from 'react'
import {a,b} from '../components/js/imagesrc'
import { cartItems } from './js/Items';

function Shoebox({name , imgurl,price}) {
  const [show,setshow] = useState(true);

    
  return (

    show?



    <div onClick={()=>{setshow(!show)}} className=' h-screen w-screen  fixed  translate-x-[-18.3%] translate-y-[-20%] bg-black top-0 left-0 backdrop-blur-xl    bg-opacity-50 flex flex-col justify-center items-center '> 
    <div onClick={(e)=>{e.stopPropagation() }} className=' w-1/2   h-3/4 rounded-2xl text-white  flex select-none  bg-opacity-50  backdrop-blur-xl   ' >
              <div className=' w-1/2 shadow-sm'>
                <img className='w-full h-full object-cover  ' draggable="false"  src={imgurl}/>
              </div>
              <div className='py-5 px-10   bg-white  text-black w-1/2 flex flex-col'>
                    <div className=' font-sans text-center text-4xl      text-black   font-thin   '>
                       {name}
                    </div>
                    <div className='  pt-10  relative  h-full '>
                            {/* //price */}
                        <div className='  text-gray-500 text-sm   ' >MRP</div>
                        <div className=' font-bold font-mono te'> Rs 7999/-</div>
                        <div> 
                            <div className=' text-sm text-gray-500 pb-1 pt-5'>select size</div>
                            <table className=' text-center  table-auto  border    border-black border-collapse'>
                                <tr>
                                    <td className=' border border-black p-2  hover:bg-black  hover:text-white hover:cursor-pointer'>6.0</td>
                                    <td className=' border hover:bg-black  hover:text-white border-black p-2  hover:cursor-pointer'>6.5</td>
                                    <td className=' border border-black p-2  hover:bg-black  hover:text-white hover:cursor-pointer'>7.0</td>
    
                                
                                </tr>
                                <tr>
                                    <td className=' p-2 border border-black hover:bg-black  hover:text-white hover:cursor-pointer'>7.5</td>
                                    <td className=' p-2 border border-black hover:bg-black  hover:text-white hover:cursor-pointer'>8.0</td>
                                    <td className=' p-2 border border-black hover:bg-black  hover:text-white hover:cursor-pointer'>9.0</td>
    

                                </tr>

                            </table>
                        </div>


                        <div  onClick={()=>{ cartItems.push({id:0,name:name ,price:price }); console.log(cartItems[1])} } className='  bg-black text-white p-2 w-[150px]  rounded absolute left-0 text-center bottom-0 hover:cursor-pointer '> ADD TO CART</div>
                    </div>

              </div>
              
              
    </div>
    </div>:<div></div>
  )
}

export default Shoebox