// src/components/CountrySelector.js
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countries from '../assets/countries'; // Импортирај сортираната листа земји


function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage; // Пример: "en-US" или "mk-MK"
    const countryCode = userLocale.split('-')[1]; // Земете ја втората вредност

    const matchedCountry = countries.find(
      (country) => country.value.toLowerCase() === countryCode?.toLowerCase()
    );

    if (matchedCountry) {
      setSelectedCountry(matchedCountry);
    }
  }, []);

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-600">Испорака до</label>
      <Select
        options={countries}
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Одбери земја..."
        className="text-sm"
      />
    </div>
  );
}

export default CountrySelector;
