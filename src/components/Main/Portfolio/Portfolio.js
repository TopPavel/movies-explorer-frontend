import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle";
import avatar from '../../../images/photo.jpg'

const Portfolio = (props) => {

  return (
    <section className="portfolio" id={"portfolio"}>
      <SectionTitle title={'Студент'}/>
      <div className="portfolio__info">
        <div className="info-text">
          <h2 className="info-text__name">Виталий</h2>
          <p className="info-text__spec">Фронтенд-разработчик, 30 лет</p>
          <p className="info-text__desc">
            {`Я родился и живу в Саратове, закончил факультет экономики\u00a0СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
              «СКБ Контур». После того, как прошёл курс по веб\u2011разработке, начал заниматься фриланс\u2011заказами и ушёл с
              постоянной работы.`}
          </p>
          <nav className="info-text__social">
            <a href="https://facebook.com/TopPave1/" className="social-link">Facebook</a>
            <a href="https://github.com/TopPavel" className="social-link">Github</a>
          </nav>
        </div>
        <div className="info-image">
          <img src={avatar} alt="Фотография автора" className="portfolio-photo"/>
        </div>
      </div>
      <nav className="list-projects">
        <h3 className="list-projects__title">Портфолио</h3>
        <ul className="projects">
          <li className="project-item">
            <a href="https://toppavel.github.io/how-to-learn/" className="project-link" rel="noopener"
               target={"_blank"}>
              Статичный сайт
              <span className="project-link__icon"/>
            </a>
          </li>
          <li className="project-item">
            <a href="https://toppavel.github.io/russian-travel/" className="project-link" rel="noopener"
               target={"_blank"}>
              Адаптивный сайт
              <span className="project-link__icon"/>
            </a>
          </li>
          <li className="project-item">
            <a href="https://toppavel.github.io/react-mesto-auth/" className="project-link" rel="noopener"
               target={"_blank"}>
              Одностраничное приложение
              <span className="project-link__icon"/>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio
