import React, { useState } from "react"

const FavoriteIcon = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleIsFavoriteClick = (e) => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div onClick={handleIsFavoriteClick}
         className={`film-info__favorite ${isFavorite && 'film-info__favorite_active'}`}/>
  );
}

export default FavoriteIcon
