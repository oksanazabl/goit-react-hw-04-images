import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore}) => {
  return (
    <div className={css.Button_position} >
      
        <button type="button" onClick={onLoadMore} className={css.Button}>
          Load more
        </button>
      
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;