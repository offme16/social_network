import { connect } from 'react-redux';
import { followAC, unfollowAC,setusersAC  } from '../../redux/people-reducer';
import People from './People'

let mapStateToProps = (state) =>{
    return {
        peoplelist: state.PeoplePage.PeopleData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid));
        },
        unfollow: (userid) => {
            dispatch(unfollowAC(userid));
        },
        setusers: (users) => {
            dispatch(setusersAC(users));
        } 
    }
}


const PeopleContainer = connect(mapStateToProps,mapDispatchToProps)(People);

export default PeopleContainer;
