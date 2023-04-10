import cla from './Navi.module.css';
const Navi = () =>{
    return(
      <nav className={cla.nav}>
      <div ><a href='#s'>Profile</a></div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Video</div>
      <hr/>
      <div>Settings</div>
      <hr/>
    </nav>

    );
}
export default Navi;