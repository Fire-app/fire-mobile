import PropTypes from 'prop-types';

export const FEATHER = 'Feather';
export const IONICONS = 'Ionicons';

export const IconProp = PropTypes.shape({
  family: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});
