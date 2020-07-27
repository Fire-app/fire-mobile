import PropTypes from 'prop-types';

export const FEATHER = 'Feather';
export const IONICONS = 'Ionicons';

export const IconProp = PropTypes.shape({
  name: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
});
