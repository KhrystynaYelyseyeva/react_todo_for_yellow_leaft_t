import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { ContactButton } from '../ContactButton/ContactButton';

import './ContactForm.scss';

import { FormDataShape } from '../../../shapes/FormDataShape';
import { FormErrorsShape } from '../../../shapes/FormErrorsShape';

export const ContactForm = memo(({
  handleCancel,
  handleSubmit,
  formData,
  errors,
  handleChange,
  handleReset,
  handleBlur,
}) => {
  const { userName, email, massage } = formData;
  const { userNameError, emailError } = errors;

  return (
    <form onSubmit={handleSubmit}>
      <label
        className={classNames(
          'ContactForm__input-label', {
            'ContactForm__input-label--is-error': userNameError,
          },
        )}
      >
        Your name*
        {userNameError && (
          <span className="error">
            is required !
          </span>
        )}
        <input
          className="ContactForm__input"
          type="text"
          name="name"
          value={userName}
          required
          onChange={event => handleChange('userName')(event)}
          onBlur={() => handleBlur('userName')}
        />
      </label>

      <label
        className={classNames(
          'ContactForm__input-label', {
            'ContactForm__input-label--is-error': emailError,
          },
        )}
      >
        Your email*
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
          onChange={event => handleChange('email')(event)}
          onBlur={() => handleBlur('email')}
        />
      </label>

      <label className="ContactForm__input-label">
        Your massage
        <textarea
          className="ContactForm__input"
          name="massage"
          value={massage}
          onChange={event => handleChange('massage')(event)}
          onBlur={() => handleBlur('massage')}
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
        onClick={handleCancel}
        text="Cancel"
      />
    </form>
  );
});

ContactForm.propTypes = {
  formData: FormDataShape.isRequired,
  errors: FormErrorsShape.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};
