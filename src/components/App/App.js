import React, { useEffect, useState } from "react";
import '../../index.css';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import logo from './../../images/logo.svg'
import Page from "../Page/Page";
import NavMenu from "../NavMenu/NavMenu";
import MainPage from "../../pages/MainPage";
import MoviePage from "../../pages/MoviesPage";
import filmImage from "../../images/film-card.jpg"
import FavoriteIcon from "../Main/Films/FavoriteIcon";
import SavedMoviesPage from "../../pages/SavedMoviesPage";
import DeleteIcon from "../Main/Films/DeleteIcon";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import { configureAnchors } from 'react-scrollable-anchor'

const initialFilms = [
  { _id: 1, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 2, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 3, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 4, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 5, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 6, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 7, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 8, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 9, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 10, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 11, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 12, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
]

const initialSavedFilms = [
  { _id: 4, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 5, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 6, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 7, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
  { _id: 12, title: "33 слова о дизайне", duration: "1ч 47м", image: filmImage },
]

const App = () => {
  const history = useHistory();
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [films, setFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState([]);
  configureAnchors({ offset: -60, scrollDuration: 200 })

  useEffect(() => {
    loadInitialFilms();
    loadSavedFilms();
  }, []);
  const loadInitialFilms = () => {
    setFilms(initialFilms);
  }

  const loadSavedFilms = () => {
    setSavedFilms(initialSavedFilms);
  }

  useEffect(() => {
    const handleCloseMenu = (event) => {
      if (event.key === 'Escape') {
        handleMenuClose();
      }
    }

    if (isOpenedMenu) {
      document.addEventListener('click', handleMenuCloseByOverlay);
      document.addEventListener('keydown', handleMenuClose);
    }

    return () => {
      document.removeEventListener('keydown', handleMenuClose);
      document.removeEventListener('click', handleMenuCloseByOverlay);
    }

  }, [isOpenedMenu]);

  const handleMenuClose = (e) => {
    setIsOpenedMenu(false);
  }

  const handleMenuCloseByOverlay = (e) => {
    console.log(Array.from(e.target.classList).some((el) => el.startsWith('nav-menu')));
    if (!Array.from(e.target.classList).some((el) => el.startsWith('nav-menu'))) {
      handleMenuClose();
    }
  }

  const handleMenuClick = (value) => {
    console.log(value);
    setIsOpenedMenu(value);
  }

  const loadMoreFilms = (e) => {
    e.preventDefault();
    setFilms([{
      _id: `${films.length + 1}`,
      title: "33 слова о дизайне",
      duration: "1ч 47м",
      image: filmImage
    }, ...films]);
  }

  const handleClickFavorite = () => {

  }

  return (
    <Page>
      <Header logo={logo} menuIsActive={isOpenedMenu} onClickMenu={handleMenuClick}/>
      <Switch>
        <Route exact strict path={"/"}>
          <MainPage/>
        </Route>
        <Route path={"/movies"}>
          <MoviePage films={films} onLoadMore={loadMoreFilms} filmsIcon={<FavoriteIcon/>}/>
        </Route>
        <Route path={"/saved-movies"}>
          <SavedMoviesPage films={savedFilms} filmsIcon={<DeleteIcon/>}/>
        </Route>
        <Route path={"/sign-up"}>
          <Register/>
        </Route>
        <Route path={"/sign-in"}>
          <Login/>
        </Route>
        <Route path={"/profile"}>
          <Profile/>
        </Route>
        <Route path={"*"}>
          <NotFound/>
        </Route>
      </Switch>
      <NavMenu isOpened={isOpenedMenu} onClickByLink={handleMenuClick}/>
      <Footer/>
    </Page>
  );
}

export default App;
