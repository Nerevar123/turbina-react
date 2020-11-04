import React from 'react';

function Form() {
  return (
  <form className="description__form form">
    <fieldset className="form__fieldset">
      <input className="form__input" placeholder="Имя и фамилия автора" type="text" required />
      <input className="form__input" placeholder="Телефон" type="tel" pattern="[0-9]*" inputMode="numeric" required />
      <input className="form__input" placeholder="Почта" type="email" required />
      <input className="form__input" placeholder="Стихи" type="text" required />
      <div className="form__checkbox-field">
        <input className="form__checkbox" type="checkbox" id="checkbox" required />
        <label className="form__label" htmlFor="checkbox"></label>
        <p className="form__checkbox-text">Согласен с <a className="form__link" href="#">офертой</a></p>
      </div>
    </fieldset>
    <button className="form__button button">Отправить форму</button>
  </form>
  )
}

export default Form;
