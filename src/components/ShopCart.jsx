import React from 'react'
import {cartItems} from './js/Items'
import {a,b} from '../components/js/imagesrc'
import { useNavigate } from 'react-router-dom'

function ShopCart({hide}) {

const navigate =useNavigate();
   

  return (
    hide?
    <div className=' fixed top-0 left-0   bg-black bg-opacity-80   w-screen h-screen  z-30 flex flex-col justify-center items-center'>
      <div className=' text-white -rotate-90  text-8xl translate-x-[-140%]  translate-y-[180%] font-bold z-20 overflow-hideen'>CART</div>
    
        
        <div className='  bg-white w-[600px] h-[500px]  overflow-scroll rounded-md text-blue-800  text-opacity-100 p-4'>
        <div className=' w-[570px] flex  bg-white bg-opacity-100 py-3 px-10 absolute justify-between '>
        <div className=' px-6 font-thin font  text-xl'>Product</div>
        <div className=' px-6 font-thin font  text-xl'>Price</div>
      </div>
          
        

        {cartItems.map((product)=>{
            return(
            <div className='flex  w-full  h-[70px] justify-between p-5 text-gray-600  border-y-2 '>

            <div> {product.name}</div>
            <div>{product.price}</div>

            
            </div>

            )
        })}
        <div  onClick={()=>{navigate("/checkout") }} className=' absolute top-[75%] bg-black text-white w-[200px]  shadow-2xl hover:text-black hover:bg-gray-300 hover:border hover:border-black  justify-end items-end p-2 rounded-md font-mono  hover:cursor-pointer text-center'>Checkout </div>
        </div>
    </div>
    :<div></div>
  )
}

export default ShopCart