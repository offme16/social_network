import { NavLink } from 'react-router-dom';
import hh from './Header.module.css';
const Header = (props) =>{
    return(
        <header className={hh.header}>
        <NavLink><img className={hh.logo} src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_47-48.png" alt='B'/><div className={hh.re}>CAPYCOM</div></NavLink>
        <div className={hh.login__block}> 
        { props.isAuth ?   <div>  {props.login} <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
           </div>
        </header>
    );
}
export default Header;