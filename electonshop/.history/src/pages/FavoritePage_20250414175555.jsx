import React from 'react'
import { useSelector } from 'react-redux'

function FavoritePage() {
  const {allFavoriteItems} = useSelector(state=>state.favoriteStore)
  console.log(allFavoriteItems);
  
  return (
    <div>FavoritePage</div>
  )
}

export default FavoritePage