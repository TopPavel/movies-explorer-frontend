import React from "react"
import SearchBar from "../components/Main/SerchBar/SearchBar";
import Films from "../components/Main/Films/Films";

const SavedMoviesPage = ({ films, filmsIcon }) => {
  return (
    <>
      <main>
        <SearchBar/>
        <Films films={films} filmsIcon={filmsIcon}/>
        <div style={{ width: "100%", height: "140px" }}/>
      </main>
      {/*<Footer/>*/}
    </>
  );
}

export default SavedMoviesPage
