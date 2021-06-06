import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup'
import React, { useState } from "react";
import { Formik } from "formik";
import { validNameRegex } from "../../utils/utils";
import mainApi from "../../utils/mainApi";


const Register = ({ onLogin }) => {
  const history = useHistory();
  const [submitError, setSubmitError] = useState('');
  const handleSend = (data) => {
    mainApi.signUp({ name: data.name, email: data.email, password: data.password })
      .then(r => {
          mainApi.signIn({ email: data.email, password: data.password })
            .then(logResp => {
              setSubmitError('');
              onLogin();
            })
            .catch(() => {
                setSubmitError('');
                history.push('/sign-in');
              }
            );
        }
      )
      .catch((err) => {
        console.log(err);
        setSubmitError(err);
      });
  }

  const validationSchema = Yup.object().shape(
    {
      name: Yup.string()
        .min(2, "Минимальная длинна 2 символа!")
        .max(30, "Максимальная длинна 30 символов!")
        .required("Поле обязательное!")
        .matches(validNameRegex, 'Содержит недопустимые символы!'),
      email: Yup.string()
        .required("Поле обязательное!")
        .email("Неверный формат email!"),
      password: Yup.string()
        .min(9, "Минимальная длинна 9 символов!")
        .required("Поле обязательное!")
    }
  );
  const handleSubmit = (e) => {
  }

  return (
    <div className="sign">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleSend(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, isValid, handleSubmit, dirty }) => (
          <div className="sign-form">
            <label className="sign__label">
              Имя
              <input className="sign__input"
                     name="name"
                     value={values.name}
                     placeholder={"Имя"}
                     onBlur={handleBlur}
                     onChange={handleChange}
              />
              <div className="error-cont">
                {((values.name !== "" && errors.name) || (touched.name && errors.name)) &&
                <span className="input-error">{errors.name}</span>}
              </div>
            </label>
            <label className="sign__label">
              Email
              <input className="sign__input"
                     name="email"
                     placeholder="Email"
                     type="email"
                     value={values.email}
                     onBlur={handleBlur}
                     onChange={handleChange}
              />
            </label>
            <div className="error-cont">
              {((values.email !== "" && errors.email) || (touched.email && errors.email)) &&
              <span className="input-error">{errors.email}</span>}
            </div>
            <label className="sign__label">
              Пароль
              <input className="sign__input"
                     id="password"
                     name="password"
                     type="password"
                     value={values.password}
                     onBlur={handleBlur}
                     onChange={handleChange}
              />
            </label>
            <div className="error-cont">
              {((values.password !== "" && errors.password) || (touched.password && errors.password)) &&
              <span className="input-error">{errors.password}</span>}
            </div>
            <div className="sign-button-cont sign-button-cont_place_register">
              <div className="submit-error">
                {<span className="input-error">{submitError}</span>}
              </div>
              <button
                className={`sign-button ${(!isValid || !dirty) && 'sign-button_disabled'}`}
                type="submit"
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
              >
                Зарегистрироваться
              </button>
            </div>
            <Link className={"sign__link"} to="/sign-in">
              <span className="sign-span">Уже зарегистрированы?</span> Войти
            </Link>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Register
