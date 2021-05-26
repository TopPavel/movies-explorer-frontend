import React from "react"
import SearchBar from "../components/Main/SerchBar/SearchBar";
import Films from "../components/Main/Films/Films";
import LoadButton from "../components/Main/LoadButton/LoadButton";

const MoviePage = ({ films, filmsIcon, onLoadMore }) => {

  return (
    <>
      <main>
        <SearchBar/>
        <Films films={films} filmsIcon={filmsIcon}/>
        <LoadButton onClick={onLoadMore}/>
      </main>
      {/*<Footer/>*/}
    </>
  );
}

export default MoviePage
