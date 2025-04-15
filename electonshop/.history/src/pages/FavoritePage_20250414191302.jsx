import React from 'react'
import { useSelector } from 'react-redux'
import CartComponent from './components/CartComponent'

function FavoritePage() {
  const {allFavoriteItems} = useSelector(state=>state.favoriteStore)
  console.log(allFavoriteItems);
  
  return (
    <div>
      <h1>Favorite Page</h1>
      {allFavoriteItems.map((fav)=>{
        return (
          <CartComponent 
          key = {fav.id}
          activeView={activeView}
          product={fav}/>
        )
      })}
    </div>
  )
}

export default FavoritePage