import React from 'react'
import {cartItems} from './js/Items'
import {a,b} from '../components/js/imagesrc'

function ShopCart({hide}) {
   

  return (
    hide?
    <div className=' absolute top-0 left-0  bg-black bg-opacity-80   w-screen h-screen  z-30 flex flex-col justify-center items-center'>
        <div className='  bg-white  text-blue-800 text-opacity-100 p-4'>
        CART

        {cartItems.map((product)=>{
            return(
            <div className='flex  justify-between p-5 text-red-500 w-[300px]'>

            <div> {product.name}</div>
            <div>{product.id}</div>
            </div>
            )
        })}

        </div>
    </div>
    :<div></div>
  )
}

export default ShopCart