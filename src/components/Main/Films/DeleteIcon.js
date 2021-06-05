import React, { useState } from "react"

const DeleteIcon = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleDeleteFavorite = (e) => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div onClick={handleDeleteFavorite}
         className={`film-info__favorite film-info__favorite_delete`}/>
  );
}

export default DeleteIcon
