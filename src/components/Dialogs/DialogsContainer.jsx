import { sendMessclick,  SendMes } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        messages: state.MessagePage.MessageData,
        users: state.MessagePage.UsersData,
        Newmessage:state.MessagePage.Newmessage,
        isAuth: state.auth.isAuth,
    }
}


const DialogsContainer = connect(mapStateToProps,{ sendMessclick,  SendMes })(Dialogs);

export default DialogsContainer;