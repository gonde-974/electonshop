import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countries from '../assets/countries';

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage; // пример: "en-US" или "mk-MK"
    const countryCode = userLocale.split('-')[1]; // земи ја втората вредност

    const matchedCountry = countries.find(
      (country) => country.value.toLowerCase() === countryCode?.toLowerCase()
    );

    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  }, []);

  return (
    <div className='mb-6'>
      <label className='block mb-2 text-sm font-medium text-gray-600'>Deliver to</label>
      <Select
        options={countries}
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Select country..."
        className='text-sm'
      />
    </div>
  );
}

export default CountrySelector;
