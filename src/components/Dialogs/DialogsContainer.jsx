import { sendMessclick,  SendMes } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) =>{
    return {
        messages: state.MessagePage.MessageData,
        users: state.MessagePage.UsersData,
        Newmessage:state.MessagePage.Newmessage,
    }
}

let AuthRedirectComponent= withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,{ sendMessclick,  SendMes })(AuthRedirectComponent);

export default DialogsContainer;