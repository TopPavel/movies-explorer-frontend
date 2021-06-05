import React from "react"
import Promo from "../components/Main/Promo/Promo";
import AboutProject from "../components/Main/AboutProject/AboutProject";
import Techs from "../components/Main/Techs/Techs";
import Portfolio from "../components/Main/Portfolio/Portfolio";

const MainPage = (props) => {
  return (
    <>
      <main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <Portfolio/>
      </main>
      {/*<Footer/>*/}
    </>
  );
}

export default MainPage
