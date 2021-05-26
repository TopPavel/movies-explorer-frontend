import React from "react";
import { Route, Switch } from "react-router-dom";

const Footer = ({}) => {
  return (
    <Switch>
      <Route exact strict path="/">
        <footer className="footer">
          <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer-links">
            <p className="footer__copyright">&copy; 2021</p>
            <nav className="footer-nav">
              <a href="https://praktikum.yandex.ru/" className="footer-link">Яндекс.Практикум</a>
              <a href="https://github.com/TopPavel" className="footer-link">Github</a>
              <a href="https://facebook.com/TopPave1/" className="footer-link">Facebook</a>
            </nav>
          </div>
        </footer>
      </Route>
      <Route path="/movies">
        <footer className="footer">
          <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer-links">
            <p className="footer__copyright">&copy; 2021</p>
            <nav className="footer-nav">
              <a href="https://praktikum.yandex.ru/" className="footer-link">Яндекс.Практикум</a>
              <a href="https://github.com/TopPavel" className="footer-link">Github</a>
              <a href="https://facebook.com/TopPave1/" className="footer-link">Facebook</a>
            </nav>
          </div>
        </footer>
      </Route>
      <Route path="/saved-movies">
        <footer className="footer">
          <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer-links">
            <p className="footer__copyright">&copy; 2021</p>
            <nav className="footer-nav">
              <a href="https://praktikum.yandex.ru/" className="footer-link">Яндекс.Практикум</a>
              <a href="https://github.com/TopPavel" className="footer-link">Github</a>
              <a href="https://facebook.com/TopPave1/" className="footer-link">Facebook</a>
            </nav>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}

export default Footer
