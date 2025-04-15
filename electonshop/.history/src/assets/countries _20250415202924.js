// src/countries.js

const countries = [
  { label: "🇲🇰 Македонија", value: "MK" },
  { label: "🇷🇸 Србија", value: "RS" },
  { label: "🇧🇬 Бугарија", value: "BG" },
  { label: "🇩🇪 Германија", value: "DE" },
  { label: "🇬🇧 Велика Британија", value: "GB" },
  { label: "🇫🇷 Франција", value: "FR" },
  { label: "🇮🇹 Италија", value: "IT" },
  { label: "🇬🇷 Грција", value: "GR" }
];

// 👉 Функција која ги сортира државите по `label` (азбучно)
function sortCountries(list) {
  return list.slice().sort((a, b) => a.label.localeCompare(b.label, 'mk'));
}

export default sortCountries(countries);
