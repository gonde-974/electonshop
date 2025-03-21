import React from 'react';
import { CiLocationOn, CiDeliveryTruck } from "react-icons/ci";

function HeadingComponent() {
  return (
    <div className="heading-container">
        <h3 className="heading-text">Need help? Call us: (+38) 0234 456 789</h3>
        <div className="info-wrapper">
            <div className="info-block">
                <CiLocationOn className="icon" />
                <span>Our Store</span>
            </div>
            <div className="info-block">
                <CiDeliveryTruck className="icon" />
                <span>Track your order</span>
            </div>
        </div>
    </div>
  );
}

export default HeadingComponent;
