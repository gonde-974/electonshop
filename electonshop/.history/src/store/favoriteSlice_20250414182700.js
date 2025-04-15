import React from 'react';
import { useSelector } from 'react-redux';

function FavoritePage() {
  const { allFavoriteItems } = useSelector(state => state.favoriteStore);

  console.log("FAVORITES:", allFavoriteItems); // Проверка

  return (
    <div>
      <h1>Favorite Items</h1>
      <ul>
        {allFavoriteItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritePage;
