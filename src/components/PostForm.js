import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PostForm = () => {
  return (
     <Formik
      initialValues={{
        name: '',
        tel: '',
        email: '',
        poem: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, 'Введите имя')
          .required('Вы пропустили это поле'),
        tel: Yup.number()
          .typeError('Введите номер телефона')
          .min(6, 'Введите номер телефона')
          .required('Вы пропустили это поле'),
        email: Yup.string()
          .typeError('Введите  email-вдрес')
          .email('Введите email-вдрес')
          .required('Вы пропустили это поле'),
        poem: Yup.string()
          .min(10, 'Минимум 10 символов')
          .required('Вы пропустили это поле'),
      })}
      onSubmit={(values, { resetForm }) => {
        alert('Thank you!');
        resetForm();
      }}
    >
      {({ isSubmitting, dirty, isValid }) => (
      <Form className="description__form form">
        <fieldset className="form__fieldset">
          <label htmlFor="name" className="form__label1">
            <Field name="name" type="text" className="form__input" placeholder="Имя и фамилия автора" />
            <ErrorMessage component="span" name="name" className="form__error" />
          </label>
          <label htmlFor="tel" className="form__label1">
            <Field name="tel" type="tel" className="form__input" placeholder="Телефон" />
            <ErrorMessage component="span" name="tel" className="form__error" />
          </label>
          <label htmlFor="email" className="form__label1">
            <Field name="email" type="email" className="form__input" placeholder="Почта" />
            <ErrorMessage component="span" name="email" className="form__error" />
          </label>
          <label htmlFor="poem" className="form__label1">
            <Field name="poem" as="textarea" className="form__input" placeholder="Стихи" />
            <ErrorMessage component="span" name="poem" className="form__error" />
          </label>
           <div className="form__checkbox-field">
            <input className="form__checkbox" type="checkbox" id="checkbox" required />
            <label className="form__label" htmlFor="checkbox"></label>
            <p className="form__checkbox-text">Согласен с <a className="form__link" href="https://example.com/" rel="noreferrer" target="_blank">офертой</a></p>
           </div>
        </fieldset>
        <button type="submit" disabled={isSubmitting || !dirty} className={`form__button ${(!isValid || !dirty) ? "form__button_disabled" : ''}`}>Submit</button>
        <ErrorMessage component="span" name="submit" className="form__error" />
      </Form>
      )}
    </Formik>
  );
};

export default PostForm;
