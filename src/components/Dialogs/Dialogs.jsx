import { NavLink } from 'react-router-dom';
import cla from './Dialogs.module.css';
import React from 'react';
import { sendMessCreator, updateNewMesBodyCreater } from '../../redux/message-reducer';

const DialogItem = (props) =>{
    return  <NavLink to={'/dialods/'+props.id}> <div className={cla.dialog}> <img className={cla.ava__user} src={props.url__ava__user} alt='ph'/><div className={cla.user__name}>{props.name} </div> </div></NavLink>;
 }
 
 const MessageUser = (props) =>{
     return   <div className={cla.message}>{props.mes}</div>
 }

const Dialogs =(props) =>{

    let state = props.store.getState().MessagePage;

    let MesUser = state.MessageData.map(m => <MessageUser mes={m.mes}/>)
    let Userslist = state.UsersData.map(u => <DialogItem name={u.name} id={u.id} url__ava__user={u.url__ava__user} /> )

    let sendmessagesEl = React.createRef();
    let Newmessage = state.Newmessage;

    let sendMessclick = () =>{
        props.store.dispatch(sendMessCreator());
    }
    let onSendMes = (event) =>{
        let body= event.target.value;
        props.store.dispatch(updateNewMesBodyCreater(body));
    }
    return(
        <div className={cla.dialogs}>
            <div className={cla.dialogs__item}>            
                {Userslist}          
            </div> 
                <div className={cla.messages}>
                    <div className={cla.onlymes}>
                       {MesUser}
                    </div>
                    <div className={cla.sendmessages}> 
                    <hr></hr>
                    <div className={cla.fortextbut}>
                    <textarea className={cla.writetxt} ref={sendmessagesEl}
                     value={Newmessage} onChange={onSendMes} placeholder='Write a message..'></textarea>
                    <button onClick={sendMessclick}>Send</button>
                </div>
            </div>  
        </div>    
                    
        </div>
    );
}
export default Dialogs;