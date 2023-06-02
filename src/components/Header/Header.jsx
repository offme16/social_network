import { NavLink } from 'react-router-dom';
import hh from './Header.module.css';
const Header = (props) =>{

  console.log(props.isAuth)
  console.log(props.login)
    return(
        <header className={hh.header}>
        <NavLink><img className={hh.logo} src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_47-48.png" alt='B'/><div className={hh.re}>CAPYCOM</div></NavLink>
        <div className={hh.login__block}> 
        { props.isAuth ?  props.login : <NavLink to={'/login'}>Login</NavLink>}
           </div>
        </header>
    );
}
export default Header;