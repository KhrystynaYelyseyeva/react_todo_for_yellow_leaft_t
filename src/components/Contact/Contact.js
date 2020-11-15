import React, { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { ContactButton } from './ContactButton/ContactButton';
import { ContactForm } from './ContactForm/ContactForm';

import './Contact.scss';

const initialData = {
  userName: '',
  email: '',
  massage: '',
};

export const Contact = memo(({ handleOpenContact }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({
    userNameError: false,
    emailError: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // eslint-disable-next-line max-len,no-control-regex
  const patternEmail = /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

  const handleChange = name => ({ target: { value } }) => {
    setFormData(oldData => ({
      ...oldData,
      [name]: value,
    }));
    setErrors({
      userNameError: false,
      emailError: false,
    });
  };

  const handleReset = useCallback(() => {
    setFormData(initialData);
    setErrors({
      userNameError: false,
      emailError: false,
    });
  }, []);

  const handleCancel = useCallback(() => {
    handleReset();
    setIsSuccess(false);
    handleOpenContact();
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (formData.userName.length < 2) {
      setErrors(oldErrors => ({
        ...oldErrors,
        userNameError: false,
      }));

      return;
    }

    if (!patternEmail.test(formData.email)) {
      setErrors(oldErrors => ({
        ...oldErrors,
        emailError: false,
      }));

      return;
    }

    setIsSuccess(true);
  }, []);

  const handleBlur = (name) => {
    setFormData(oldData => ({
      ...oldData,
      [name]: oldData[name].trim(),
    }));
  };

  return (
    <div className="wrapper">
      { isSuccess ? (
        <div className="container">
          <h2>Thank you:)</h2>
          <ContactButton
            type="button"
            className="ContactButton ContactButton--cancel"
            onClick={handleOpenContact}
            text="Cancel"
          />
        </div>
      ) : (
        <div className="container">
          <h2>Contact</h2>
          <ContactForm
            formData={formData}
            errors={errors}
            handleCancel={handleCancel}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
          />
        </div>
      )
      }
    </div>
  );
});

Contact.propTypes = {
  handleOpenContact: PropTypes.func.isRequired,
};
