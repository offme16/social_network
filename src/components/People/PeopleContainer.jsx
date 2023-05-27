import { connect } from 'react-redux';
import { followAC, unfollowAC,setusersAC,setcurrentAC,settotalAC  } from '../../redux/people-reducer';
import axios from 'axios';
import React from 'react';
import People from './People';

class PeopleContainer extends React.Component {
    componentDidMount() {
        if(this.props.peoplelist.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                 .then(response =>{
                     this.props.setusers(response.data.items);
                     this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                 .then(response =>{
                     this.props.setusers(response.data.items);
            });
    } 
render() {
    debugger
    return  <People totalusersCount={this.props.totalusersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    peoplelist={this.props.peoplelist}
                    setusers={this.props.setusers}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    /> 
}
};

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

export default PeopleContainer = connect(mapStateToProps,mapDispatchToProps)(PeopleContainer);

