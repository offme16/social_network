import axios from 'axios';
import React from 'react';
import People from './People';
class PeopleAPIComponent extends React.Component {
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

export default PeopleAPIComponent;