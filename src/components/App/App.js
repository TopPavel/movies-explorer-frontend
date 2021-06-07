import React, { useEffect, useState } from "react";
import '../../index.css';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import logo from './../../images/logo.svg'
import Page from "../Page/Page";
import NavMenu from "../NavMenu/NavMenu";
import MainPage from "../../pages/MainPage";
import MoviePage from "../../pages/MoviesPage";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import { configureAnchors } from 'react-scrollable-anchor'
import { CurrentUserContext } from "../context/CurrentUserContext";
import mainApi from "../../utils/mainApi";
import ProtectedRoute from "../ProtectedRoute";
import UnauthorizedRoute from "../UnauthorizedRoute";
import movieApi from "../../utils/movieApi";
import { mapFilms, searchFilms } from "../../utils/utils";

const App = () => {
  const history = useHistory();
  const [isOpenedMenu, setIsOpenedMenu] = useState();
  const [films, setFilms] = useState([]);
  const [savedFilms, setSavedFilms] = useState(undefined);
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(true);
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth)
  configureAnchors({ offset: -60, scrollDuration: 200 });

  useEffect(() => {
    setFilms(JSON.parse(localStorage?.getItem('films')));
    getCurrentUserFromTokenWithCheck()
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem('films', JSON.stringify(films))
  }, [films]);

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

  const handleResize = () => {
    setTimeout(() => {
      setClientWidth(document.documentElement.clientWidth);
    }, 1000)
  }


  const loadSavedFilmsByUser = (user) => {
    mainApi.getSavedMovies()
      .then(items => {
        const sFilms = items.data?.filter(item => item?.owner === user?._id)
          ?.map(i => {
            i.isFavorite = true
            return i
          })
        localStorage.setItem('savedMovies', JSON.stringify(sFilms))
        const lastSearch = localStorage.getItem('savedFilmsSearched')
        if (lastSearch === null) {
          setSavedFilms(sFilms)
        } else {
          setSavedFilms(JSON.parse(lastSearch))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  function getCurrentUserFromTokenWithCheck() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainApi.getContent()
        .then(res => {
          if (res) {
            setLoggedIn(true)
            setCurrentUser(res.data);
            loadSavedFilmsByUser(res.data)
            setFilms(JSON.parse(localStorage?.getItem('films')));
          }
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false)
        });
    } else {
      setLoggedIn(false)
    }
  }

  const handleMenuClose = (e) => {
    setIsOpenedMenu(false);
  }

  const handleMenuCloseByOverlay = (e) => {
    if (!Array.from(e.target.classList).some((el) => el.startsWith('nav-menu'))) {
      handleMenuClose();
    }
  }

  const handleMenuClick = (value) => {
    setIsOpenedMenu(value);
  }

  const handleClickFavorite = (data) => {
    if (!data._id && data.isFavorite) {
      return handleFavoriteClick(data)
    } else {
      return handleDeleteFavoriteClick(data)
    }
  }

  const handleFavoriteClick = (data) => {
    return mainApi.saveMovie(data)
      .then(resp => {
        resp.data.isFavorite = true
        localStorage.setItem(
          'savedMovies',
          JSON.stringify([...JSON.parse(localStorage.getItem('savedMovies')), resp.data])
        )
        const newFilms = JSON.parse(localStorage.getItem('films'))
          .map(f => {
              if (f.movieId === data.movieId) {
                f.isFavorite = data.isFavorite
                return f
              }
              return f
            }
          )
        localStorage.setItem('films', JSON.stringify(newFilms))
        setSavedFilms(JSON.parse(localStorage.getItem('savedMovies')))
        return true
      })
      .catch(err => {
        console.log(err)
        return false
      })
  }

  const handleDeleteFavoriteClick = (data) => {
    const movieForDelete = JSON.parse(localStorage.getItem('savedMovies'))
      .find((i) => data.movieId === i.movieId)
    return mainApi.deleteMovie(movieForDelete)
      .then(resp => {
          localStorage.setItem('savedMovies', JSON.stringify(JSON.parse(localStorage.getItem('savedMovies'))
            .filter(i => i.movieId !== data.movieId)))
          setSavedFilms(savedFilms?.filter(i => i.movieId !== data.movieId))
          const films = localStorage.getItem('films')
          if (films !== 'null') {
            const newFilms = JSON.parse(films)
              ?.map(f => {
                  if (f.movieId === data.movieId) {
                    f.isFavorite = data.isFavorite
                    return f
                  }
                  return f
                }
              )
            localStorage.setItem('films', JSON.stringify(newFilms))
            return false
          }
        }
      )
      .catch(err => {
          console.log(err)
          return true
        }
      )
  }

  const deleteSavedMovie = (data) => {
    return handleDeleteFavoriteClick(data)
      .then(() => {
        const films = localStorage.getItem('films')
        if (films !== 'null') {
          setFilms(JSON.parse(localStorage.getItem('films')))
        }
      })

  }

  const filmsByFilter = (filter) => {
    movieApi.getAllFilms()
      .then(data => {
          return mapFilms(data, JSON.parse(localStorage.getItem('savedMovies')), currentUser._id).filter((item) => {
            return searchFilms(item, filter)
          })
        }
      ).then(items => {
      setFilms(items)
    })
    return films
  }

  const searchSavedFilms = (filter) => {
    const searchedFilms = JSON.parse(localStorage.getItem("savedMovies")).filter((item) => {
      return searchFilms(item, filter)
    })
      .filter(i => i?.owner === currentUser?._id)
    localStorage.setItem('savedFilmsSearched', JSON.stringify(searchedFilms))
    setSavedFilms(searchedFilms)
  }

  const handleLogin = () => {
    setLoggedIn(true)
    getCurrentUserFromTokenWithCheck()
    history.push("/movies")
  }

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser();
    history.push("/");
  }

  const handleUpdateSelfData = (data) => {
    setCurrentUser(data)
  }

  return (
    <Page>
      <CurrentUserContext.Provider value={currentUser}>
        <Header logo={logo} menuIsActive={isOpenedMenu} onClickMenu={handleMenuClick} loggedIn={loggedIn}/>
        <Switch>
          <Route exact strict path={"/"}>
            <MainPage/>
          </Route>
          <UnauthorizedRoute
            path="/sign-up"
            loggedIn={currentUser}
            onLogin={handleLogin}
            component={Register}
          />
          <UnauthorizedRoute
            path="/sign-in"
            loggedIn={currentUser}
            onLogin={handleLogin}
            component={Login}
          />
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            films={films}
            handleSearch={filmsByFilter}
            clientWidth={clientWidth}
            onClickFavorite={handleClickFavorite}
            component={MoviePage}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            films={savedFilms}
            handleSearch={searchSavedFilms}
            clientWidth={clientWidth}
            onClickFavorite={handleClickFavorite}
            onDeleteFavorite={deleteSavedMovie}
            component={MoviePage}

          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onSend={handleUpdateSelfData}
            component={Profile}
          />
          <Route path={"*"}>
            <NotFound/>
          </Route>
        </Switch>
        <NavMenu isOpened={isOpenedMenu} onClickByLink={handleMenuClick}/>
        <Footer/>
      </CurrentUserContext.Provider>
    </Page>
  );
}

export default App;
