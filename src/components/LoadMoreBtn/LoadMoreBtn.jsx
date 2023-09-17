import css from './LoadMoreBtn.module.scss';
// import PropTypes from 'prop-types';

const LoadMoreBtn = ( { onClick } ) => (
  <button type="button" className={css.Button} onClick={onClick}>
    Load more
  </button>
);

export default LoadMoreBtn;

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };