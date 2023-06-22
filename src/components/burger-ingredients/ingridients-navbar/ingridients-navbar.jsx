// @ts-nocheck
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingridients-navbar.module.scss';
import PropTypes from 'prop-types';

const IngridientsNavbar = ({ current, setCurrent }) => {
  return (
    <div className={styles.navbar}>
      <Tab value='one' active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value='two' active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value='three' active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
  );
};

IngridientsNavbar.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default IngridientsNavbar;
