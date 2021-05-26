import Sign from "../Sign/Sign";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Login = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
  }

  return (
    <Sign name={"sign-in"}
          onSend={handleSubmit}
    >
      <label className="sign__label">
        Email
        <input className="sign__input"
               id="name"
               maxLength="40"
               minLength="2"
               name="email"
               required type="email"
               value={email}
               onChange={handleChangeEmail}
        />
      </label>
      {/*<span id="email-error" className="input-error">Необходимо заполнить данное поле</span>*/}
      <label className="sign__label">
        Пароль
        <input className="sign__input"
               maxLength="15"
               minLength="9"
               name="password"
               required type="password"
               value={password}
               onChange={handleChangePassword}
        />
      </label>
      {/*<span id="password-error" className="input-error">Необходимо заполнить данное поле</span>*/}
      <button className="sign-button" type="submit">
        Войти
      </button>
      <Link className={"sign__link"} to="/sign-up">
        <span className="sign-span">Еще не зарегистрированы?</span> Регистрация
      </Link>
    </Sign>
  );
}

export default Login
