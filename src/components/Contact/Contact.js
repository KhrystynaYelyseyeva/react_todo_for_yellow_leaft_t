import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ContactButton } from './ContactButton/ContactButton';
import { ContactForm } from './ContactForm/ContactForm';

import './Contact.scss';

export const Contact = ({ handleOpenContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMassage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  // eslint-disable-next-line max-len,no-control-regex
  const patternEmail = /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

  const handleChangeName = ({ target }) => {
    setName(target.value);
    setNameError(false);
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
    setEmailError(false);
  };

  const handleChangeMassage = ({ target }) => {
    setMassage(target.value);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMassage('');
    setNameError(false);
    setEmailError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setNameError(true);

      return;
    }

    if (!patternEmail.test(email)) {
      setEmailError(true);

      return;
    }

    handleReset();
    setIsSuccess(true);
  };

  const handleBlurName = () => {
    setName(current => current.trim());
  };

  const handleBlurMassage = () => {
    setMassage(current => current.trim());
  };

  const handleBlurEmail = () => {
    setEmail(current => current.trim().toLocaleLowerCase());
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
            handleChangeEmail={handleChangeEmail}
            handleChangeName={handleChangeName}
            handleChangeMassage={handleChangeMassage}
            name={name}
            emailError={emailError}
            handleOpenContact={handleOpenContact}
            email={email}
            nameError={nameError}
            massage={massage}
            handleReset={handleReset}
            handleSubmit={handleSubmit}
            handleBlurName={handleBlurName}
            handleBlurEmail={handleBlurEmail}
            handleBlurMassage={handleBlurMassage}
          />
        </div>
      )
      }
    </div>
  );
};

Contact.propTypes = {
  handleOpenContact: PropTypes.func.isRequired,
};
