import React from 'react'
import { useSelector } from 'react-redux'
import CardProductComponent from '../components/CardProductComponent';


function FavoritePage() {
  const {allFavoriteItems} = useSelector(state=>state.favoriteStore)
  console.log(allFavoriteItems);
  
  return (
    <div>
      <h1>Favorite Page</h1>
      {allFavoriteItems.map((fav, index) => (
                        <CardProductComponent key={fav.id || index} fav={product} activeView={activeView} />
                    ))}
    </div>
  )
}

export default FavoritePage