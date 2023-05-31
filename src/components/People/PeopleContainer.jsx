import { connect } from 'react-redux';
import { follow, unfollow,setusers,setCurrentPage,setTotalUsersCount,toggleIsFetching  } from '../../redux/people-reducer';
import React from 'react';
import People from './People';
import Preloader from '../common/Preloader'
import { getUsers } from '../../api/api';

class PeopleContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        if(this.props.peoplelist.length === 0){
                   getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
                    this.props.toggleIsFetching(false);
                     this.props.setusers(data.items);
                     this.props.setTotalUsersCount(data.totalCount);
            });
        }
    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize)
                 .then(data =>{
                    this.props.toggleIsFetching(false);
                     this.props.setusers(data.items);
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

