import React from 'react'
import { useSelector } from 'react-redux'
import CardProductComponent from '../components/CardProductComponent';


function FavoritePage() {
  const {allFavoriteItems} = useSelector(state=>state.favoriteStore)
  
  
  return (
    <div>
      <h1>Favorite Page</h1>
      {allFavoriteItems.map((fav, index) => (
                        <CardProductComponent key={fav.id || index} product={fav} activeView={activeView} />
                    ))}
    </div>
  )
}

export default FavoritePage