import React from 'react'

// ICONS
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

function HeadingComponent() {
  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between h-[70px] gap-[10px]'>
        <h3 className='text-blackTextColor'>Need help? Call us: (+38) 070 353 237</h3>
        <div className='flex items-center gap-[16px]'>
            <div className='flex items-center gap-[5px]'>
                <CiLocationOn color="black" size={25}/>
                <span>Our Store</span>
            </div>
            <div className='flex items-center gap-[5px]'>
                <CiDeliveryTruck color="black" size={25}/>
                <span>Truck your order</span>
            </div>
        </div>
    </div>
  )
}

export default HeadingComponent