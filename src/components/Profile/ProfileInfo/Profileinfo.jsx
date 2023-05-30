import cla from './Profileinfo.module.css';
import Preloader from '../../common/Preloader'
const Profileinfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    let git = props.profile.github!=null ? props.profile.github : "Пусто" ;
    return(
        <div className={cla.ANB}>
         <img className={cla.profimg} src="https://zastavok.net/main/raznoe/168070560590.jpg" alt='f'/>
         <div className={cla.avatar}> <img src={props.profile.photos.small} alt='d'/></div>
         <div className={cla.discr}>Name:{props.profile.fullName}<br/> Contacts: {git}</div>
        </div>
    );
}
export default Profileinfo;