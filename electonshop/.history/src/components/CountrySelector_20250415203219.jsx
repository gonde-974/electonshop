import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countries from '../assets/countries '; // Импортирај не-сортирана листа земји

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Сортирање на земјите при првото рендерирање на компонентата
  useEffect(() => {
    const sortedCountries = countries.slice().sort((a, b) => a.label.localeCompare(b.label, 'mk'));
    setSelectedCountry(sortedCountries);
  }, []);

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-600">Испорака до</label>
      <Select
        options={selectedCountry} // користиме сортирана листа тука
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Одбери земја..."
        className="text-sm"
      />
    </div>
  );
}

export default CountrySelector;
