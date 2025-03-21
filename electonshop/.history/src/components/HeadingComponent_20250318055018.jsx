import React from 'react'

// ICONS
import { CiLocationOn } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";

function HeadingComponent() {
  return (
    <div className='container mx-auto'>
        <h3>Need help? Call us: (+38) 0234 456 789</h3>
        <div>
            <div>
                <CiLocationOn/>
                <span>Our Store</span>
            </div>
            <div>
                <CiDeliveryTruck/>
                <span>Truck your order</span>
            </div>
        </div>
    </div>
  )
}

export default HeadingComponent