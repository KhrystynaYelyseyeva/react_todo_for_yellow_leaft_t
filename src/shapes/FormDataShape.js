import PropTypes from 'prop-types';

export const FormDataShape = PropTypes.shape({
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  massage: PropTypes.string.isRequired,
});
