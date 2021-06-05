import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle";

const AboutProject = (props) => {

  return (
    <section className="about-project" id={"AboutProject"}>
      <SectionTitle title={'О проекте'}/>
      <div className="about-project__info">
        <div className="about-project__info-block">
          <h3 className="info-block__title">Дипломный проект включал 5 этапов</h3>
          <p className="info-block__desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
            финальные доработки.</p>
        </div>
        <div className="about-project__info-block">
          <h3 className="info-block__title">На выполнение диплома ушло 5 недель</h3>
          <p className="info-block__desc">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="week-line">
        <div className="week-line__week week-line__week_count_one">
          <h3 className="week-line__week-name week-line__week-name_color_black">1 неделя</h3>
          <p className="week-line__phase">Back-end</p>
        </div>
        <div className="week-line__week week-line__week_count_four">
          <h3 className="week-line__week-name week-line__week-name_color_gray">4 недели</h3>
          <p className="week-line__phase">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject
