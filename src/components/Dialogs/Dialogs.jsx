import { NavLink } from 'react-router-dom';
import cla from './Dialogs.module.css';

const DialogItem = (props) =>{
    return  <div className={cla.dialog}><NavLink to={'/dialods/'+props.id}>{props.name}</NavLink></div>;
 }
 
 const MessageUser = (props) =>{
     return   <div className={cla.message}>{props.mes}</div>
 }

const Dialogs =(props) =>{
    let Userslist = props.state.UsersData.map(u => <DialogItem name={u.name} id={u.id}/> )
    let MesUser = props.state.MessageData.map(m => <MessageUser mes={m.mes}/>)
    return(
        <div className={cla.dialogs}>
            <div className={cla.dialogs__item}>
                {Userslist}
            </div> 
                <div className={cla.messages}>
                    {MesUser}
                </div>          
        </div>
    );
}
export default Dialogs;