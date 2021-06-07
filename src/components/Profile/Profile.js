import React, { useContext, useState } from "react"
import { Formik } from "formik";
import * as Yup from "yup";
import { validNameRegex } from "../../utils/utils";
import mainApi from "../../utils/mainApi";
import { CurrentUserContext } from "../context/CurrentUserContext";

const Profile = ({ onSend, onLogout }) => {
  const [submitResult, setSubmitResult] = useState(undefined);
  const [isSuccessUpdate, setisSuccessUpdate] = useState(undefined);
  const currentUser = useContext(CurrentUserContext);

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
    }
  );

  const handleSubmit = (values) => {
    mainApi.updateSelfData({ name: values.name, email: values.email })
      .then((data) => {
        setisSuccessUpdate(true)
        notifyUser("Обновлено!")
        onSend({ _id: data.data._id, name: values.name, email: values.email })
      })
      .catch(() => {
        setisSuccessUpdate(false)
        notifyUser("Ошибка, что-то пошло не так!")
      })
  }

  const notifyUser = (result) => {
    setSubmitResult(result)
    setTimeout(() => {
      setSubmitResult(undefined)
      setisSuccessUpdate(undefined)
    }, 3000)
  }

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser?.name}!`}</h2>
      <Formik
        initialValues={{
          name: currentUser?.name,
          email: currentUser?.email,
        }}
        validateOnBlur
        onSubmit={(values) => {
          handleSubmit(values)
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, isValid, handleSubmit, dirty }) => (
          <>
            <div className="profile__form">
              <div className="input-row">
                <p className="profile__input-title">Имя</p>
                <input className="profile__input"
                       name="name"
                       value={values.name}
                       placeholder={"Имя"}
                       onBlur={handleBlur}
                       onChange={handleChange}
                />
              </div>
              {<span className="input-error border_bottom">{errors.name}</span>}
              {<span className="input-error">{errors.email}</span>}
              <div className="input-row">
                <p className="profile__input-title">Email</p>
                <input className="profile__input"
                       id="email"
                       name="email"
                       placeholder="Email"
                       required type="email"
                       value={values.email}
                       onChange={handleChange}
                       onBlur={handleBlur}
                />
              </div>
            </div>
            <button
              className={`profile__button ${isSuccessUpdate !== undefined && (isSuccessUpdate ? 'success-color' : 'error-color')} ${(!isValid || !dirty) && 'profile__button_disabled'}`}
              type="submit"
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
            >
              {submitResult ? submitResult : 'Редактировать'}
            </button>
          </>
        )}
      </Formik>
      <button className="profile__button profile__button_red margin__top_16" type="submit" onClick={onLogout}>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile
