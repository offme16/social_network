import { connect } from 'react-redux';
import { follow, unfollow,setusers,setCurrentPage,setTotalUsersCount,toggleIsFetching  } from '../../redux/people-reducer';
import axios from 'axios';
import React from 'react';
import People from './People';
import Preloader from '../common/Preloader'

class PeopleContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if(this.props.peoplelist.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true})
                 .then(response =>{
                    this.props.toggleIsFetching(false);
                     this.props.setusers(response.data.items);
                     this.props.setTotalUsersCount(response.data.totalCount);
            });
        }
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials:true})
                 .then(response =>{
                    this.props.toggleIsFetching(false);
                     this.props.setusers(response.data.items);
            });
    } 
render() {
    return <>
         {this.props.isFetching ? <Preloader /> : null }
     <People totalusersCount={this.props.totalusersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    peoplelist={this.props.peoplelist}
                    setusers={this.props.setusers}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
     /> </>
}
};

let mapStateToProps = (state) =>{
    return {
        peoplelist: state.PeoplePage.PeopleData,
        pageSize: state.PeoplePage.pageSize,
        totalusersCount: state.PeoplePage.totalusersCount,
        currentPage: state.PeoplePage.currentPage, 
        isFetching: state.PeoplePage.isFetching,
    }
}


export default PeopleContainer = connect(mapStateToProps, { follow, unfollow, setusers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(PeopleContainer);

