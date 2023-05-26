import cla from './People.module.css';
import axios from 'axios';
import React from 'react';
import userPgoto from '../../asses/images/usersimg.jpg';

class People extends React.Component {
        componentDidMount() {
            if(this.props.peoplelist.length === 0){
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                     .then(response =>{
                         this.props.setusers(response.data.items);
                         this.props.setTotalUsersCount(response.data.totalCount);
                });
            }
        };
        onPageChanged = (pageNumber) =>{
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                     .then(response =>{
                         this.props.setusers(response.data.items);
                });
        } 
    render() {
        let pageCount =  Math.ceil(this.props.totalusersCount / this.props.pageSize);
        let pages = [];
        for(let i=1;i<=pageCount;i++){
            pages.push(i);
        }
        return <div className={cla.container}>
            <div>
                {pages.map(p=>{
                     return <span onClick={(e)=>this.onPageChanged(p)} className={this.props.currentPage === p && cla.selectedPage}>{p}</span>
                })}
                </div>
        {
            
            this.props.peoplelist.map(u=><div className={cla.block} key={u.id}>
                
                <div className={cla.ava__desp}>
                    <div className={cla.user__photo}>
                    <img  src={u.photos.small != null ? u.photos.small: userPgoto} alt='f' />
                    </div>
                    <div className={cla.name__status}>
                <div>{u.name}</div>
                <span>{"u.location.sity"} , {"u.location.country"}</span>
                </div>
                </div> 
                <div>
                   <div>{u.followed ? <button onClick={()=>{this.props.unfollow(u.id)}}>UNFOLLOW</button>
                                    : <button onClick={()=>{this.props.follow(u.id)}}>FOLLOW</button>}</div>             
                </div>
            </div>)
        }
        <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                </div>
    </div>
    }
};

export default People;