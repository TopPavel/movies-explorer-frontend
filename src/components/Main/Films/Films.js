import React from "react"
import FilmItem from "./FilmItem";
import FavoriteIcon from "./FavoriteIcon";
import { duration } from "../../../utils/utils";

const Films = ({ films, onClickFavorite, onDeleteFavorite }) => {

  return (
    <div className="films">
      <ul className="film-list">
        {films?.map(item => (
          <FilmItem key={item.movieId}
                    title={item.nameRU}
                    duration={duration(item.duration)}
                    image={item.image}
                    trailer={item.trailer}
                    icon={<FavoriteIcon film={item} onClickFavorite={onClickFavorite}
                                        onDeleteFavorite={onDeleteFavorite}/>}
          />
        ))}
      </ul>
    </div>
  );
}

export default Films
