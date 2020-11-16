import PropTypes from 'prop-types';

export const FormErrorsShape = PropTypes.shape({
  userNameError: PropTypes.bool.isRequired,
  emailError: PropTypes.bool.isRequired,
});
