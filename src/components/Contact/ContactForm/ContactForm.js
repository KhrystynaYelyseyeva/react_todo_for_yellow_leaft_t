import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ContactButton } from '../ContactButton/ContactButton';

import './ContactForm.scss';

export const ContactForm = ({
  handleOpenContact,
  handleSubmit,
  name,
  nameError,
  handleChangeName,
  email,
  emailError,
  handleChangeEmail,
  massage,
  handleChangeMassage,
  handleReset,
  handleBlurName,
  handleBlurEmail,
  handleBlurMassage,
}) => (
  <form onSubmit={handleSubmit}>
    <label
      className={classNames(
        'ContactForm__input-label', {
          'ContactForm__input-label--is-error': nameError,
        },
      )}
    >
      Your name
      {nameError && (
        <span className="error">
          is required !
        </span>
      )}
      <input
        className="ContactForm__input"
        type="text"
        name="name"
        value={name}
        required
        onChange={handleChangeName}
        onBlur={handleBlurName}
      />
    </label>

    <label
      className={classNames(
        'ContactForm__input-label', {
          'ContactForm__input-label--is-error': emailError,
        },
      )}
    >
      Your email
      {emailError && (
        <span className="error">
          is required !
        </span>
      )}
      <input
        className="ContactForm__input"
        type="email"
        name="email"
        value={email}
        required
        onChange={handleChangeEmail}
        onBlur={handleBlurEmail}
      />
    </label>

    <label className="ContactForm__input-label">
      Your massage
      <textarea
        className="ContactForm__input"
        name="massage"
        value={massage}
        onChange={handleChangeMassage}
        onBlur={handleBlurMassage}
      />
    </label>

    <ContactButton
      type="submit"
      className="ContactButton ContactButton--submit"
      text="Submit"
    />

    <ContactButton
      className="ContactButton ContactButton--reset"
      onClick={handleReset}
      text="Reset"
    />

    <ContactButton
      type="button"
      className="ContactButton ContactButton--cancel"
      onClick={handleOpenContact}
      text="Cancel"
    />
  </form>
);

ContactForm.propTypes = {
  handleOpenContact: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  massage: PropTypes.string.isRequired,
  handleChangeMassage: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  nameError: PropTypes.bool.isRequired,
  emailError: PropTypes.bool.isRequired,
  handleBlurName: PropTypes.func.isRequired,
  handleBlurEmail: PropTypes.func.isRequired,
  handleBlurMassage: PropTypes.func.isRequired,
};
