import PropTypes from 'prop-types';

const wordShape = PropTypes.shape({
  id: PropTypes.string,
  word: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  forebear: PropTypes.string.isRequired,
  forebearExample: PropTypes.string.isRequired,
  whence: PropTypes.string.isRequired,
  isCrafted: PropTypes.bool.isRequired,
  notes: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { wordShape };
