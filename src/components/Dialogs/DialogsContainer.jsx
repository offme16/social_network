import React from 'react';
import { sendMessCreator, updateNewMesBodyCreater } from '../../redux/message-reducer';
import Dialogs from './Dialogs';


const DialogsContainer =(props) =>{

    let state = props.store.getState().MessagePage;

    let sendMessclick = () =>{
        props.store.dispatch(sendMessCreator());
    }
    let SendMes = (body) =>{
        props.store.dispatch(updateNewMesBodyCreater(body));
    }
    return( <Dialogs   sendMessclick={sendMessclick} SendMes={SendMes} messages={state.MessageData} users={state.UsersData} Newmessage={state.Newmessage} />
    );
}
export default DialogsContainer;