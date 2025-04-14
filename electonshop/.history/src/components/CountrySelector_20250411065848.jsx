
import React, { useState } from 'react'
import Select from 'react-select'
import countries from '../countries'// патот ако е во src/countries.js

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div className='mb-6'>
      <label className='block mb-2 text-sm font-medium text-gray-600'>Избери земја</label>
      <Select
        options={countries}
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Одбери земја..."
        className='text-sm'
      />
    </div>
  );
}

export default CountrySelector;
