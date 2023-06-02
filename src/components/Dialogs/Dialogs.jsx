import { NavLink, Navigate } from 'react-router-dom';
import cla from './Dialogs.module.css';
import React from 'react';


const DialogItem = (props) =>{
    return  <NavLink to={'/dialods/'+props.id}> <div className={cla.dialog}> <img className={cla.ava__user} src={props.url__ava__user} alt='ph'/><div className={cla.user__name}>{props.name} </div> </div></NavLink>;
 }
 
 const MessageUser = (props) =>{
     return   <div className={cla.message}>{props.mes}</div>
 }

const Dialogs =(props) =>{

    let MesUser = props.messages.map(m => <MessageUser mes={m.mes}/>)

    let Userslist = props.users.map(u => <DialogItem name={u.name} id={u.id} url__ava__user={u.url__ava__user} /> )

    let sendmessagesEl = React.createRef();

    let onsendMessclick = () =>{
        props.sendMessclick();
    }
    let onSendMes = (event) =>{
        let body= event.target.value;
        props.SendMes(body);
    }
    if(props.isAuth === false)
    {
        return <Navigate to='/login'/>
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
                     value={props.Newmessage} onChange={onSendMes} placeholder='Write a message..'></textarea>
                    <button onClick={onsendMessclick}>Send</button>
                </div>
            </div>  
        </div>    
                    
        </div>
    );
}
export default Dialogs;