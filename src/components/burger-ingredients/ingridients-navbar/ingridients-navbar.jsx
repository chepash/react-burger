// @ts-nocheck
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingridients-navbar.module.scss';
import PropTypes from 'prop-types';

const IngridientsNavbar = ({ currentTab, setCurrentTab }) => {
  return (
    <div className={styles.navbar}>
      <Tab value='one' active={currentTab === 'one'} onClick={setCurrentTab}>
        One
      </Tab>
      <Tab value='two' active={currentTab === 'two'} onClick={setCurrentTab}>
        Two
      </Tab>
      <Tab value='three' active={currentTab === 'three'} onClick={setCurrentTab}>
        Three
      </Tab>
    </div>
  );
};

IngridientsNavbar.propTypes = {
  currentTab: PropTypes.string.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default IngridientsNavbar;
