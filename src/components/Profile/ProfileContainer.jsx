import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import { useParams } from 'react-router-dom'; 


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
      userId=2;
    }
      this.props.getUserProfile(userId)
    }
  render() {
    return ( 
    <Profile { ...this.props}  />
    )
  }
}

    let mapStateToProps = (state) =>({
      profile: state.ProfilePage.profile
    });

const WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })( WithUrlDataComponent);