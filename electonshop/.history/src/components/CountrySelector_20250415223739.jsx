import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countries from '../assets/countries.js';
import { useSelector } from 'react-redux';

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [productPriceUSD, setProductPriceUSD] = useState(0);

  const { totalPice } = useSelector(state => state.cartStore);
  console.log(totalPice);
  
  

  // useEffect(() => {
  //   if (product && product.price) {
  //     setProductPriceUSD(product.price);
  //   }
  // }, [product]);

  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage;
    const countryCode = userLocale.split('-')[1];

    const matchedCountry = countries.find(
      (country) => country.value.toLowerCase() === countryCode?.toLowerCase()
    );

    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  }, []);

  const handleChange = (country) => {
    setSelectedCountry(country);
    setShowAlert(true);
  };

  const confirmOrder = () => {
    alert(`✅ Order confirmed for ${selectedCountry.label}!`);
    setShowAlert(false);
  };

  const getConvertedPrice = (country) => {
    return (productPriceUSD * country.exchangeRate).toFixed(2);
  };

  return (
    <div className="mb-6 relative">
      <label className="block mb-2 text-sm font-medium text-gray-700">Ship to</label>
      <Select
        options={countries}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Select a country..."
        className="text-sm"
      />

      {showAlert && selectedCountry && (
        <div className="absolute top-full left-0 mt-4 w-full bg-white border border-gray-300 rounded-lg shadow-md p-4 z-50">
          <h3 className="font-semibold mb-2">Delivery Information</h3>
          <p><strong>Country:</strong> {selectedCountry.label}</p>
          <p><strong>Region:</strong> {selectedCountry.region}</p>
          <p><strong>Delivery Time:</strong> {selectedCountry.deliveryTime}</p>
          <p><strong>Currency:</strong> {selectedCountry.currency}</p>
          <p><strong>Price in USD:</strong> ${totalPice}</p>
          <p><strong>Converted Price:</strong> {getConvertedPrice(selectedCountry)} {selectedCountry.currency}</p>

          <button
            onClick={confirmOrder}
            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
