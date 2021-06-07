import React from "react"
import { Route, Switch } from "react-router-dom";

const LoadButton = ({ onClick, isVisible }) => {

  return (
    <Switch>
      <Route path="/movies">
        <div className="button-container">
          <button className={`button-container__load-more ${!isVisible && 'button-container__load-more_hide'}`}
                  onClick={onClick}>Еще
          </button>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="button-container"/>
      </Route>
    </Switch>
  );
}

export default LoadButton
