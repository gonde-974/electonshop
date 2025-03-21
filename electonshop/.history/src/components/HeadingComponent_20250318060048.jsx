import React from 'react'

// ICONS
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

function HeadingComponent() {
  return (
    <div className='container mx-auto flex flex-col md:flex-row justify-center items-center md:justify-between'>
        <h3>Need help? Call us: (+38) 0234 456 789</h3>
        <div>
            <div className='flex items-center gap-[5px]'>
                <CiLocationOn/>
                <span>Our Store</span>
            </div>
            <div className='flex items-center gap-[5px]'>
                <CiDeliveryTruck/>
                <span>Truck your order</span>
            </div>
        </div>
    </div>
  )
}

export default HeadingComponent