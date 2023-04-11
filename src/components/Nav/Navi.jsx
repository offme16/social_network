import { NavLink } from 'react-router-dom';
import cla from './Navi.module.css';
const Navi = () =>{
    return(
      <nav className={cla.nav}>
      <div className={cla.item}><NavLink to='/profile'>Profile</NavLink></div>
      <div><NavLink to='/dialods'>Messages</NavLink></div>
      <div><NavLink to='/news'>News</NavLink></div>
      <div><NavLink to='/music'>Music</NavLink></div>
      <div><NavLink to='/video'>Video</NavLink></div>
      <hr/>
      <div><NavLink to='/setting'>Setting</NavLink></div>
      <hr/>
    </nav>

    );
}
export default Navi;