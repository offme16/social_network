import { NavLink, Navigate } from 'react-router-dom';
import cla from './Dialogs.module.css';
import React from 'react';
import { Field , reduxForm} from 'redux-form';
import { Textarea } from '../common/FormsControls';
import { maxLengthCreater, requiredField } from '../../utilits/vlidators';

const DialogItem = (props) =>{
    return  <NavLink to={'/dialods/'+props.id}> <div className={cla.dialog}> <img className={cla.ava__user} src={props.url__ava__user} alt='ph'/><div className={cla.user__name}>{props.name} </div> </div></NavLink>;
 }
 
 const MessageUser = (props) =>{
     return   <div className={cla.message}>{props.mes}</div>
 }



const Dialogs =(props) =>{

    let MesUser = props.messages.map(m => <MessageUser mes={m.mes}/>)

    let Userslist = props.users.map(u => <DialogItem name={u.name} id={u.id} url__ava__user={u.url__ava__user} /> )

    let onSendMes = (values) =>{
        props.sendMessclick(values.Newmessage)
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
                    < MessageReduxForm onSubmit={onSendMes} />
            </div>  
        </div>    
                    
        </div>
    );
}

const maxLength150 = maxLengthCreater(150)
const addMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={cla.fortextbut}>
                    <Field component={Textarea} name="Newmessage" placeholder="Write a message.." validate={[requiredField, maxLength150]}/>
                    <button >Send</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form: 'DialogsAddMess'
})(addMessageForm)
export default Dialogs;