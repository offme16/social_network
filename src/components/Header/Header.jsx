import { NavLink } from 'react-router-dom';
import hh from './Header.module.css';
const Header = () =>{
    return(
        <header className={hh.header}>
        <NavLink><img className={hh.logo} src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_47-48.png" alt='B'/><div className={hh.re}>CAPYCOM</div></NavLink>
        </header>
    );
}
export default Header;