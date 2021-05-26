import React, { useEffect, useState } from "react"

const Profile = ({ onSend }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    setName('Виталий');
    setEmail('vit@vit.ru');
  }, []);
  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${name}!`}</h2>
      <form className="profile__form" onSubmit={onSend}>
        <div className="input-row">
          <p className="profile__input-title">Имя</p>
          <input className="profile__input"
                 id="name"
                 maxLength="40"
                 minLength="2"
                 name="name"
                 value={name}
                 onChange={handleChangeName}
          />
        </div>
        <div className="input-row">
          <p className="profile__input-title">Email</p>
          <input className="profile__input"
                 id="email"
                 maxLength="40"
                 minLength="2"
                 name="email"
                 placeholder="Email"
                 required type="email"
                 value={email}
                 onChange={handleChangeEmail}
          />
        </div>
      </form>
      <button className="profile__button" type="submit">
        Редактировать
      </button>
      <button className="profile__button profile__button_red margin__top_16" type="submit">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile
