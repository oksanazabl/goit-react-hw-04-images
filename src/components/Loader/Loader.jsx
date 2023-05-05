import { useState } from 'react';
import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner'
import css from './Loader.module.css';

const Loader = ({ isVisible }) => {
const [loading] = useState(isVisible);

return (
loading && (
<div className={css.Overlay}>
<Circles
       height={80}
       width={80}
       color="#4fa94d"
       ariaLabel="circles-loading"
       visible={true}
     />
</div>
)
);
};

Loader.propTypes = {
isVisible: PropTypes.bool.isRequired,
};

export default Loader;