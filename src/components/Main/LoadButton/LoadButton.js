import React from "react"

const LoadButton = ({ onClick }) => {

  return (
    <div className="button-container">
      <button className="button-container__load-more" onClick={onClick}>Еще</button>
    </div>
  );
}

export default LoadButton
