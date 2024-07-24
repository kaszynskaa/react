import logo from '../../assets/personal-logo.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Personal Scripts Beginning</h1>
    </header>
  );
};

export default Header;
