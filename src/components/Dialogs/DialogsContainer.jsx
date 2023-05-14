import React from 'react';
import { sendMessCreator, updateNewMesBodyCreater } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () =>{
    return(<StoreContext.Consumer>
        {
        (store) =>{
            let state = store.getState().MessagePage;  
    //let state = props.store.getState().MessagePage;
    let sendMessclick = () =>{
        store.dispatch(sendMessCreator());
    }
    let SendMes = (body) =>{
        store.dispatch(updateNewMesBodyCreater(body));
    }       
            return <Dialogs   sendMessclick={sendMessclick} 
             SendMes={SendMes} 
             messages={state.MessageData}
              users={state.UsersData}
               Newmessage={state.Newmessage} />
}}</StoreContext.Consumer> );
}
export default DialogsContainer;