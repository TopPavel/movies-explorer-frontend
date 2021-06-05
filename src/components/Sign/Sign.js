import React from "react";

const Sign = ({ name, onSend, children, nav }) => {

  return (
    <div className="sign">
      <form className={`sign-form sign__${name}`} name={`${name}-form`} onSubmit={onSend}>
        {children}
      </form>
      {nav}
    </div>
  );
}

export default Sign
