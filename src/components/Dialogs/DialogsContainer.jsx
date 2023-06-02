import { sendMessclick,  SendMes } from '../../redux/message-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) =>{
    return {
        messages: state.MessagePage.MessageData,
        users: state.MessagePage.UsersData,
        Newmessage:state.MessagePage.Newmessage,
    }
}


export default compose(
    connect(mapStateToProps,{ sendMessclick,  SendMes }), withAuthRedirect
    )(Dialogs);