import React from "react"
import SectionTitle from "../SectionTitle/SectionTitle";

const Techs = (props) => {

  return (
    <sections className="techs" id={"Techs"}>
      <SectionTitle title={'Технологии'}/>
      <h2 className="techs-info">7 технологий</h2>
      <p
        className="techs-info__desc">{'На курсе веб-разработки мы освоили технологии, которые\u00A0 применили в дипломном проекте.'}</p>
      <div className="tech-list__wrapper">
        <ul className="tech-list">
          <li className="tech-item">HTML</li>
          <li className="tech-item">CSS</li>
          <li className="tech-item">JS</li>
          <li className="tech-item">React</li>
          <li className="tech-item">Git</li>
          <li className="tech-item">Express.js</li>
          <li className="tech-item">mongoDB</li>
        </ul>
      </div>
    </sections>
  );
}

export default Techs
