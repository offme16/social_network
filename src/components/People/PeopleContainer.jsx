import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowProgress, getUsers } from '../../redux/people-reducer';
import React from 'react';
import People from './People';
import Preloader from '../common/Preloader'
import { Navigate } from 'react-router-dom';


class PeopleContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

    }
    render() {
        if(!this.props.isAuth){
            return <Navigate to={'/login'}/>
        }
        return<>
            {this.props.isFetching ? <Preloader /> : null}
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

let mapStateToProps = (state) => {
    return {
        peoplelist: state.PeoplePage.PeopleData,
        pageSize: state.PeoplePage.pageSize,
        totalusersCount: state.PeoplePage.totalusersCount,
        currentPage: state.PeoplePage.currentPage,
        isFetching: state.PeoplePage.isFetching,
        followingProgress: state.PeoplePage.followingProgress,
        isAuth: state.auth.isAuth,
    }
}


export default PeopleContainer = connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowProgress, getUsers
})(PeopleContainer);

