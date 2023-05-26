import { connect } from 'react-redux';
import { followAC, unfollowAC,setusersAC,setcurrentAC,settotalAC  } from '../../redux/people-reducer';
import People from './People'

let mapStateToProps = (state) =>{
    return {
        peoplelist: state.PeoplePage.PeopleData,
        pageSize: state.PeoplePage.pageSize,
        totalusersCount: state.PeoplePage.totalusersCount,
        currentPage: state.PeoplePage.currentPage, 
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
        }, 
        setCurrentPage:(currentNum) =>{
            dispatch(setcurrentAC(currentNum));
        },
        setTotalUsersCount:(totalCount) =>{
            dispatch(settotalAC(totalCount));
        }
    }
}


const PeopleContainer = connect(mapStateToProps,mapDispatchToProps)(People);

export default PeopleContainer;
