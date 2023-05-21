import React from 'react';
import { sendMessCreator, updateNewMesBodyCreater } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


/*const DialogsContainer = () =>{
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
}*/

let mapStateToProps = (state) =>{
    return {
        messages: state.MessagePage.MessageData,
        users: state.MessagePage.UsersData,
        Newmessage:state.MessagePage.Newmessage,
    }
}
let mapDispathToProps = (dispatch) =>{
    return {
        sendMessclick: () =>{
            dispatch(sendMessCreator());
        },
        SendMes:(body)=>{
            dispatch(updateNewMesBodyCreater(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispathToProps)(Dialogs);

export default DialogsContainer;