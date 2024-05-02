import React from 'react'
import {a,b} from '../components/js/imagesrc'

function Shoebox() {

    
  return (
    <div className='h-screen w-screen  fixed  translate-x-[-55%] translate-y-[-20%] bg-black top-0 backdrop-blur-xl    bg-opacity-50 flex flex-col justify-center items-center '> 
    <div className=' w-1/2 bg-  h-3/4 rounded-2xl text-white  flex select-none  bg-opacity-50  backdrop-blur-xl   ' >
              <div className=' w-1/2 shadow-sm'>
                <img className='w-full h-full object-cover  ' draggable="false"  src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
              </div>
              <div className='py-5 px-10   bg-white  text-black w-1/2 flex flex-col'>
                    <div className=' font-sans text-center text-4xl      text-black   font-thin   '>
                        NIKE AIRMAX 3
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


                        <div className=' bg-black text-white p-2 w-[150px]  rounded absolute left-0 text-center bottom-0 hover:cursor-pointer '> ADD TO CART</div>
                    </div>

              </div>
              
    </div>
    </div>
  )
}

export default Shoebox