import React from 'react'
import { HiHome } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
    return (
    
    <div className=' h-screen w-screen justify-center items-center overflow-hidden'>
        <div className=' border-y-2 py-4 px-6 text-4xl'>YARD </div>
        <div  className=' absolute top-0 right-0 p-7 '><HiHome onClick={()=>{ navigate('/home')}}  size={30}/></div>

        <div className=' h-screen overflow-hidden w-screen flex justify-between p-10'>
            <div className='w-1/2'> 
                <div className=' p-5 text-lg borde border-yb-2'>Select delivery address</div>
                <div className=' p-5 text-lg borde border-y-2'>Payment Method </div>
                <div className=' p-5 text-lg borde border-y-2'>Checkout</div>
                

            </div>
            <div className=' w-[570px] flex justify-center'> 
                <div className=' p-16 w-[500px] bg-black rounded-xl  text-white'>
                    <div className=' text-lg text-center'>Checkout</div>
                    <div className='p-2  text pt-36 pt-'>
                        Order Summary
                    </div>
                        <div className=' px-10 text-sm text-gray-200 p-2 border-y-2 border-y-gray-700'> items:</div>
                        <div className=' px-10 text-sm text-gray-200   p-2 border-y-2 border-y-gray-700'>Delivery:</div>

                    <div className=' w-full flex justify-between py-40  px-2  font-palanquin  text-2xl'>
                       <div className=''>Order Total</div>
                       <div className=''> Rs 399.00</div>

                    </div>
                    {/* <div className='  text-center'> BUY NOW</div> */}

                </div>
            </div>    
        </div>
    </div>
  )
}

export default Checkout