import cla from './Profileinfo.module.css';
import Preloader from '../../common/Preloader'
import ProfileStatus from './ProfileStatus';

const Profileinfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    let git = props.profile.github!=null ? props.profile.github : "Пусто" ;
    let avatar = props.profile.photos.small!=null ? <img src={props.profile.photos.small} alt='r'/> :  <img src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png" alt='r'/>;

    return(
        <div className={cla.ANB}>
         <img className={cla.profimg} src="https://zastavok.net/main/raznoe/168070560590.jpg" alt='f'/>
         <div className={cla.avatar}>{avatar}</div>
         <div className={cla.discr}>Name: {props.profile.fullName} <br/> Contacts: {git} <br/> Status: <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} /></div>
        </div>
    );
}
export default Profileinfo;