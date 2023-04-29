import { NavLink } from 'react-router-dom';
import cla from './Friends.module.css';

const List = (props) =>{
    return(
        <div className={cla.windwo}>
            <div className={cla.PAN}><NavLink to={'/profile/'+props.id}>
                <img src={props.url__ava__user} alt='a'/>
            <figcaption>{props.name}</figcaption></NavLink>
            </div>
        </div>
    )
}

const Friends = (props) => {
    let NewList= props.state.FriendsData.map(k => <List id={k.id} url__ava__user={k.url__ava__user} name={k.name} />)
    return(
        <div className={cla.asa}>
        <div className={cla.friends}>
             <div className={cla.disfri}>Friends</div>
                <div className={cla.friend__list}>
                    {NewList}
                </div>
        </div>
        </div>
    )
}
export default Friends;