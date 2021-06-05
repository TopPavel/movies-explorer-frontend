import { Link } from "react-router-dom";
import Sign from "../Sign/Sign";
import React, { useEffect, useState } from "react";


const Register = ({}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setName('');
        setEmail('');
        setPassword('');
    }, []);
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
    }

    return (
      <Sign
        name={"sign-up"}
        onSend={handleSubmit}
      >
          <label className="sign__label">
              Имя
              <input className="sign__input"
                     id="name"
                     maxLength="40"
                     minLength="2"
                     name="name"
                     value={name}
                     onChange={handleChangeName}
              />
          </label>
          {/*<span id="name-error" className="input-error">Необходимо заполнить данное поле</span>*/}
          <label className="sign__label">
              Email
              <input className="sign__input"
                     id="email"
                     maxLength="40"
                     minLength="2"
                     name="email"
                     placeholder="Email"
                     required type="email"
                     value={email}
                     onChange={handleChangeEmail}
              />
          </label>
          {/*<span id="email-error" className="popup__input-error">Необходимо заполнить данное поле</span>*/}
          <label className="sign__label">
              Пароль
              <input className="sign__input"
                     id="password"
                     maxLength="15"
                     minLength="9"
                     name="password"
                     required type="password"
                     value={password}
                     onChange={handleChangePassword}
              />
          </label>
          {/*<span id="password-error" className="popup__input-error">Необходимо заполнить данное поле</span>*/}
          <button className="sign-button sign-button_place_register" type="submit">
              Зарегистрироваться
          </button>
          <Link className={"sign__link"} to="/sign-in">
              <span className="sign-span">Уже зарегистрированы?</span> Войти
          </Link>
      </Sign>
    );
}

export default Register
