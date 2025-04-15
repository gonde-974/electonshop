import React from 'react';
import { useSelector } from 'react-redux';
import CardProductComponent from '../components/CardProductComponent';

function FavoritePage() {
  const { allFavoriteItems } = useSelector(state => state.favoriteStore);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🧡 Favorite Products
      </h1>

      {allFavoriteItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allFavoriteItems.map((fav, index) => (
            <CardProductComponent key={fav.id || index} product={fav} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritePage;
