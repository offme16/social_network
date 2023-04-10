import cla from './Header.module.css';
const Header = () =>{
    return(
        <header className={cla.header}>
        <img className='logo' src="https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_47-48.png"/>
      </header>
    );
}
export default Header;