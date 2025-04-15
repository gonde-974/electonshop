import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import countries from '../assets/countries'; // патека до твојот .js со земји

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);

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

    alert(`📦 Испорака до: ${country.label}
🌍 Регион: ${country.region}
⏱ Времетраење на испорака: ${country.deliveryTime}
💱 Валута: ${country.currency}
💵 Вредност во USD: ${country.valueInUSD}`);
  };

  const confirmOrder = () => {
    if (selectedCountry) {
      alert(`✅ Нарачката е потврдена за ${selectedCountry.label}!`);
    } else {
      alert("⛔ Избери земја пред да ја потврдиш нарачката.");
    }
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-sm font-medium text-gray-700">Испорака до</label>
      <Select
        options={countries}
        value={selectedCountry}
        onChange={handleChange}
        placeholder="Одбери земја..."
        className="text-sm"
      />

      <button
        onClick={confirmOrder}
        className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
      >
        Потврди нарачка
      </button>
    </div>
  );
}

export default CountrySelector;
