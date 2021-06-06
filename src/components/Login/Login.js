import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import mainApi from "../../utils/mainApi";

const Login = ({ onLogin }) => {
  const [submitError, setSubmitError] = useState('');
  const validationSchema = Yup.object().shape(
    {
      email: Yup.string()
        .required("Поле обязательное!")
        .email("Неверный формат email!"),
      password: Yup.string()
        .min(9, "Минимальная длинна 9 символов!")
        .required("Поле обязательное!")
    }
  );

  const handleSend = (data) => {
    mainApi.signIn({ email: data.email, password: data.password })
      .then(logResp => {
        setSubmitError('');
        return onLogin();
      })
      .catch((err) => {
          setSubmitError('Неправильный логин или пароль');
        }
      );
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
              Email
              <input className="sign__input"
                     id="email"
                     name="email"
                     placeholder="Email"
                     required type="email"
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
              />
            </label>
            <div className="error-cont">
              {((values.email !== "" && errors.email) || (touched.email && errors.email)) &&
              <span className="input-error">{errors.email}</span>}
            </div>
            <label className="sign__label">
              Пароль
              <input className="sign__input"
                     name="password"
                     type="password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
              />
            </label>
            <div className="error-cont">
              {((values.password !== "" && errors.password) || (touched.password && errors.password)) &&
              <span className="input-error">{errors.password}</span>}
            </div>
            <div className="sign-button-cont">
              <div className="submit-error">
                {<span className="input-error">{submitError}</span>}
              </div>
              <button
                className={`sign-button ${(!isValid || !dirty) && 'sign-button_disabled'}`}
                type="submit"
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
              >
                Войти
              </button>
            </div>
            <Link className={"sign__link"} to="/sign-up">
              <span className="sign-span">Еще не зарегистрированы?</span> Регистрация
            </Link>
          </div>
        )}
      </Formik>
    </div>

  );
}

export default Login
