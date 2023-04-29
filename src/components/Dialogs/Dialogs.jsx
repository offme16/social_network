import { NavLink } from 'react-router-dom';
import cla from './Dialogs.module.css';
import React from 'react';
const DialogItem = (props) =>{
    return  <NavLink to={'/dialods/'+props.id}> <div className={cla.dialog}> <img className={cla.ava__user} src={props.url__ava__user} alt='ph'/><div className={cla.user__name}>{props.name} </div> </div></NavLink>;
 }
 
 const MessageUser = (props) =>{
     return   <div className={cla.message}>{props.mes}</div>
 }

const Dialogs =(props) =>{
    let Userslist = props.state.UsersData.map(u => <DialogItem name={u.name} id={u.id} url__ava__user={u.url__ava__user} /> )
    let MesUser = props.state.MessageData.map(m => <MessageUser mes={m.mes}/>)
    let sendmessagesEl = React.createRef();
    let sendMess = () =>{
        let messages__text = sendmessagesEl.current.value; 
        alert(messages__text);
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
                    <textarea className={cla.writetxt} ref={sendmessagesEl} placeholder='Write a message..'></textarea>
                    <button onClick={sendMess}> send</button>
                </div>
            </div>  
        </div>    
                    
        </div>
    );
}
export default Dialogs;