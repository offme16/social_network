import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getUserStatus,updateUserStatus} from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom'; 
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


export function withRouter(Children){
  return(props)=>{

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
} 
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId=this.props.LoginedUserId;
    }
      this.props.getUserProfile(userId);
    
      this.props.getUserStatus(userId);
    }
  render() {
    return ( 
    <Profile { ...this.props}  status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
    )
  }
}

    let mapStateToProps = (state) =>({
      profile: state.ProfilePage.profile,
      status: state.ProfilePage.status,
      LoginedUserId: state.auth.id,
      isAuth: state.auth.isAuth,
    });

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)