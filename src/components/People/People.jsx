import cla from './People.module.css';
import axios from 'axios';
import React from 'react';
import userPgoto from '../../asses/images/usersimg.jpg';

class People extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.peoplelist.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                 .then(response =>{
                     this.props.setusers(response.data.items);
            });
        }
    }
    render() {
        return <div className={cla.container}>
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
    </div>
    }
};


export default People;