import React from 'react';
import cn from 'classnames';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

const PostForm = () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const initialValues = {
    name: '',
    tel: '',
    email: '',
    poem: '',
    checkbox: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Не менее двух символов')
      .required('Вы пропустили это поле'),
    tel: Yup.string()
      .phone('RU', false, 'Введите корректный номер телефона')
      .required('Вы пропустили это поле'),
    email: Yup.string()
      .typeError('Введите корректный email-вдрес')
      .email('Введите email-вдрес')
      .required('Вы пропустили это поле'),
    poem: Yup.string()
      .min(10, 'Минимум 10 символов')
      .required('Вы пропустили это поле'),
    checkbox: Yup.boolean()
      .oneOf([true], "Нужно принять оферту")
  });

  const handleSubmit = (values) =>
    new Promise((resolve, reject) => {
        console.log('sended', values);
        resolve(true);
        // reject(new Error('Упс, что-то пошло не так и форма не отправилась, попробуйте ещё раз!'));
    });

  return (
     <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        await sleep(500);
        handleSubmit(values)
        .then(() =>{
          alert(JSON.stringify(values, null, 2));
          actions.resetForm();
        })
        .catch(error => {
          actions.setFieldError('submit', error.message);
        })
        .finally(() => {
          actions.setSubmitting(false);
        });
      }}
    >
      {({ isSubmitting, dirty, isValid, errors, touched, values, setFieldValue, setFieldTouched }) => (
        <Form className="description__form form" noValidate>
          <fieldset className="form__fieldset">
            <label htmlFor="name" className="form__label">
              <Field
                name="name"
                type="text"
                className={`form__input font ${!!errors.name && !!touched.name && "form__input_type_error"}`}
                placeholder="Имя и фамилия автора" />
              <ErrorMessage component="span" name="name" className="form__error font" />
            </label>
            <label htmlFor="tel" className="form__label">
              <Field
                name="tel"
                type="tel"
                className={`form__input font ${!!errors.tel && !!touched.tel && "form__input_type_error"}`}
                placeholder="Телефон" />
              <ErrorMessage component="span" name="tel" className="form__error font" />
            </label>
            <label htmlFor="email" className="form__label">
              <Field
                name="email"
                type="email"
                className={`form__input font ${errors.email && !!touched.email && "form__input_type_error"}`}
                placeholder="Почта" />
              <ErrorMessage component="span" name="email" className="form__error font" />
            </label>
            <label htmlFor="poem" className="form__label">
              <Field
                name="poem"
                as="textarea"
                className={`form__input font form__input_type_textarea ${errors.poem && !!touched.poem && "form__input_type_error"}`}
                placeholder="Стихи" />
              <ErrorMessage component="span" name="poem" className="form__error font" />
            </label>
            <div className="form__checkbox-field">
              <Field
                type="checkbox"
                className="form__checkbox"
                id="checkbox"
                checked={values.checkbox}
                value={values.checkbox}
                onChange={() => setFieldValue('checkbox', !values.checkbox)} />
              <ErrorMessage component="span" name="checkbox" className="form__error font" />
              <label className="form__checkbox-label" htmlFor="checkbox" onClick={() => setFieldTouched('checkbox')}></label>
              <p className="form__checkbox-text font">Согласен с <a className="form__link" href="https://example.com/" rel="noreferrer" target="_blank">офертой</a></p>
            </div>
          </fieldset>
          <div className="form__button-field">
            <button
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              className={cn("form__button", "button", "font", {"form__button_disabled": !isValid || !dirty})}
              text={'123'}
            >
              {isSubmitting ? 'Подождите...' : 'Отправить форму'}
            </button>
            <span className="form__error font">{errors.submit}</span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
