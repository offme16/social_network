import cla from './People.module.css';
import React from 'react';
import userPgoto from '../../asses/images/usersimg.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
let People = (props) =>{
    let pageCount =  Math.ceil(props.totalusersCount / props.pageSize);
        let pages = [];
        for(let i=1;i<=pageCount;i++){
            pages.push(i);
        }
        return  <div className={cla.container}>
            <div>
                {pages.map(p=>{
                     return <span onClick={(e)=>props.onPageChanged(p)} className={props.currentPage === p && cla.selectedPage}>{p}</span>
                    
                })}
                </div>
        {
            
            props.peoplelist.map(u=><div className={cla.block} key={u.id}>
                
                <div className={cla.ava__desp}>
                     <NavLink to={'/profile/'+u.id}>
                    <div className={cla.user__photo}>
                    <img  src={u.photos.small != null ? u.photos.small: userPgoto} alt='f' />
                    </div>  </NavLink>
                    <div className={cla.name__status}>
                <div>{u.name}</div>
                <span>{"u.location.sity"} , {"u.location.country"}</span>
                </div>
                </div> 
                <div>
                   <div>{u.followed ? <button onClick={()=>{axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{withCredentials:true, headers:{"API-KEY":"1e301298-249e-4e7f-953e-dd11443a2b32"}})
                 .then(response =>{
                     if(response.data.resultCode===0){
                        props.unfollow(u.id);
                     }
            });}}>UNFOLLOW</button>
                                    : <button onClick={()=>{axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{withCredentials:true, headers:{"API-KEY":"1e301298-249e-4e7f-953e-dd11443a2b32"}})
                                    .then(response =>{
                                        if(response.data.resultCode===0){
                                           props.follow(u.id);
                                        }
                               });}}>FOLLOW</button>}</div>             
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

export default People;