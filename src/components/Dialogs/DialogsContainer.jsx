import { sendMessCreator, updateNewMesBodyCreater } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

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