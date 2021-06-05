import React from "react"
import FilmItem from "./FilmItem";
import Preloader from "../../Preloader/Preloader";

const Films = ({ films, filmsIcon }) => {

  return (
    <div className="films">
      <Preloader/>
      <ul className="film-list">
        {films.map(item => (
          <FilmItem key={item._id} title={item.title} duration={item.duration} image={item.image}
                    icon={filmsIcon}/>
        ))}
      </ul>
    </div>
  );
}

export default Films
